import { Box } from "@mui/material";
import { useCurrentStep } from "contexts/CurrentStep/currentStep";
import { useFooter } from "contexts/Footer/footer";
import { TypeOfStep } from "models/step/answer/answer.model";
import React, { useEffect, useRef } from 'react';
import RedCloseIcon from '../../../../../../public/icons/RedCloseIcon.svg';
import RedExclamationErrorIcon from '../../../../../../public/icons/RedExclamationErrorIcon.svg';
import { BiggerErrorBoxStyled, BiggerErrorContentStyled, BiggerErrorTextBoxStyled } from "./BiggerError.styles";

interface BiggerErrorProps {
  text?: string,
}

export const BiggerError = (props: BiggerErrorProps) => {
  const {
    text = ''
  } = props;
  
  const { setDisplayError } = useFooter();
  const { currentStep } = useCurrentStep();

  const readError = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    readError.current.focus();
  },[])

  function returnErrorText():string {
    switch(currentStep.typeOfStep){
      case(TypeOfStep.SelectList):
        return 'Aby przejść dalej, wybierz odpowiedź.'
      case(TypeOfStep.CustomInput):
        return 'Aby przejść dalej, wypełnij pole.'
      case(TypeOfStep.PlusMinus):
        return 'Aby przejść dalej, wypełnij pola.'
      case(TypeOfStep.SelectMulti):
        return 'Aby przejść dalej, wybierz odpowiedź/odpowiedzi.'
      case(TypeOfStep.MultiWithInput):
        return 'Aby przejść dalej, wpisz lub popraw odpowiedź/odpowiedzi.'
      case(TypeOfStep.SelectOne):
        return 'Aby przejść dalej, wybierz odpowiedź.'
      case(TypeOfStep.OneWithInput):
        return 'Aby przejść dalej, wpisz lub popraw odpowiedź.'
      case(TypeOfStep.YesNo):
        return 'Aby przejść dalej, wybierz odpowiedź.'
    }
  }

  return(
    <BiggerErrorBoxStyled>
      <BiggerErrorContentStyled>
        <Box
          component='img'
          aria-label=""
          src={RedExclamationErrorIcon}
          sx={{width: '28px'}}
        />
        <BiggerErrorTextBoxStyled
          tabIndex={0}
          ref={readError}
        >
          {text ? text : returnErrorText()}
        </BiggerErrorTextBoxStyled>
        <Box
          component='img'
          aria-label=""
          src={RedCloseIcon}
          sx={{
            width: '28px',
            cursor: 'pointer',
          }}
          onClick={() => setDisplayError(false)}
        />
      </BiggerErrorContentStyled>
    </BiggerErrorBoxStyled>
  )
}