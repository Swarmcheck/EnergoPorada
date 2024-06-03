import React, { useEffect, useRef } from "react"
import { BodyLargeMediumText } from "shared/FontBoxes/FontBoxes.styles"
import { ciepleMieszkanie } from "./ciepleMieszkanieText"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageLinkStyled, ProgramPageListBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"

export const CiepleMieszkanie = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])
  
  const listOfTexts = [
    'montażem wentylacji mechanicznej z odzyskiem ciepła;',
    'wymianą, zakupem i montażem źródeł ciepła;',
    'instalacją centralnego ogrzewania i podłączeniem ciepłej wody użytkowej;',
    'mikroinstalacją fotowoltaiczną;',
    'ociepleniem przegród budowlanych (wyłącznie dla wspólnot);',
    'wymianą stolarki drzwiowej i okiennej;',
    'wykonaniem dokumentacji koniecznej dla powyższych działań, takiej jak audyt energetyczny, dokumentacja projektowa, ekspertyza.',
  ]

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(ciepleMieszkanie.outsideLink, ciepleMieszkanie.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled tabIndex={0} ref={readDotationText}>
          {ciepleMieszkanie.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={ciepleMieszkanie.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Jest to program, który wystartuje w bieżącym roku (2022) jako rozwinięcie programów pilotażowych  przeprowadzonych w województwach śląskim, dolnośląskim i zachodniopomorskim. Jest on skierowany do właścicieli/współwłaścicieli lokali mieszkalnych, a także do wspólnot mieszkaniowych w budynkach liczących od 3 do 20 lokali. Dofinansowanie z programu prawdopodobnie obejmie zwrot od 30% do 60% kosztów kwalifikowanych związanych z:
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled tabIndex={0}>
          {listOfTexts.map((l,k) => 
            <GenerateListItem text={l} key={k}/>
          )}
        </ProgramPageListBoxStyled>
        <BodyLargeMediumText tabIndex={0}>
          Jeżeli znalazłaś/eś Ciepłe Mieszkanie w rekomendacjach po przejściu ankiety w ramach EnergoPorady, pamiętaj, że decyzja, aby pokazać Ci ten program, była oparta na zapowiedziach rządu i mniejszych programach pilotażowych. Właściwe uruchomienie programu jeszcze nie nastąpiło (stan na marzec 2022), więc trzymaj rękę na pulsie i sprawdź w odpowiednim momencie, czy warunki pozostały te same oraz jak prawidłowo wnioskować i w jakim terminie. Póki co, możesz przeczytać <ProgramPageLinkStyled href="https://rybnik.naszemiasto.pl/cieple-mieszkanie-bedzie-nowy-program-doplat-dla-budynkow/ar/c9-8701821" target="_blank" aria-label="zapowiedź Czystego Mieszkania w lokalnej prasie. Link">zapowiedź Czystego Mieszkania w lokalnej prasie</ProgramPageLinkStyled> i zapoznać się lepiej z <ProgramPageLinkStyled href="http://www.pszczyna.pl/dla_mieszkancow/program_pilotazowy" target="_blank" aria-label="warunkami pilotażu w Pszczynie. Link">warunkami pilotażu w Pszczynie.</ProgramPageLinkStyled>
        </BodyLargeMediumText>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}