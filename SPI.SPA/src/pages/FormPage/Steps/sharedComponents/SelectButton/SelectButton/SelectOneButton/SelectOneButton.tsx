import { useForm } from "../../../../../../../contexts/Form/form";
import { Answer } from "../../../../../../../models/step/answer/answer.model";
import { ButtonWithCircleBox, CircleBox, SelectButtonsTipBoxBoxStyled, SelectButtonStyled } from "../SelectButton.styles";
import RadioButtonDefault from '../../../../../../../public/icons/RadioButtonDefault.svg';
import RadioButtonHC from '../../../../../../../public/icons/RadioButtonHC.svg';
import { Box } from "@mui/material";
import React from "react";
import { TipBoxIcon } from "../../../TipBox/TipBoxIcon";
import { visuallyHidden } from '@mui/utils';

interface GenerateSelectButtonProps {
  answer: Answer,
  flagAndFlagSetter: {
    flag: Answer | undefined,
    setFlag: React.Dispatch<React.SetStateAction<Answer | undefined>>,
  },
  isShorter?: boolean,
}

export const SelectOneButton = (props:GenerateSelectButtonProps):JSX.Element => {
  const {
    answer,
    flagAndFlagSetter,
    isShorter = false,
  } = props;

  const { changeAnswerOfCurrentStepInForm } = useForm();

  const flag = flagAndFlagSetter.flag;
  const setFlag = flagAndFlagSetter.setFlag;

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
      <CircleBox
        onClick={() => handleClick(answer)}
      >
        {flag?.answer === answer.answer ?
            <Box component='img' src={RadioButtonHC} aria-label=""/>
            : <Box component='img' src={RadioButtonDefault} aria-label=""/>}
      </CircleBox>

      <SelectButtonStyled
        disableRipple= {true}
        variant={flag?.answer === answer.answer ? "contained" : "outlined"}
        onClick={() => handleClick(answer)}
        style={{textAlign: 'left'}}
        isShorter={isShorter}
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