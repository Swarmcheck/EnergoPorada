import React, { useEffect, useRef } from "react"
import { DotationsListBoxStyled, DotationsPageBoxStyled } from "./DotationsPage.styles"
import { ProgramBox } from "./ProgramBoxes/ProgramBox"
import { useFooter } from "contexts/Footer/footer"
import { H1Text } from "shared/FontBoxes/FontBoxes.styles"
import { Grid } from "@mui/material"
import { ciepleMieszkanie } from "pages/DotationsPage/ProgramsPages/ProgramsList/CiepleMieszkanie/ciepleMieszkanieText";
import { czystePowietrze } from "pages/DotationsPage/ProgramsPages/ProgramsList/CzystePowietrze/czystePowietrzeText";
import { dodatekMieszkaniowyZOPS } from "./ProgramsPages/ProgramsList/DodatekMieszkaniowyZOPS/dodatekMieszkaniowyZOPSText"
import { dodatekOslonowy } from "./ProgramsPages/ProgramsList/DodatekOslonowy/dodatekOslonowyText"
import { dotacjeZBudzetuMiasta } from "./ProgramsPages/ProgramsList/DotacjeZBudzetuMiasta/dotacjeZBudzetuMiastaText"
import { stopSmog } from "./ProgramsPages/ProgramsList/StopSmog/stopSmogText"
import { ulgaTermomodernizacyjna } from "./ProgramsPages/ProgramsList/UlgaTermomodernizacyjna/ulgaTermomodernizacyjnaText"
import { zasilekCelowyZOPS } from "./ProgramsPages/ProgramsList/ZasilekCelowyZOPS/zasilekCelowyZOPSText"
import { ogrzejSieZTauronem } from "./ProgramsPages/ProgramsList/OgrzejSieZTauronem/ogrzejSieZTauronemText"
import { PageEnum } from "contexts/Footer/Page.enum"

export const DotationsPage = () => { 
  const { setCurrentPage, setReturnToOutput } = useFooter();
  const readTitle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.Programs)
    setReturnToOutput(false)
    readTitle.current.focus()
  },[])  

  const programArr = [
    ciepleMieszkanie,
    czystePowietrze,
    dodatekMieszkaniowyZOPS,
    dodatekOslonowy,
    dotacjeZBudzetuMiasta,
    ogrzejSieZTauronem,
    stopSmog,
    ulgaTermomodernizacyjna,
    zasilekCelowyZOPS
  ]

  return (
    <DotationsPageBoxStyled>
      <H1Text tabIndex={0} ref={readTitle}>
        Dowiedz się więcej o programach dotacyjnych
      </H1Text>
        <DotationsListBoxStyled>
          <Grid 
            container
            rowSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }} columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
            sx= {{ display: 'block',}}
          >
            {programArr.map(p =>
              <Grid item xs={12} sm={6} lg={4} sx={{ display: 'inline-flex'}}>
                <ProgramBox program={p}/>
              </Grid>
            )}
          </Grid>
        </DotationsListBoxStyled>
    </DotationsPageBoxStyled>
  )
}