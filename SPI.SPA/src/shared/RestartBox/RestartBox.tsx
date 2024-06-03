import { useCurrentStep } from "contexts/CurrentStep/currentStep";
import { useFooter } from "contexts/Footer/footer";
import React, { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { BodyLargeExtraBoldText, BodySmallMediumText } from "shared/FontBoxes/FontBoxes.styles";
import { RestartBoxCancelButtonBoxStyled, RestartBoxRestartButtonStyled, RetartBoxBlackBoxStyled, RetartBoxButtonsBoxStyled, RetartBoxOpacityBoxStyled, RetartBoxScreenBoxStyled, RetartBoxTextBoxStyled } from "./RestartBox.styles";

export const RestartBox = () => {
  const { createNewJourney } = useCurrentStep();
  const { setDisplayRestartBox, displayRestartBox } = useFooter();

  let navigate = useNavigate();

  const readRestartBox = useRef(document.createElement("div"))

  useEffect(() => {
    if(displayRestartBox){
      readRestartBox.current.focus()
    }
  }, [displayRestartBox])

  const handleRestartButton = () => {
    const result = createNewJourney();
    navigate('/ankieta');
    setDisplayRestartBox(false);
  };

  const handleCloseButton = () => {
    navigate('/ankieta');
    setDisplayRestartBox(false)
  };

  const GenerateRestartBox = () => {
    if(displayRestartBox) {
      return (
        <RetartBoxScreenBoxStyled>
          <RetartBoxOpacityBoxStyled/>
          <RetartBoxBlackBoxStyled>
            <RetartBoxTextBoxStyled tabIndex={0} ref={readRestartBox}>
              <BodyLargeExtraBoldText>
                Uwaga! Ten krok spowoduje zapomnienie odpowiedzi dotychczas udzielonych w ankiecie i zresetowanie informacji zwrotnych otrzymanych po wypełnieniu ankiety.
              </BodyLargeExtraBoldText>
                <br/>
              <BodySmallMediumText>
                Jeśli chcesz kontynuować ankietę od miejsca, w którym skończyłeś/aś lub doczytać swoje rezultaty końcowe, kliknij "anuluj" i przejdź do zakładki ANKIETA.
                  <p/>
                Jeśli chcesz zacząć nową ankietę, kliknij "zacznij od nowa".
              </BodySmallMediumText>
              <RetartBoxButtonsBoxStyled>
                <RestartBoxCancelButtonBoxStyled onClick={() => handleRestartButton()}>
                  zacznij od nowa
                </RestartBoxCancelButtonBoxStyled>
                <RestartBoxRestartButtonStyled onClick={() => handleCloseButton()}>
                  wróć do ankiety
                </RestartBoxRestartButtonStyled>
              </RetartBoxButtonsBoxStyled>
            </RetartBoxTextBoxStyled>
          </RetartBoxBlackBoxStyled>
        </RetartBoxScreenBoxStyled>
      )
    }
    else{
      return (<></>)
    }
  }

  return (
    <GenerateRestartBox/>
  )
}