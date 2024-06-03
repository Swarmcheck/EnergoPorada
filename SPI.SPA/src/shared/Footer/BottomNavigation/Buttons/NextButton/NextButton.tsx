import { Box, Button } from "@mui/material";
import { useFooter } from "contexts/Footer/footer";
import { PageEnum } from "contexts/Footer/Page.enum";
import { useForm } from "contexts/Form/form";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCurrentStep } from "../../../../../contexts/CurrentStep/currentStep";
import { useStepper } from "../../../../../contexts/Stepper/stepper";
import { NextButtonStyled } from './NextButton.styles'

interface NextButtonProps {
  text?: string,
  isWelcomePage?: boolean,
  blackTheme?: boolean,
}

export const NextButton = (props: NextButtonProps):JSX.Element => {
  const {
    text = 'DALEJ',
    isWelcomePage = false,
    blackTheme = false,
  } = props;

  const { nextStep, isError } = useStepper();
  const { isCurrentQuestionAnswered } = useCurrentStep();
  const { currentPage, outsidePageLink, setDisplayError, setSwitchProgressBar, switchProgressBar } = useFooter();

  function clickHandler() {
    if((isError || !isCurrentQuestionAnswered()) && currentPage === PageEnum.Form){
      setDisplayError(true);
    }
    else if (currentPage === PageEnum.EGO){
      nextStep(42);
      setDisplayError(false);
    }
    else if (currentPage === PageEnum.Cheerup){
      nextStep(23);
      setDisplayError(false);
    }
    else {
      nextStep();
      setDisplayError(false);
      setSwitchProgressBar(!switchProgressBar);
    }
  }

  const disable = !(!isError && isCurrentQuestionAnswered() || blackTheme || isWelcomePage || currentPage === PageEnum.EGO);

  const nextButtonInForm = (
    <NextButtonStyled
      disabled={disable}
      onClick={clickHandler}
      blackTheme={blackTheme}
      disableRipple={true}
    >
      {text}
    </NextButtonStyled>
  )

  const isForm = [PageEnum.Cheerup, PageEnum.Form, PageEnum.EGO].includes(currentPage)

  return (
    isForm ?
    //If page is form
      disable?
        <Button
          onClick={() => clickHandler()}
          disableRipple={true}
          sx={{
            cursor: 'default', padding: 0,
          }}
          aria-label={disable ? 'Kolejne pytanie' : 'Kolejne pytanie - przycisk nieaktywny, wybierz odpowiedź aby kontynuować'}
        >
          {nextButtonInForm}
        </Button>
      : nextButtonInForm
    //If page is not form
    :
      <Link to={{ pathname: outsidePageLink }} target="_blank" style={{ textDecoration: 'none' }}>
        <NextButtonStyled>
          {currentPage === PageEnum.ProgramPage ? 'LINK DO PROGRAMU' : 'LINK DO ŹRÓDŁA'}
        </NextButtonStyled>
      </Link>
  )
}