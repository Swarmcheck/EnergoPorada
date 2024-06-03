import React, { useEffect, useRef } from "react"
import { BodyLargeMediumText } from "shared/FontBoxes/FontBoxes.styles"

import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageListBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { CallCenter } from "../../../../DotationAndEducationShared/CallCenter"
import { dodatekMieszkaniowyZOPS } from "./dodatekMieszkaniowyZOPSText"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { Box } from "@mui/material"

export const DodatekMieszkaniowyZOPS = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])  

  const listOfTextsFirst = [
    '40% przeciętnego wynagrodzenia, czyli 2265,01 zł, w gospodarstwie jednoosobowym',
    '30% przeciętnego wynagrodzenia, czyli 1698,76 zł, przeliczanego na każdego członka rodziny mieszkającego w gospodarstwie wieloosobowym.'
  ];

  const listOfTextsSecond = [
    'dla jednej osoby – 45,5m2,',
    'dla dwóch osób – 52m2,',
    'dla trzech osób – 58,5m2,',
    'dla czterech osób – 71,5m2,',
    'dla pięciu osób – 84,5m2,',
    'dla sześciu osób – 91m2.'
  ];

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(dodatekMieszkaniowyZOPS.outsideLink, dodatekMieszkaniowyZOPS.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {dodatekMieszkaniowyZOPS.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={dodatekMieszkaniowyZOPS.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Dodatek przysługuje osobom, których średni miesięczny dochód w okresie 3 miesięcy poprzedzających złożenie wniosku nie przekroczył:
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled tabIndex={0}>
          {listOfTextsFirst.map((l:string, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <BodyLargeMediumText tabIndex={0}>
          Powierzchnia lokalu, w którym mieszka wnioskodawca, nie może przekroczyć:
        </BodyLargeMediumText>
        <ProgramPageListBoxStyled tabIndex={0}>
          {listOfTextsSecond.map((l:string, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <BodyLargeMediumText>
          <Box tabIndex={0}>
            Każda kolejna osoba zwiększa maksymalną wielkość lokalu o 5m2.
          </Box>
          <p/>
          <Box tabIndex={0}>
            By otrzymać ten dodatek, należy wypełnić wniosek udostępniony przez Ośrodek Pomocy Społecznej i złożyć w Ośrodku jego wydrukowaną wersję.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Jeżeli znalazłaś/eś dodatek mieszkaniowy w rekomendacjach po przejściu ankiety w ramach EnergoPorady, kwalifikujesz się do jego otrzymania z dużym prawdopodobieństwem, ale nie stuprocentową pewnością. W rzadkich przypadkach może się zdarzyć, że Twoje rzeczywiste dochody są wyższe od szacunków podanych w ankiecie, przez co nie będziesz miał(a) możliwości otrzymania dodatku. Nieudzielenie odpowiedzi lub zaznaczenie odpowiedzi „Nie wiem” na któreś z pytań z ankiety również może spowodować niższą trafność proponowanych programów wsparcia. Choć sytuacja ta nie musi dotyczyć Twojego przypadku, ubiegając się dofinansowanie pamiętaj, aby sprawdzić szczegóły na stronie internetowej Ośrodka Pomocy Społecznej lub zasięgnąć porady telefonicznej w Sekcji Dodatków Mieszkaniowych OPS w Rybniku.
          </Box>
        </BodyLargeMediumText>
        <CallCenter
          title={'Kontakt telefoniczny do Sekcji Dodatków Mieszkaniowych OPS w Rybniku:'}
          number={'32 423 71 88'}
          moreInfo={'Szczegółowo opisane warunki dotyczące dodatku mieszkaniowego znajdziesz '}
          link={'//www.opsrybnik.pl/formy-pomocy/dodatki-mieszkaniowe'}
        />
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}