import React, { useEffect, useRef } from "react"
import { BodyLargeBoldText, BodyLargeMediumText, BodySmallBoldText, H2Text, TitleBoldText } from "shared/FontBoxes/FontBoxes.styles"

import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageLinkStyled, ProgramPageListBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { stopSmog } from "./stopSmogText"
import AdviceIcon from '../../../../../public/icons/programsIcons/AdviceIcon.svg'
import { GenerateNumericListItem } from "../../../../DotationAndEducationShared/GenerateNumericListItem"
import { Box } from "@mui/material"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"

export const StopSmog = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])   

  const listOfTexts = [
    'Gdy czyjkolwiek udział w nieruchomości wynosi ponad 50%, tylko współwłaściciel większościowy może złożyć wniosek.',
    'Gdy udział w nieruchomości jest równy 50%, obu współwłaścicieli składa wniosek.',
    'Gdy nikt nie jest współwłaścicielem większościowym, wniosek składają wszyscy, którzy mają udziały.',
  ];

  const numericListFirst = (
    <Box>
      Rybnik zakończył już jeden cykl naboru wniosków na program Stop Smog, ale jeszcze nie rozpoczął kolejnego. Śledzenie wiadomości lokalnych pozwoli Ci dowiedzieć się, kiedy nastąpi kolejny termin. W międzyczasie możesz przeczytać o programie na stronie <ProgramPageLinkStyled href={'https://www.rybnik.eu/dla-mieszkancow/program-stop-smog'} target="_blank" aria-label={'https://www.rybnik.eu/dla-mieszkancow/program-stop-smog. Link'}>
        https://www.rybnik.eu/dla-mieszkancow/program-stop-smog
      </ProgramPageLinkStyled> lub skontaktować się z Narodowym Funduszem Ochrony Środowiska i Gospodarki Wodnej, który administruje całym programem Stop Smog:<BodyLargeBoldText sx={{display: 'inline'}}> stopsmog@nfosigw.gov.pl.</BodyLargeBoldText>
    </Box>
  )

  const numericList = [
    numericListFirst,
    'Kwalifikujesz się do otrzymania dotacji z dużym prawdopodobieństwem, ale nie stuprocentową pewnością. W rzadkich przypadkach może się zdarzyć, że Twoje rzeczywiste dochody są wyższe od szacunków podanych w ankiecie, przez co nie będziesz miał(a) możliwości otrzymania dotacji Stop Smog. Nieudzielenie odpowiedzi lub zaznaczenie odpowiedzi „Nie wiem” na któreś z pytań z ankiety również może spowodować niższą trafność proponowanych programów wsparcia. Choć sytuacja ta nie musi dotyczyć Twojego przypadku, ubiegając się dofinansowanie pamiętaj, aby upewnić się co do szczegółów telefonicznie lub osobiście w punkcie przyjmującym wnioski.'
  ];

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(stopSmog.outsideLink, stopSmog.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {stopSmog.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={stopSmog.icon}/>
        <ProgramPageFirstTextStyled>
          <Box tabIndex={0}>
            Program przeznaczony jest dla właścicieli/współwłaścicieli jednorodzinnych budynków mieszkalnych, a także dla właścicieli/współwłaścicieli wydzielonych lokali mieszkalnych w budynkach jednorodzinnych z wyodrębnioną księgą wieczystą. 
          </Box>
          <p/>
          <Box tabIndex={0}>
            Dotacje obejmują także termomodernizację budynku lub podłączenie go do sieci gazowej albo ciepłowniczej. Koszt, który musi ponieść wnioskodawca, to 10% ceny realizacji przedsięwzięcia.
          </Box>
          <p/>
          <Box tabIndex={0}>
            Jeżeli dom ma więcej niż jednego właściciela, składanie wniosków zależy od ilości udziałów.
          </Box>
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled tabIndex={0}>
          {listOfTexts.map((l, k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <ProgramIcon icon={AdviceIcon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Jeżeli znalazłaś/eś Stop Smog w rekomendacjach po przejściu ankiety w ramach EnergoPorady, zwróć uwagę na dwie sprawy.
        </ProgramPageFirstTextStyled>
        {numericList.map((l,n) => {
          return <GenerateNumericListItem number={n} text={l} key={n}/>
        })}
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}