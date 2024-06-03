import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import CheckboxDefault from '../../../../../../../public/icons/CheckboxDefault.svg';
import CheckboxHover from '../../../../../../../public/icons/CheckboxHover.svg';
import CheckboxActive from '../../../../../../../public/icons/CheckboxActive.svg';
import React from "react";
import { useCurrentStep } from "contexts/CurrentStep/currentStep";
import { useForm } from "contexts/Form/form";
import { Answer } from "models/step/answer/answer.model";
import { TipBoxIcon } from "../../../TipBox/TipBoxIcon";
import { ButtonWithCircleBox, SquareBox, SelectButtonStyled, SelectButtonsTipBoxBoxStyled } from "../SelectButton.styles";
import { visuallyHidden } from '@mui/utils';

interface GenerateSelectButtonProps {
  answer: Answer,
}

export const SelectMultiButton = (props:GenerateSelectButtonProps):JSX.Element => {
  const {
    answer,
  } = props;

  const [flag, setFlag] = useState<Answer | undefined>(undefined);
  const { currentStep, answersOfCurrentStep } = useCurrentStep();
  const { changeAnswerOfMultiStepInForm, form } = useForm();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if(answer.indexOfStep === currentStep.indexOfStep){
      const currentAnswer = answersOfCurrentStep().find(a => a.answer === answer.answer);

      if(currentAnswer){
        setFlag(currentAnswer);
      }
      else{
        setFlag(undefined);
      }
    }
  }, [form.answers])

  const handleClick = (answer:Answer) => {
    const toDelete = (answer === flag);

    setHover(false)
    
    if(toDelete) {
      setFlag(undefined);
      changeAnswerOfMultiStepInForm(toDelete, answer);
    }
    else {
      setFlag(answer);
      changeAnswerOfMultiStepInForm(toDelete, answer);
    }
  };

  function returnCheckButton() {   
    if(hover){
      return <Box component='img' src={CheckboxHover} aria-label=""/>
    }
    else{
      return flag?.answer === answer.answer ?
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
    <ButtonWithCircleBox
      onMouseEnter={() => (flag?.answer !== answer.answer || !isMobile)? setHover(true) : null}
      onMouseLeave={() => (flag?.answer === answer.answer && !isMobile)? null : setHover(false)}
      sx={{ position: 'relative', width: '100%'}}
    >
      <SquareBox
        onClick={() => handleClick(answer)}
        id="SquareBox"
      >
        {returnCheckButton()}
      </SquareBox>
      
      <SelectButtonStyled
        disableRipple= {true}
        variant={flag?.answer === answer.answer ? "contained" : "outlined"}
        onClick={() => handleClick(answer)}
      >
        <Box sx={visuallyHidden}>
          odpowiedź
        </Box>

        {answer.answer}
        
        <Box sx={visuallyHidden}>
          {flag?.answer === answer.answer ? "odpowiedź zaznaczona," : " odpowiedź odznaczona,"}
        </Box>
      </SelectButtonStyled>
      {answer.answerTip &&
        <SelectButtonsTipBoxBoxStyled>
          <TipBoxIcon text={answer.answerTip}/>
        </SelectButtonsTipBoxBoxStyled>}
    </ButtonWithCircleBox>
  )
}