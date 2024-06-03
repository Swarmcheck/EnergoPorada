import React, { useEffect, useRef } from "react"
import { EducationHeaderBox, EducationListBoxStyled, EducationPageBoxStyled } from "./EducationPage.styles"
import { EducationBox } from "./EducationBoxes/EducationBox"
import { useFooter } from "contexts/Footer/footer"
import { H2Text } from "shared/FontBoxes/FontBoxes.styles"
import { PageEnum } from "contexts/Footer/Page.enum"
import { doradzctwoEnergetyczne } from "./ArticlesPages/ArticlesList/DoradzctwoEnergetyczne/DoradzctwoEnergetyczneText"
import { skadSmog } from "./ArticlesPages/ArticlesList/SkadSmog/SkadSmogText"
import { Grid } from "@mui/material"
import { prosteSposoby } from "./ArticlesPages/ArticlesList/ProsteSposoby/ProsteSposobyText"
import { oszczednosciEnergetyczne } from "./ArticlesPages/ArticlesList/OszczednosciEnergetyczne/OszczednosciEnergetyczneText"
import { chronicPrzedSmogiem } from "./ArticlesPages/ArticlesList/ChronicPrzedSmogiem/ChronicPrzedSmogiemText"
import { smogNaZdrowie } from "./ArticlesPages/ArticlesList/SmogNaZdrowie/SmogNaZdrowieText"

export const EducationPage = () => {
  const { setCurrentPage, setReturnToOutput } = useFooter();
  const readTitle = useRef(document.createElement("div"))

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.Education)
    setReturnToOutput(false)
    readTitle.current.focus()
  },[])

  const educationArr = [
    doradzctwoEnergetyczne,
    skadSmog,
    prosteSposoby,
    oszczednosciEnergetyczne,
    smogNaZdrowie,
    chronicPrzedSmogiem,
  ]

  return (
    <EducationPageBoxStyled>
      <EducationHeaderBox tabIndex={0} ref={readTitle}>
        <H2Text>
          Dowiedz się więcej
        </H2Text>
      </EducationHeaderBox>
      <EducationListBoxStyled>
        <Grid 
          container
          rowSpacing={{ xs: 3, md: 3, lg: 3 }} columnSpacing={{ xs: 3, md: 3, lg: 3 }}
          sx= {{ display: 'block',}}
        >
          {educationArr.map(e =>
            <Grid item xs={12} sm={6} lg={4} sx={{ display: 'inline-flex'}}>
              <EducationBox education={e}/>
            </Grid>
          )}
        </Grid>
      </EducationListBoxStyled>
    </EducationPageBoxStyled>
  )
}