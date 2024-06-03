import { StepModel } from "../../../../../models/step/step/step.model";
import { AnswersBoxStyled } from "../QuestionAndAnswers/Answers.styles";
import { SelectMultiButtonInput } from "./SelectButton/SelectMultiButtonInput/SelectMultiButtonInput";
import React from "react";
import { SelectMultiButton } from "./SelectButton/SelectMultiButtonInput/SelectMultiButton";
import { TypeOfStep } from "models/step/answer/answer.model";

interface GenerateSelectButtonsProps {
  stepModel: StepModel,
}

export const SelectMultiButtons = (props: GenerateSelectButtonsProps):JSX.Element => {
  const {
    stepModel,
  } = props;

  const listText = 'Lista wyboru wielokrotnej odpowiedzi';
  const listTextPlusCustomInput = listText + ' z możliwością wpisania własnej odpowiedzi'

  console.log(stepModel.typeOfStep)

  return (
    <AnswersBoxStyled
      tabIndex={0}
      aria-label={stepModel.typeOfStep === TypeOfStep.MultiWithInput ? listTextPlusCustomInput : listText}
    >
      {stepModel.answers.map((a,i) => {
        return (
          a.isCustomInput
          ? <SelectMultiButtonInput
              key={i}
              stepModel={stepModel}
            />
          : <SelectMultiButton
            key={i}
            answer={a}
          />
        )
      })}
    </AnswersBoxStyled>
  )
}