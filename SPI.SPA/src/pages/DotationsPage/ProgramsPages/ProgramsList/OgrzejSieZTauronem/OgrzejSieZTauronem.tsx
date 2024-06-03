import React, { useEffect, useRef } from "react"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageLinkStyled, ProgramPageListBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { ogrzejSieZTauronem } from "./ogrzejSieZTauronemText"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { Box } from "@mui/material"

export const OgrzejSieZTauronem = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])   

  const itemList = (
    <Box tabIndex={0}>
      Więcej informacji o warunkach przystąpienia do programu znajdziesz <ProgramPageLinkStyled href={'//www.tauron.pl/dla-domu/urzadzenia/ogrzewanie/dofinansowanie-do-wymiany-ogrzewania'}
      isSmallerLink={true} target="_blank" aria-label={'Pod tym linkiem. Link '}>
       pod tym linkiem.
      </ProgramPageLinkStyled>
    </Box>
  )

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(ogrzejSieZTauronem.outsideLink, ogrzejSieZTauronem.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {ogrzejSieZTauronem.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={ogrzejSieZTauronem.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Program skierowany jest do właścicieli i współwłaścicieli domów jednorodzinnych, którzy chcą wymienić swoje dotychczasowe źródła ogrzewania na pompy ciepła lub gazowe kotły kondensacyjne. Na ich zakup przeznaczone są dopłaty w wysokości do 4 200 zł. Jeśli skorzystasz z tych środków, nadal możesz ubiegać się o pozostałe dotacje przeznaczone na wsparcie wymiany źródeł ciepła (np. z programu Czyste Powietrze).
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled>
          <GenerateListItem text={itemList}/>
        </ProgramPageListBoxStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}