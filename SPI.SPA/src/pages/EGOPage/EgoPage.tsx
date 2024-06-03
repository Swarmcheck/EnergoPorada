import { Box } from "@mui/material";
import { useCurrentStep } from "contexts/CurrentStep/currentStep";
import { useFooter } from "contexts/Footer/footer";
import { PageEnum } from "contexts/Footer/Page.enum";
import { useForm } from "contexts/Form/form";
import { defaultStep } from "models/step/step/step.model";
import React, { useEffect, useRef } from "react"
import { NextButton } from "shared/Footer/BottomNavigation/Buttons/NextButton/NextButton";
import { EgoPageContainer, EgoTextContainer } from "./EgoPage.styles";

export const EGOPage = () => {
  const { setCurrentPage } = useFooter();
  const { sendFormToDB } = useForm();
  const { currentStep } = useCurrentStep();

  const readEgoPage = useRef(document.createElement("div"))

  window.addEventListener("beforeunload", function(e){
    if(currentStep !== defaultStep){
      sendFormToDB();
    }
  }, false);

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.EGO);
    readEgoPage.current.focus();
  },[])

  return (
    <EgoPageContainer>
      <EgoTextContainer>
        <Box tabIndex={0} ref={readEgoPage}>
          Cieszymy się, że tu jesteś i dołączasz do grona osób, które chcą pomóc Miastu pomagać mieszkańcom!
        </Box>
        <p/>
        <Box tabIndex={0}>
          Korzystając z aplikacji EnergoPorada, przyczyniasz się do poprawy jakości powietrza w Rybniku oraz komfortu cieplnego w rybnickich domach. Gratulacje! 
        </Box>
        <p/>
        <Box tabIndex={0}>
          Do odpowiedzi udzielonych przez użytkowników i użytkowniczki EnergoPorady będzie miał wgląd Urząd Miasta Rybnika oraz firma Swarmcheck, która na zamówienie UMR aplikację opracowuje.
        </Box>
        <p/>
        <Box tabIndex={0}>
          Swarmcheck potrzebuje dostępu do danych, aby doskonalić i aktualizować EnergoPoradę. Miasto Rybnik dzięki zebranym danym będzie mogło poznać sytuację mieszkańców, tak, aby móc lepiej reagować na ich problemy i starać się o środki na poprawę warunków energetycznych.
        </Box>
        <p/>
        <Box tabIndex={0}>
          Aplikacja nie zbiera danych osobowych. Danymi administrują:
          Prezydent Miasta Rybnika z siedzibą przy ul. Bolesława Chrobrego 2 w Rybniku (44-200)
        oraz Swarmcheck sp. z o.o. z siedzibą w Tarnowie (33-100) przy ul. Eliasza Goldhammera 10/5, numer KRS: 0000691980.
        </Box>
      </EgoTextContainer>
      <NextButton/>
      <Box sx={{ width: '50%' }}/>
    </EgoPageContainer>
  )
}