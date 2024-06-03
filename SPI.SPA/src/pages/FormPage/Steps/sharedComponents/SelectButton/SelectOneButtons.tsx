import { useEffect, useState } from "react";
import { Answer, TypeOfStep } from "../../../../../models/step/answer/answer.model";
import { StepModel } from "../../../../../models/step/step/step.model";
import { AnswersBoxStyled } from "../QuestionAndAnswers/Answers.styles";
import { SelectOneButton } from "./SelectButton/SelectOneButton/SelectOneButton";
import { useCurrentStep } from "../../../../../contexts/CurrentStep/currentStep";
import React from "react";
import { SelectOneButtonInput } from "./SelectButton/SelectOneButton/SelectOneButtonInput";

interface GenerateSelectButtonsProps {
  stepModel: StepModel,
  isShorter?: boolean,
}

export const SelectOneButtons = (props: GenerateSelectButtonsProps):JSX.Element => {
  const {
    stepModel,
    isShorter = false,
  } = props;

  const { currentStep, answersOfCurrentStep } = useCurrentStep();

  const [flag, setFlag] = useState<Answer | undefined>(undefined);

  useEffect(() => {
    if(currentStep.indexOfStep === stepModel.indexOfStep) {
      const answer = answersOfCurrentStep()[0];
      
      if(answer){
        if(!(answer.typeOfStep === TypeOfStep.OneWithInput)){
          setFlag(answer);
        }
        else if(answer.answer !== ''){
          setFlag(answer)
        }
      }
    }
  }, [currentStep.answers])

  const flagAndFlagSetter = {
    flag: flag,
    setFlag: setFlag,
  }

  const listText = 'Lista wyboru jednokrotnej odpowiedzi';
  const listTextPlusCustomInput = listText + ' z możliwością wpisania własnej odpowiedzi'

  return (
    //TODO Fix disableRipple into globally
    <AnswersBoxStyled 
      tabIndex={0}
      aria-label={stepModel.typeOfStep === TypeOfStep.OneWithInput ? listTextPlusCustomInput : listText}
    >
      {stepModel.answers.map((a,i) => {
        return (
          a.isCustomInput
          ? <SelectOneButtonInput
              key={i}
              answer={a}
              flagAndFlagSetter={flagAndFlagSetter}
              stepModel={stepModel}/>
          : <SelectOneButton
              key={i}
              answer={a}
              isShorter={isShorter}
              flagAndFlagSetter={flagAndFlagSetter}/>
        )
      })}
    </AnswersBoxStyled>
  )
}