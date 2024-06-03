import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "contexts/Footer/footer";
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import { GenerateArticlesArticleBoxStyled, GenerateArticlesTitleBoxStyled, GenerateArticlesButtonBoxStyled } from "../GenerateArticles.styles";

interface GenerateArticlesProps {
  article: ProgramEducationI
}

export const ArticleBox = (props: GenerateArticlesProps) => {
  const {
    article,
  } = props;

  let navigate = useNavigate();
  const { setReturnToOutput } = useFooter();

  function handleClick(article: ProgramEducationI){
    setReturnToOutput(true)
    navigate(article.link)
  }  

  return (
    <Grid item xs={12} sm={6} lg={4} sx={{ display: 'inline-flex'}} >
      <GenerateArticlesArticleBoxStyled>
        <GenerateArticlesTitleBoxStyled >
          {article.title}
        </GenerateArticlesTitleBoxStyled>
        <GenerateArticlesButtonBoxStyled
          disableRipple={true}
          onClick={() => handleClick(article)}
          aria-label={article.title + '. Dowiedz się więcej'}
        >
          DOWIEDZ SIĘ WIĘCEJ
        </GenerateArticlesButtonBoxStyled>
      </GenerateArticlesArticleBoxStyled>
    </Grid>
  )
}