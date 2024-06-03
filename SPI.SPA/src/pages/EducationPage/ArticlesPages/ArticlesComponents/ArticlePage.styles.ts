import { Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BodyLargeBoldText, BodySmallMediumText, H2Text, TitleExtraBoldText } from "shared/FontBoxes/FontBoxes.styles";

export const ArticleCallCenterBoxStyled = styled(Box)(({
  display: 'flex',
  flexDirection: 'column',
}));

export const ArticleCallCenterTextStyled = styled(TitleExtraBoldText)(({
  lineHeight: '24px',
}));

export const ArticleBodyLargeTextStyled = styled(BodyLargeBoldText)(({
  lineHeight:'24px',
  display: 'inline',
}));

export const ArticleCallCenterTextInlineStyled = styled(TitleExtraBoldText)(({
  lineHeight: '24px',
  display: 'inline',
}));

export const ArticleTitleTextStyled = styled(H2Text)(({
  marginTop: '44px',
  marginBottom: '30px',
}));

export const ArticleBodyTextStyled = styled(BodySmallMediumText)(({
  marginTop: '24px'
}));

export const ArticlesLinkStyled = styled(Link)(({
  fontFamily: 'Archivo',
  color:'black',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '17.5px',
  textDecorationColor: 'black',
  overflowWrap: 'break-word',
}));