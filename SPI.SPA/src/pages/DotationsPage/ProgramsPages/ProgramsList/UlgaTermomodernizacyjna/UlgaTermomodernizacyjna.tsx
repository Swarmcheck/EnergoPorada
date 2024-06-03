import React, { useEffect, useRef } from "react"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageLinkStyled, ProgramPageListBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { ulgaTermomodernizacyjna } from "./ulgaTermomodernizacyjnaText"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { Box } from "@mui/material"

export const UlgaTermomodernizacyjna = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0) 
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])     

  const itemList = (
    <Box tabIndex={0}>
      Więcej informacji o warunkach odliczania ulgi termomodernizacyjnej znajdziesz <ProgramPageLinkStyled href={'//www.podatki.gov.pl/pit/ulgi-odliczenia-i-zwolnienia/ulga-termomodernizacyjna/'} isSmallerLink={true} target="_blank" aria-label={'Pod tym linkiem. Link'}>
       pod tym linkiem.
      </ProgramPageLinkStyled>
    </Box>
  )

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(ulgaTermomodernizacyjna.outsideLink, ulgaTermomodernizacyjna.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {ulgaTermomodernizacyjna.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={ulgaTermomodernizacyjna.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Ulga przysługuje właścicielom/współwłaścicielom domów jednorodzinnych, w tym szeregowców i bliźniaków. Możesz ją odliczyć w zeznaniu podatkowym, jeśli poniesiesz wydatki na termomodernizację domu. Kwota odliczenia będzie różna w zależności od poniesionych kosztów, jednak nie może przekroczyć 53 000 zł.
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled>
          <GenerateListItem text={itemList}/>
        </ProgramPageListBoxStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}