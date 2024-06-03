import React, { useEffect, useRef } from "react"
import { ProgramPageBoxStyled, ProgramPageFirstTextStyled, ProgramPageHalfBoxStyled, ProgramPageLinkStyled, ProgramPageListBoxStyled, ProgramPageTitleBoxStyled } from "../../ProgramComponents/ProgramPage.styles"
import { ProgramIcon } from "../../ProgramComponents/ProgramIcon"
import { SetProgramEducationFooterProps } from "../../../../DotationAndEducationShared/SetProgramEducationFooter"
import { GenerateListItem } from "../../../../DotationAndEducationShared/GenerateListItem"
import { dotacjeZBudzetuMiasta } from "./dotacjeZBudzetuMiastaText"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import { Box } from "@mui/material"

export const DotacjeZBudzetuMiasta = () => {
  const { setCurrentPage } = useFooter();
  const readDotationText = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ProgramPage)
    readDotationText.current.focus()
  },[])  

  const itemList = (
    <Box tabIndex={0}>
      Szczegółowo opisane warunki ubiegania się o dotacje znajdziesz <ProgramPageLinkStyled href={'//www.rybnik.eu/dla-mieszkancow/aktualnosci/aktualnosc/granty-na-wymiane-zrodel-ciepla-edycja-ii'} isSmallerLink={true} target="_blank" aria-label={'Pod tym linkiem. Link '}>
       pod tym linkiem.
      </ProgramPageLinkStyled>
    </Box>
  )

  return(
    <ProgramPageBoxStyled>
      {SetProgramEducationFooterProps(dotacjeZBudzetuMiasta.outsideLink, dotacjeZBudzetuMiasta.pageModel)}
      <ProgramPageHalfBoxStyled>
        <ProgramPageTitleBoxStyled ref={readDotationText} tabIndex={0}>
          {dotacjeZBudzetuMiasta.title}
        </ProgramPageTitleBoxStyled>
        <ProgramIcon icon={dotacjeZBudzetuMiasta.icon}/>
        <ProgramPageFirstTextStyled tabIndex={0}>
          Na dotację z budżetu miasta mogą liczyć właściciele budynków wielorodzinnych lub lokali mieszkalnych. Przyznane środki należy przeznaczyć na wymianę starego źródła ciepła zasilanego paliwem stałym poniżej wymagań klasy 5. na nowsze źródło ogrzewania. Beneficjent może spodziewać się do 50% zwrotu udokumentowanych kosztów kwalifikowanych.
        </ProgramPageFirstTextStyled>
        <ProgramPageListBoxStyled>
          <GenerateListItem text={itemList}/>
        </ProgramPageListBoxStyled>
      </ProgramPageHalfBoxStyled>
    </ProgramPageBoxStyled>
  )
}