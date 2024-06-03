import { createContext, useState, useContext, useEffect } from "react";
import { TypeOfStep, Answer } from "../../models/step/answer/answer.model";
import { defaultStep, StepModel } from "../../models/step/step/step.model";
import { useForm } from "../Form/form";
import StepperProvider from "../Stepper/stepper";
import { postStepToDB } from "./currentStep.handler";
import React from "react";

interface props {
  children?: React.ReactNode;
}

interface CurrentStepContextValue {
  currentStep: StepModel;
  createNewJourney: () => boolean;
  sendStepToDB: (step: StepModel) => void;
  addCurrentStep: (step: StepModel) => void;
  answersOfCurrentStep: () => Array<Answer>;
  isCurrentQuestionAnswered(): boolean;
  changeIndexOfCurrentStep: (indexOfStepToGoTo: number) => void;
}

const CurrentStepContext = createContext<CurrentStepContextValue>({
  currentStep: defaultStep,
  createNewJourney: () => false,
  sendStepToDB: () => () => {},
  addCurrentStep: () => {},
  answersOfCurrentStep: () => [],
  isCurrentQuestionAnswered: () => false,
  changeIndexOfCurrentStep: () => {},
});

const CurrentStepProvider = ({ children }: props): JSX.Element => {

  const saved = localStorage.getItem("currentStepData");

  const { form, addAnswerToForm, createNewForm, isQuestionAnswered } = useForm();
  const [currentStep, setCurrentStep] = useState<StepModel>({...defaultStep, indexOfStep: saved ? parseInt(saved) : 42});

  // useEffect(() => {
  //   console.log('currentStep---');
  //   console.log(currentStep)
  // }, [currentStep])

  useEffect(() => {
    localStorage.setItem("currentStepData", JSON.stringify(currentStep.indexOfStep));
  }, [currentStep])

  //Send to DB
  const sendStepToDB = async(step: StepModel) => {
    await postStepToDB(step, form.id);
  }

  //Current Step functions
  function addCurrentStep(step: StepModel) {  
    const isStepInForm = form.answers.some(a => a.indexOfStep === step.indexOfStep);

    if(!isStepInForm){
      const currentType = step.typeOfStep;

      if(currentType === TypeOfStep.PlusMinus){
        addAnswerToForm(step.answers);
      }
      else{
        const emptyAnswer:Answer = {
          indexOfStep: step.indexOfStep,
          typeOfStep: step.typeOfStep,
          answer: '',
          indexOfStepToGoTo: step.indexOfStep +1,
          deleteOther: '',
        }
    
        addAnswerToForm([emptyAnswer]);
      }
      setCurrentStep(step);
    }
    else{
      const currentStepAnswers = form.answers.filter(a => a.indexOfStep === step.indexOfStep);
      setCurrentStep({...step, answers: currentStepAnswers})
    }
  }

  function answersOfCurrentStep():Array<Answer> {
      const currentAnswers: Array<Answer> = form.answers.filter(a => a.indexOfStep === currentStep.indexOfStep)

      if(currentAnswers){
        if(currentAnswers.length === 1 || currentStep.typeOfStep === TypeOfStep.OneWithInput){
          return currentAnswers;
        }
        else if(currentAnswers.length > 1){
          const currentType = currentAnswers[0].typeOfStep;

          if(currentType === TypeOfStep.PlusMinus){
            return currentAnswers.filter(a => parseInt(a.answer) !== 0);
          }
          else if(currentType === TypeOfStep.SelectMulti
            || currentType === TypeOfStep.MultiWithInput){
            return currentAnswers.filter(a => a.answer !== '');
          }
          else{
            throw Error('Not implemented that multi answer type');
          }
        }
        else{
          return [];
        }
      }
      else{
        throw Error('Current answers not found');
      }
  }

  function isCurrentQuestionAnswered():boolean {
    return isQuestionAnswered(answersOfCurrentStep(), currentStep)
  }

  function changeIndexOfCurrentStep(indexOfStepToGoTo: number) {
    setCurrentStep({...currentStep, indexOfStep: indexOfStepToGoTo})
  }
  
  function createNewJourney() {
    const result = createNewForm();
    localStorage.setItem("currentStepData", JSON.stringify(defaultStep));
    setCurrentStep(defaultStep);
    return(true);
  }

  return (
    <CurrentStepContext.Provider
      value={{
        currentStep,
        createNewJourney,
        sendStepToDB,
        addCurrentStep,
        answersOfCurrentStep,
        isCurrentQuestionAnswered,
        changeIndexOfCurrentStep,
      }}>
        <StepperProvider>
          {children}
        </StepperProvider>
    </CurrentStepContext.Provider>
  );
};

export default CurrentStepProvider;

export const useCurrentStep = (): CurrentStepContextValue => {
  const context = useContext(CurrentStepContext);
  if (!context) throw new Error('Context must be used within <CurrentStepProvider/>');
  return context;
};