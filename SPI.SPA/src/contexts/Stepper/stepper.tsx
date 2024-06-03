import { createContext, useContext, useState } from "react";
import { Answer, defaultAnswer } from "../../models/step/answer/answer.model";
import { useCurrentStep } from "../CurrentStep/currentStep";
import { useForm } from "../Form/form";
import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
  children?: React.ReactNode;
}

interface StepperContextValue {
  nextStep(indexOfStepToGoTo?: number): void;
  previousStep(): void;
  isError: boolean;
  changeIsError(isError: boolean): void;
}

const StepperContext = createContext<StepperContextValue>({
  nextStep: () => {},
  previousStep: () => {},
  isError: false,
  changeIsError: () => {},
});

const StepperProvider = ({ children }: props): JSX.Element => {
  const { form, removeStepFromForm } = useForm();
  const { currentStep, sendStepToDB, changeIndexOfCurrentStep, answersOfCurrentStep } = useCurrentStep();

  const [startTime, setStartTime] = useState<Date>(new Date());
  const [isError, setIsError] = useState<boolean>(false);

  let navigate = useNavigate();

  //Stepper
  function nextStep(indexOfStepToGoTo?: number):void {    
    if(indexOfStepToGoTo){
      changeIndexOfCurrentStep(indexOfStepToGoTo);
    }

    const endTime = new Date();
    const timeDifference = Math.abs(endTime.getTime() - startTime.getTime()) / (1000 * 60);
    sendStepToDB({...currentStep, time: currentStep.time + timeDifference});

    const currentAnswer = answersOfCurrentStep();
    let answer: Answer = defaultAnswer;

    if(Array.isArray(currentAnswer)){
      answer = currentAnswer[0];
    }
    else{
      answer = currentAnswer;
    }

    function changeAndDeleteStep(indexToGoTo: number) {
      //TODO think about case where there is multi of different numbers not one after one

      if(form.answers.some(a => a.indexOfStep === indexToGoTo)){
        const deleting = indexToGoTo - currentStep.indexOfStep;
        const arrOfIdexesToDelete = [];

        for (let i = 1; i < deleting; i ++){
          arrOfIdexesToDelete.push(currentStep.indexOfStep + i)
        }

        arrOfIdexesToDelete.forEach(i => removeStepFromForm(i))
      }

      changeIndexOfCurrentStep(indexToGoTo)
    }

    if(answer) {
      if(answer.answer === ''){
        changeAndDeleteStep(currentStep.indexOfStepToGoTo ? currentStep.indexOfStepToGoTo : currentStep.indexOfStep +1)
        setStartTime(new Date());
      }
      else{
        changeAndDeleteStep(answer.indexOfStepToGoTo)
        setStartTime(new Date());
      }
    }
    else{
      //throw Error('Question is not answered')
    }
  }

  function previousStep():void {
    try{
      if(currentStep.indexOfStep === 100){
        changeIndexOfCurrentStep(22)
      }
      else if (currentStep.indexOfStep === 23){
        changeIndexOfCurrentStep(100)
      }
      else if (currentStep.indexOfStep === 42){
        changeIndexOfCurrentStep(50)
      }
      else{
        if(form.answers !== [] && currentStep){
          const indexOfPreviousStep = form.answers.find(a => a.indexOfStepToGoTo === currentStep.indexOfStep);
            if(indexOfPreviousStep){
              changeIndexOfCurrentStep(indexOfPreviousStep.indexOfStep)
            }
          }
      }
    }
    catch{
      navigate('/');
    }
  }

  function changeIsError(error: boolean){
    setIsError(error);
  }

  return (
    <StepperContext.Provider
      value={{
        nextStep,
        previousStep,
        isError,
        changeIsError,
      }}>
      {children}
    </StepperContext.Provider>
  );
};

export default StepperProvider;

export const useStepper = (): StepperContextValue => {
  const context = useContext(StepperContext);
  if (!context) throw new Error('Context must be used within <StepperProvider/>');
  return context;
};