import { useForm } from "../../../../../../../contexts/Form/form";
import { Answer, defaultAnswer } from "../../../../../../../models/step/answer/answer.model";
import { ButtonWithCircleBox, CircleBox, SelectButtonsTipBoxBoxStyled, SelectButtonStyled } from "../SelectButton.styles";

import RadioButtonDefault from '../../../../../../../public/icons/RadioButtonDefault.svg';
import RadioButtonHC from '../../../../../../../public/icons/RadioButtonHC.svg';
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TipBoxIcon } from "../../../TipBox/TipBoxIcon";
import { CustomImput } from "../../../CustomInput/CustomInput";
import { StepModel } from "models/step/step/step.model";
import { useCurrentStep } from "contexts/CurrentStep/currentStep";

interface GenerateSelectButtonProps {
  answer: Answer,
  flagAndFlagSetter: {
    flag: Answer | undefined,
    setFlag: React.Dispatch<React.SetStateAction<Answer | undefined>>,
  },
  stepModel: StepModel,
}

export const SelectOneButtonInput = (props:GenerateSelectButtonProps):JSX.Element => {
  const {
    answer,
    flagAndFlagSetter,
    stepModel,
  } = props;

  const { form, changeAnswerOfCurrentStepInForm } = useForm();
  const { answersOfCurrentStep } = useCurrentStep();
  const [currAnswer, setCurrAnswer] = useState(answer);
 
  const flag = flagAndFlagSetter.flag;
  const setFlag = flagAndFlagSetter.setFlag;

  useEffect(() =>{
    const currStepAnswers = answersOfCurrentStep();

    if(currStepAnswers.length > 0 && currStepAnswers[0].isCustomInput){
      setCurrAnswer(answersOfCurrentStep()[0])
    }
    else{
      setCurrAnswer(answer)
    }
  },[form.answers])

  const handleClick = (answer:Answer) => {
    if(answer === flag) {
      setFlag(undefined);
      changeAnswerOfCurrentStepInForm({...answer, answer: ''});
    }
    else {
      setFlag(answer);
      changeAnswerOfCurrentStepInForm(answer);
    }
  };

  return (
    <ButtonWithCircleBox>
      <CircleBox onClick={() => handleClick(currAnswer)}>
        {flag?.answer === currAnswer.answer ? 
            <Box component='img' src={RadioButtonHC} aria-label=""/>
            : <Box component='img' src={RadioButtonDefault} aria-label=""/>}
      </CircleBox>

      <CustomImput stepModel={stepModel}/>
      {answer.answerTip &&
        <SelectButtonsTipBoxBoxStyled>
          <TipBoxIcon text={answer.answerTip}/>
        </SelectButtonsTipBoxBoxStyled>}
    </ButtonWithCircleBox>
  )
}