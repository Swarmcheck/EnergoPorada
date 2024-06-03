import { Box } from "@mui/material";
import { useFooter } from "contexts/Footer/footer";
import { PageEnum } from "contexts/Footer/Page.enum";
import React, { useEffect, useRef } from "react"
import { TitleExtraBoldText, BodyLargeMediumText } from "shared/FontBoxes/FontBoxes.styles";
import { NextButton } from "shared/Footer/BottomNavigation/Buttons/NextButton/NextButton";
import { ReturnButton } from "shared/Footer/BottomNavigation/Buttons/ReturnButton/ReturnButton";
import { CheerPageBoxWithTextStyled, CheerPageBoxStyled } from "./CheerPage.styles"

export const CheerPage = () => {
  const { setCurrentPage } = useFooter();

  const readCheerPage = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.Cheerup);
    readCheerPage.current.focus();
  },[])

  return (
    <CheerPageBoxStyled>
      <CheerPageBoxWithTextStyled tabIndex={0} ref={readCheerPage}>
        <TitleExtraBoldText>
          Gratulacje!
        </TitleExtraBoldText>
        <BodyLargeMediumText sx= {{marginBottom: '32px'}}>
          <p/>
          Dzieląc się informacjami, właśnie pomogłeś/aś Miastu w diagnozie sytuacji mieszkaniowo-energetycznej w Rybniku i zdobywaniu środków pomocnych mieszkańcom.
          <br/>
          To nie koniec korzyści! Odpowiedz na kilka kolejnych pytań, a otrzymasz informację o dostępnych dla Ciebie programach dofinansowania na ciepło w domu oraz porady, które pomogą Ci oszczędzać.
          <p/>
          Nie przejmuj się, jeśli jakieś pytanie wyda Ci się podobne do któregoś z poprzednich – oznacza to jedynie, że potrzebujemy nieco więcej szczegółów, aby porady dla Ciebie były prawidłowe. Wszystkie pytania, które od tej chwili zobaczysz, są istotne ze względu na zasady działania poszczególnych dotacji i zasiłków.
        </BodyLargeMediumText>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ReturnButton/>
          <NextButton/>
        </Box>
      </CheerPageBoxWithTextStyled>
    </CheerPageBoxStyled>
  )
}