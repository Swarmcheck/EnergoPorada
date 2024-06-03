import React, { useEffect, useRef } from "react"
import { BodyLargeMediumText } from "shared/FontBoxes/FontBoxes.styles"

import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { dodatekOslonowy } from "./dodatekOslonowyText"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageListBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { Box } from "@mui/material"
import { CallCenter } from "../../../../DotationAndEducationShared/CallCenter"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"

export const DodatekOslonowy = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])  

  const listOfTexts = [
    '400 zł dla jednoosobowego gospodarstwa domowego,',
    '600 zł dla gospodarstwa 2-3-osobowego,',
    '850 zł dla gospodarstwa 4-5-osobowego,',
    '1150 zł dla gospodarstwa składającego się minimum z 6 osób.',
  ];

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(dodatekOslonowy.outsideLink, dodatekOslonowy.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {dodatekOslonowy.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={dodatekOslonowy.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Dodatek przysługuje gospodarstwom domowym, których średnie miesięczne wynagrodzenie na osobę wynosi maksymalnie 2100 zł w gospodarstwie jednoosobowym lub 1500 zł w gospodarstwie wieloosobowym. Wysokość dodatku będzie zależała od liczby domowników:
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled tabIndex={0}>
          {listOfTexts.map((l:string, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <BodyLargeMediumText>
          <Box tabIndex={0}>
            W momencie przekroczenia granicy maksymalnych zarobków otrzymasz dodatek zmniejszony o kwotę przekroczenia. Na przykład: przy średnich miesięcznych zarobkach 2300 zł w gospodarstwie jednoosobowym otrzymasz 200 zł dodatku zarmiast 400 zł.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Dodatek osłonowy został wprowadzony w ramach Rządowej Tarczy Antyinflacyjnej.
          </Box>
          <br/>
          <Box tabIndex={0}>
            Ma on zrekompensować wzrost kosztów życia.
          </Box>
          <p/>
          <Box sx={{ fontWeight: 700 }} tabIndex={0}>
            Wniosek należy złożyć do października 2022 roku w Dziale Świadczeń Rordzinnych Ośrodka Pomocy Społecznej w Rybniku przy ul. Raciborskiej 20.
          </Box>
          <br/>
          <Box tabIndex={0}>
            Jeżeli znalazłaś/eś dodatek osłonowy w rekomendacjach po przejściu ankiety w ramach EnergoPorady, kwalifikujesz się do jego otrzymania z dużym prawdopodobieństwem, ale nie stuprocentową pewnością. W rzadkich przypadkach może się zdarzyć, że Twoje rzeczywiste dochody są wyższe od szacunków podanych w ankiecie, przez co nie będziesz miał(a) możliwości otrzymania dodatku osłonowego. Nieudzielenie odpowiedzi lub zaznaczenie odpowiedzi „Nie wiem” na któreś z pytań z ankiety również może spowodować niższą trafność proponowanych programów wsparcia. Choć sytuacja ta nie musi dotyczyć Twojego przypadku, ubiegając się o dodatek osłonowy, pamiętaj, aby sprawdzić szczegóły na stronie internetowej Ośrodka Pomocy Społecznej lub zasięgnąć porady telefonicznie w Dziale Świadczeń Rodzinnych OPS w Rybniku.
          </Box>
        </BodyLargeMediumText>
        <CallCenter
          title={'Numer telefonu Działu Świadczeń Rodzinnych Ośrodka Pomocy Społecznej w Rybniku:'}
          number={'32 43 29 800'}
          moreInfo={'Szczegółowo opisane informacje na temat dodatku znajdziesz '}
          link={'//www.rybnik.eu/dla-mieszkancow/aktualnosci/aktualnosc/dodatek-oslonowy'}
        />
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}