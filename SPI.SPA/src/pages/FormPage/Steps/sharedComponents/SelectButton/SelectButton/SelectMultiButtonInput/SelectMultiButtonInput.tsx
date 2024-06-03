import { useForm } from "../../../../../../../contexts/Form/form";
import { Answer } from "../../../../../../../models/step/answer/answer.model";
import { ButtonWithCircleBox, SquareBox, SelectButtonsTipBoxBoxStyled } from "../SelectButton.styles";

import { useEffect, useState } from "react";
import { useCurrentStep } from "../../../../../../../contexts/CurrentStep/currentStep";
import { Box } from "@mui/material";

import CheckboxDefault from '../../../../../../../public/icons/CheckboxDefault.svg';
import CheckboxHover from '../../../../../../../public/icons/CheckboxHover.svg';
import CheckboxActive from '../../../../../../../public/icons/CheckboxActive.svg';
import React from "react";
import { TipBoxIcon } from "../../../TipBox/TipBoxIcon";
import { CustomImput } from "../../../CustomInput/CustomInput";
import { StepModel } from "models/step/step/step.model";

interface GenerateSelectButtonProps {
  stepModel: StepModel,
}

export const SelectMultiButtonInput = (props:GenerateSelectButtonProps):JSX.Element => {
  const {
    stepModel,
  } = props;

  const { currentStep, answersOfCurrentStep } = useCurrentStep();
  const findAnswer = answersOfCurrentStep().find(a => a.isCustomInput);
  const answer = findAnswer ? findAnswer : undefined;

  const [flag, setFlag] = useState<Answer | undefined>(answer);
  const { changeAnswerOfMultiStepInForm, form } = useForm();
  const [hover, setHover] = useState(false);
  const [currAnswer, setCurrAnswer] = useState(answer);

  useEffect(() =>{
    const currStepAnswers = answersOfCurrentStep();
    const findAnswerCustom = currStepAnswers.find(a => a.isCustomInput)

    if(findAnswerCustom){
      setCurrAnswer(findAnswerCustom)
    }
    else{
      setCurrAnswer(answer)
    }
  },[form.answers])

  useEffect(() => {
    if(currAnswer && currAnswer.indexOfStep === currentStep.indexOfStep){
      const currentAnswer = answersOfCurrentStep().find(a => a.isCustomInput);

      setFlag(currentAnswer)
    }
  }, [form.answers])

  const handleClick = (answer:Answer) => {
    const toDelete = (answer === flag);

    if(toDelete) {
      setFlag(undefined);
      setHover(true)
      changeAnswerOfMultiStepInForm(toDelete, answer);
    }
    else {
      setFlag(answer);
      setHover(false)
      changeAnswerOfMultiStepInForm(toDelete, answer);
    }
  };

  function returnCheckButton() {   
    if(hover){
      return <Box component='img' src={CheckboxHover} aria-label=""/>
    }
    else{
      return currAnswer && flag?.answer === currAnswer.answer ?
      <Box component='img' src={CheckboxActive} aria-label=""/>
      : <Box component='img' src={CheckboxDefault} aria-label=""/>
    }
  }

  function isMobile():boolean {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return true;
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return true;
    }
    return false;
  };

  return (
    <ButtonWithCircleBox>
      <SquareBox
        onClick={() => currAnswer && handleClick(currAnswer && currAnswer)}
        id="SquareBox"
        onMouseEnter={() => (currAnswer && (flag?.answer !== currAnswer.answer || !isMobile))? setHover(true) : null}
        onMouseLeave={() => (currAnswer && flag?.answer === currAnswer.answer && !isMobile)? null : setHover(false)}
      >
        {returnCheckButton()}
      </SquareBox>

      <CustomImput stepModel={stepModel}/>
      
      {answer && answer.answerTip &&
      <SelectButtonsTipBoxBoxStyled>
        <TipBoxIcon text={answer && answer.answerTip}/>
      </SelectButtonsTipBoxBoxStyled>}
    </ButtonWithCircleBox>
  )
}