import React, { useEffect, useRef } from "react"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageLinkStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { czystePowietrze } from "./czystePowietrzeText"
import { Box } from "@mui/material"
import { CallCenter } from "../../../../DotationAndEducationShared/CallCenter"
import DialogBox from '../../../../../public/icons/programsIcons/DialogBox.svg'
import BulbIcon from '../../../../../public/icons/programsIcons/BulbIcon.svg'
import MoneyIcon from '../../../../../public/icons/programsIcons/MoneyIcon.svg'
import { BodyLargeMediumText } from "shared/FontBoxes/FontBoxes.styles"
import { PageEnum } from "contexts/Footer/Page.enum"
import { useFooter } from "contexts/Footer/footer"

export const CzystePowietrze = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])  

  const link = (
    <a className={'word-wrap'}
        rel="noreferrer"
        href={'https://powietrzerybnik.pl/'}
        target="_blank"
      >
      https://powietrzerybnik.pl/
    </a>
  )

  const textFirst = (
    <>
      numer telefonu: <Box sx={{ fontWeight: 800, display: 'inline' }}>
      517 664 090
      </Box>
    </>
  )

  const itemList = [
    link,
    textFirst,
    'Rudzka 13, budynek C, pokój 3.2',
  ]

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(czystePowietrze.outsideLink, czystePowietrze.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {czystePowietrze.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={czystePowietrze.icon}/>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Program przeznaczony jest dla właścicieli/współwłaścicieli jednorodzinnych budynków mieszkalnych, a także dla właścicieli/współwłaścicieli wydzielonych lokali mieszkalnych w budynkach jednorodzinnych z wyodrębnioną księgą wieczystą.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Przystępując do programu możesz ubiegać się o dotację w wysokości: <Box sx={{ fontWeight: 700, display: 'inline' }}>
              do 30 000 zł, do 37 000 zł lub do 69 000 zł.
            </Box>
            W zależności od dochodów Twojego gospodarstwa domowego, zostanie Ci przyznany konkretny poziom dofinansowania. Za otrzymane środki należy wymienić stare źródła ciepła wykorzystujące paliwa stałe na nowoczesne źródła, które spełniają najwyższe normy. Dotacje dotyczą także przeprowadzenia niezbędnych prac termomodernizacyjnych budynku.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Jeżeli znalazłaś/eś Czyste Powietrze w rekomendacjach po przejściu ankiety w ramach EnergoPorady, kwalifikujesz się do otrzymania tej dotacji z dużym prawdopodobieństwem, ale nie stuprocentową pewnością. W rzadkich przypadkach może się zdarzyć, że Twoje rzeczywiste dochody są wyższe od szacunków podanych w ankiecie, przez co nie będziesz miał(a) możliwości otrzymania dotacji. Nieudzielenie odpowiedzi lub zaznaczenie odpowiedzi „Nie wiem” na któreś z pytań z ankiety również może spowodować niższą trafność proponowanych programów wsparcia. Choć sytuacja ta nie musi dotyczyć Twojego przypadku, ubiegając się o dotację w ramach Czystego Powietrza, pamiętaj, aby sprawdzić szczegóły <ProgramPageLinkStyled href="https://czystepowietrze.gov.pl/czyste-powietrze/" target="_blank" aria-label={'na oficjalnej rządowej stronie internetowej</ProgramPageLinkStyled> lub zasięgnąć porady telefonicznie w Punkcie Konsultacyjnym Programu Czyste Powietrze w Rybniku. Link'}>na oficjalnej rządowej stronie internetowej</ProgramPageLinkStyled> lub zasięgnąć porady telefonicznie w Punkcie Konsultacyjnym Programu Czyste Powietrze w Rybniku.
          </Box>
        </ProgramPageFirstTextStyled>
        <CallCenter
          title={'Infolinia programu Czyste Powietrze:'}
          number={'22 340 40 80'}
          moreInfo={'Szczegółowo opisane warunki przystąpienia do programu znajdziesz '}
          link={'https://czystepowietrze.gov.pl/czyste-powietrze/'}
          secondIcon={DialogBox}
          secondTitle={'Kontakt do Punktu Konsultacyjnego Programu Czyste Powietrze w Rybniku:'}
          list={itemList}
        />
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <ProgramIcon icon={MoneyIcon}/>
          <ProgramPageLinkStyled href="https://czystepowietrze.gov.pl/kalkulator-dotacji/" target="_blank" aria-label={'Kalkulator dotacji. Link'}>
            Kalkulator dotacji 
          </ProgramPageLinkStyled>
          <BodyLargeMediumText sx={{ lineHeight: '20px', marginTop: '10px'}} tabIndex={0}>
            Odpowiadając na kilka prostych pytań, będziesz w stanie obliczyć kwotę dotacji, która może Ci przysługiwać.
          </BodyLargeMediumText>
          <ProgramIcon icon={BulbIcon}/>
          <BodyLargeMediumText tabIndex={0}>
            Dotację z programu Czyste Powietrze można także wykorzystać do spłaty kredytów zaciągniętych w niektórych bankach na przedsięwzięcia realizowane zgodnie z przeznaczeniem programu (na wymianę źródeł ogrzewania lub termomodernizację budynku). <ProgramPageLinkStyled href="https://czystepowietrze.gov.pl/dla-bankow/" target="_blank" aria-label={'Pod tym linkiem. Link'}>
            Pod tym linkiem
            </ProgramPageLinkStyled> znajdziesz listę tych banków.
          </BodyLargeMediumText>
        </Box>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}