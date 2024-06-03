import { Box } from "@mui/material";
import React, { Fragment, useRef } from "react";
import { useEffect, useState } from "react";
import { BodySmallSemiBoldText } from "shared/FontBoxes/FontBoxes.styles";
import { useCurrentStep } from "../../../../../../contexts/CurrentStep/currentStep";
import { useForm } from "../../../../../../contexts/Form/form";
import { PlusMinusBoxStyled, PlusMinusInsideBoxStyled, PlusMinusTextFieldStyled, PlusMinusTipBoxStyled, PlusMinusWithLabelBoxStyled } from "./PlusMinus.styles";
import AddIcon from '../../../../../../public/icons/AddIcon.svg';
import SubstractIcon from '../../../../../../public/icons/SubstractIcon.svg';
import AddIconClicked from '../../../../../../public/icons/AddIconClicked.svg';
import AddIconDisabled from '../../../../../../public/icons/AddIconDisabled.svg';
import SubstractIconClicked from '../../../../../../public/icons/SubstractIconClicked.svg';
import SubstractIconDisabled from '../../../../../../public/icons/SubstractIconDisabled.svg';
import { Answer } from "models/step/answer/answer.model";
import { TipBoxIcon } from "../../TipBox/TipBoxIcon";
import { useFooter } from "contexts/Footer/footer";
import { SmallerError } from "../../Error/SmallerError/SmallerError";
import { visuallyHidden } from '@mui/utils';

interface BoxPlusMinusProps {
  answer: Answer,
  limit: number,
}

export const PlusMinus = (props:BoxPlusMinusProps):JSX.Element => {
  const {
    answer,
    limit,
  } = props;

  const blockLeft = answer.value ? '' : 'left';

  const [value, setValue] = useState<string>('-');
  const [clicked, setClicked] = useState<string>('');
  const [isBlocked, setIsBlocked] = useState<string>(blockLeft);
  const [isError, setIsError] = useState<boolean>(false);

  const { answersOfCurrentStep } = useCurrentStep();
  const { form, changeAnswerOfCurrentStepInForm } = useForm();
  const { displayError } = useFooter();

  const myRef = useRef<HTMLDivElement>(null);
  if (myRef.current !== null) {
    myRef.current.focus();
  }

  function getValue(){
    const currentAnswer = answersOfCurrentStep().find(a => a.answer === answer.answer);
    
    if(currentAnswer){
      if(currentAnswer.value !== undefined && currentAnswer.value !== null){
        setValue((currentAnswer.value).toString());
      }
    }
  }

  useEffect(() => {
    getValue();
  }, [form.answers])

  useEffect(() => {
    if(displayError){
      if(value === '-'){
        setIsError(true);
      }
      else if(parseInt(value) === 0 && answer.indexOfStep === 6){
        setIsError(true)
      }
      else{
        setIsError(false)
      }
    }
    else{
      setIsError(false)
    }
  },[displayError, value])

  function changeValue(newValue: string) {
    
    if(newValue === ''){
      setValue('-')
    }
    const number = parseInt(newValue)

    if(number <= limit && number >= 0){
      setValue(newValue)
      changeAnswerOfCurrentStepInForm({...answer, answer: answer.answer, value: parseInt(newValue)});
      setIsBlocked('');
    }

    if(number <= 0 || (answer.indexOfStep === 6 && number <= 1)){
      setIsBlocked('left');
    }
    else if(number >= limit){
      setIsBlocked('right');
    }
  }

  function onClickCounter(number: number) {
    const currentValue = value === "-" ? -1 : parseInt(value);

    if(number === 1){
      setClicked('right')
    }
    else if(number === -1){
      setClicked('left')
    }

    setTimeout(function () {
      setClicked('')
    }, 200);

    let newValue = currentValue + number;

    if(answer.indexOfStep === 6 && value === '-' && number === 1){
      newValue++;
    }

    changeValue(newValue.toString())
  }

  const buttonStyle = {
    height: '37px',
    width: '37px',
    '&:hover': {
      cursor: 'pointer'
    },
  }

  const blockedButtonStyle = {
    height: '37px',
    width: '37px',
  }

  function returnButtonIcon(side: string){
    if(side === 'left'){
      if(isBlocked === 'left'){
        return SubstractIconDisabled
      }
      else{
        return clicked === 'left' && !(isBlocked === 'left') ? SubstractIconClicked : SubstractIcon
      }
    }
    else if(side === 'right'){
      if(isBlocked === 'right'){
        return AddIconDisabled
      }
      else{
        return clicked === 'right' && !(isBlocked === 'right') ? AddIconClicked : AddIcon
      }
    }
  }
  
  const placeholder = value? (parseInt(value) === 0 ? '0' : '-') : '-';

  function returnErrorMesssage(){
    return answer.indexOfStep === 6
    ? 'Wartość musi być większa lub równa 1'
    : 'Wartość musi być większa lub równa 0'
  }

  return (
    <Fragment>
      <PlusMinusWithLabelBoxStyled tabIndex={0}>
        <BodySmallSemiBoldText>
          {answer.answer}
        </BodySmallSemiBoldText>
        <PlusMinusInsideBoxStyled>
          <PlusMinusBoxStyled isError={isError}>
            <Box
              component='img'
              src={returnButtonIcon('left')}
              sx={isBlocked === 'left' ? blockedButtonStyle : buttonStyle}
              onClick={() => onClickCounter(-1)}
              aria-label={'Odejmij'}
            />
            <PlusMinusTextFieldStyled
              placeholder={placeholder}
              value={value}
              onChange={(e:any) => changeValue(e.target.value)}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <Box sx={visuallyHidden}>{value !== '-' ? value : 'Brak'}</Box>
            <Box
              component='img'
              src={returnButtonIcon('right')}
              sx={isBlocked === 'right' ? blockedButtonStyle : buttonStyle}
              onClick={() => onClickCounter(1)}
              aria-label={'Dodaj'}
            />
          </PlusMinusBoxStyled>
          <PlusMinusTipBoxStyled>
            {answer.answerTip &&
              <TipBoxIcon text={answer.answerTip}
                toRightSide={true}/>}
          </PlusMinusTipBoxStyled>
        </PlusMinusInsideBoxStyled>
        {isError && <SmallerError errorMessage={returnErrorMesssage()}/>}
      </PlusMinusWithLabelBoxStyled>
    </Fragment>
  )
}