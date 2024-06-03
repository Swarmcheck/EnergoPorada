import { useFooter } from "contexts/Footer/footer";
import { PageEnum } from "contexts/Footer/Page.enum";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStepper } from "../../../../../contexts/Stepper/stepper";
import { ReturnButtonStyled } from "./ReturnButton.styles";

interface ReturnButtonProps {
  text?: string,
  blackTheme?: boolean,
}

export const ReturnButton = (props: ReturnButtonProps):JSX.Element => {
  const {
    text = 'WSTECZ',
    blackTheme = false,
  } = props;

  const { previousStep, changeIsError } = useStepper();
  const { currentPage, setDisplayError, returnToOutput } = useFooter();

  let navigate = useNavigate();

  function clickHandler() {
    changeIsError(false);
    setDisplayError(false);
    previousStep();
  }

  function navigateToPage() {
    if(returnToOutput){
      navigate('/output')
    }
    else{
      switch(currentPage){
        case('/'):
          navigate('/')
          break
        case('/ankieta'):
          navigate('/')
          break
        case('/cheerup'):
          navigate('/ankieta')
          break
        case('/ego'):
          navigate('/')
          break
        case('/czestepytania'):
          navigate('/czestepytania')
          break
        case('/przydatnawiedza'):
          navigate('/przydatnawiedza')
          break
        case('/przydatnawiedza/'):
          navigate('/przydatnawiedza')
          break
        case('/dotacjenacieplo'):
          navigate('/dotacjenacieplo')
          break
        case('/dotacjenacieplo/'):
          navigate('/dotacjenacieplo')
          break
      }
    }
  }
  
  return (
    currentPage === PageEnum.Cheerup || currentPage === PageEnum.Form ?
    <ReturnButtonStyled
      disableRipple={true}
      onClick={clickHandler}
      blackTheme={blackTheme}
      aria-label={'Poprzednia strona'}
    >
      {text}
    </ReturnButtonStyled>
    :
    <ReturnButtonStyled
      disableRipple={true}
      onClick={navigateToPage}
    >
      {text}
    </ReturnButtonStyled>
    
  )
}