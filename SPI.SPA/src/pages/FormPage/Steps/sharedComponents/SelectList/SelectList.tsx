import { MenuItem } from "@mui/material";
import { useCurrentStep } from "contexts/CurrentStep/currentStep";
import { useForm } from "contexts/Form/form";
import { Answer } from "models/step/answer/answer.model";
import { StepModel } from "models/step/step/step.model";
import React, { useState } from "react";
import { SelectListStyled } from "./SelectList.styles";

type SelectListBoxProps = {
  stepModel: StepModel,
}

export function SelectList(props:SelectListBoxProps) {
  const {
    stepModel
  } = props;

  const { answersOfCurrentStep } = useCurrentStep();
  const { changeAnswerOfCurrentStepInForm } = useForm();
  
  const [value, setValue] = useState<Answer>(answersOfCurrentStep()[0]);

  const handleChange = (answer: string) => {
    if(answer !== null){
      const answerFind = stepModel.answers.find(a => a.answer === answer)
      if(answerFind){
        setValue(answerFind);
        changeAnswerOfCurrentStepInForm(answerFind);
      }
    }
  }
  
  return(
    <SelectListStyled
      value={value?.answer}
      onChange={(event) => {
        handleChange(event.target.value as string);
      }}
    >
      {stepModel.answers.map((option) => (
        <MenuItem key={option.answer} value={option.answer}>
          {option.answer}
        </MenuItem>
      ))}
    </SelectListStyled>
  )
}