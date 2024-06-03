import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { theme } from "shared/breakpointsTheme/styles"
import { TitleExtraBoldText, ButtonSecondaryText } from "shared/FontBoxes/FontBoxes.styles"

export const GenerateArticlesListBoxStyled = styled(Box)(({
  marginTop: '32px',
  gap: '30px',
  float: 'left',
  width: '80vw',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },

  [theme.breakpoints.down('xs')]: {
    width: '95vw',
  },
}))

export const GenerateArticlesArticleBoxStyled = styled(Box)(({
  width: '263px',
  height: '140px',
  backgroundColor: '#E0E0E0',
  paddingTop: '34px',
  paddingLeft: '27px',
  paddingRight: '10px',
  paddingBottom: '10px',
  display: 'grid',
  flexDirection: 'column',
  alignContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    width: '200px',
  },

  [theme.breakpoints.down('xs')]: {
    width: '90vw',
  },
}))

export const GenerateArticlesTitleBoxStyled = styled(TitleExtraBoldText)(({
  lineHeight: '24px',
}))

export const GenerateArticlesButtonBoxStyled = styled(ButtonSecondaryText)(({
  background: 'transparent',
  color: 'black',
  borderRadius: '0px',
  padding: '0px',
  paddingBottom: '15px',
  justifyContent: 'start',

  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
    textDecorationThickness: '3px',
    textUnderlineOffset: '6px',
  },

  '&:active': {
    fontFamily: 'Archivo Black',
    fontWeight: 400,
    textDecoration: 'underline',
    textDecorationThickness: '4px',
    textUnderlineOffset: '6px',
  },
}))