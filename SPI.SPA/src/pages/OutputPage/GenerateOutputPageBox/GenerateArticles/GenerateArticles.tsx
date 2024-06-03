import { Grid } from "@mui/material";
import { doradzctwoEnergetyczne } from "pages/EducationPage/ArticlesPages/ArticlesList/DoradzctwoEnergetyczne/DoradzctwoEnergetyczneText";
import { oszczednosciEnergetyczne } from "pages/EducationPage/ArticlesPages/ArticlesList/OszczednosciEnergetyczne/OszczednosciEnergetyczneText";
import { prosteSposoby } from "pages/EducationPage/ArticlesPages/ArticlesList/ProsteSposoby/ProsteSposobyText";
import { skadSmog } from "pages/EducationPage/ArticlesPages/ArticlesList/SkadSmog/SkadSmogText";
import { smogNaZdrowie } from "pages/EducationPage/ArticlesPages/ArticlesList/SmogNaZdrowie/SmogNaZdrowieText";
import { chronicPrzedSmogiem } from "pages/EducationPage/ArticlesPages/ArticlesList/ChronicPrzedSmogiem/ChronicPrzedSmogiemText";
import React from "react";
import { GenerateArticlesListBoxStyled} from "./GenerateArticles.styles";
import { ArticleBox } from "./ArticleBox/ArticleBox";

interface GenerateArticlesProps {
  deleteArticles: boolean
}

export const GenerateArticles = (props: GenerateArticlesProps) => {
  const {
    deleteArticles,
  } = props;

  const articleList = [
    skadSmog,
  ]

  const deletedArticles = [
    doradzctwoEnergetyczne,
    prosteSposoby,
    oszczednosciEnergetyczne,
    skadSmog,
    smogNaZdrowie,
    chronicPrzedSmogiem,
  ]

  const filteredArticleList = deleteArticles ? articleList : deletedArticles;
  // const filteredArticleList = articleList.filter(a => !(deleteArticles && deletedArticles.includes(a)))

  return (
    <GenerateArticlesListBoxStyled>
      <Grid 
        container
        rowSpacing={{ xs: 3, md: 3, lg: 3 }} columnSpacing={{ xs: 3, md: 3, lg: 3 }}
        sx= {{ display: 'block' }}
      >
        {filteredArticleList.map((a, k) => 
          <ArticleBox article={a} key={k}/>
        )}
      </Grid>
    </GenerateArticlesListBoxStyled>
  )
}