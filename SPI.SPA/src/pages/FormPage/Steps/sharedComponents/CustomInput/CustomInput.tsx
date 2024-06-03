import { useStepper } from "contexts/Stepper/stepper"
import { StepModel } from "models/step/step/step.model"
import React from "react"
import { useEffect, useState } from "react"
import { useCurrentStep } from "../../../../../contexts/CurrentStep/currentStep"
import { useForm } from "../../../../../contexts/Form/form"
import { TypeOfStep } from "models/step/answer/answer.model"
import { CustomInputTextField } from "./CustomInputTextField"
import { useFooter } from "contexts/Footer/footer"

interface CustomInputProps {
  stepModel: StepModel,
}

export const CustomImput = (props:CustomInputProps):JSX.Element => {  
  const {
    stepModel,
  } = props;
  
  const isMultiWithInput = [TypeOfStep.MultiWithInput,TypeOfStep.OneWithInput].includes(stepModel.typeOfStep)
  const returnSpecialChars = stepModel.specialChars ? stepModel.specialChars : false;

  const { answersOfCurrentStep } = useCurrentStep();
  const { changeIsError } = useStepper();
  const { form, changeAnswerOfCurrentStepInForm, changeAnswerOfMultiStepInForm } = useForm();
  const { setDisplayError } = useFooter();
  const [ error, setError ] = useState<boolean>(false);

  const [value, setValue] = useState<string>('');
    
  useEffect(() => {
    if(isMultiWithInput){
      const findAnswer = answersOfCurrentStep().find(a => a.isCustomInput);
      
      if(findAnswer){
        setValue(findAnswer.answer);
      }
      else{
        setValue('');
      }
    }
    else if(answersOfCurrentStep()[0]){
      setValue(answersOfCurrentStep()[0].answer);
    }
  }, [form.answers])

  function onChange(value:string) {
    const findAnswer = stepModel.answers.find(a => a.isCustomInput);

    if(findAnswer){
      if(stepModel.typeOfStep === TypeOfStep.OneWithInput){
        changeAnswerOfCurrentStepInForm({...findAnswer, answer: value});
      }
      else{
        changeAnswerOfMultiStepInForm(false, {...findAnswer, answer: value})
      }
    }
    else{
      changeAnswerOfCurrentStepInForm({...stepModel.answers[0], answer: value});
    }
  }

  function returnError() {
    function chartValidation(char:string) {
      let validationCharts = returnSpecialChars ? /[@]/ : /[0123456789]/;
  
      if (returnSpecialChars){
        return validationCharts.test(char)
      }
      else{
        return !validationCharts.test(char)
      }
    }

    const isValid = !value.split('').some(char => chartValidation(char));

    const letterToCheck = /[QWERTYUIOPASDFGHJKLZXCVBNMqertyuiopasdfghjklzxcvbnmw]/
    const hasOneLetter = value.split('').some(char => letterToCheck.test(char))
    const checkOneLetter = hasOneLetter || !isMultiWithInput

    if(isValid && checkOneLetter){
      setError(false);
      setDisplayError(false);
    }
    else if(value === ''){
      setError(false);
    }
    else{
      setError(true)
    }
  }

  useEffect(() =>{
    returnError()
  },[value])

  useEffect(() => {
    changeIsError(error);
  },[error])

  const symbolAtEnd = stepModel.symbolAtEnd ? stepModel.symbolAtEnd : '';

  return (
    <CustomInputTextField
      stepModel={stepModel}
      onChangeFunction={onChange}
      symbolAtEnd={symbolAtEnd}
      error={error}
      value={value}
    />    
  )
}
