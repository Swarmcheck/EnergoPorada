import { Box, styled } from "@mui/material";
import { theme } from "shared/breakpointsTheme/styles";
import { BodyLargeMediumText, ButtonPrimaryText } from "shared/FontBoxes/FontBoxes.styles";

export const OutputPageBoxStyled = styled(Box)(({
  width: '80vw',
  marginTop: '48px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: '15%',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },

  [theme.breakpoints.down('xs')]: {
    width: '95vw',
    marginBottom: '50%',
  },
}))

export const OutputPageTextBoxStyled = styled(BodyLargeMediumText)(({ 
  width: '60%',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },

}))

export const OutputPageDescriptionBoxStyled = styled(BodyLargeMediumText)(({
  marginTop: '24px',
  whiteSpace: "pre-wrap",
}))

export const OutputPageDotationsListBoxStyled = styled(Box)(({
  marginTop: '40px',
  maringBottom: '52px',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
}))

export const OutputPageMiniTextBoxStyled = styled(BodyLargeMediumText)(({
  lineHeight: '20px',
  marginTop: '40px',
}))

export const OutputPageButtonStyled = styled(ButtonPrimaryText)(({
  [theme.breakpoints.up('md')]: {
    marginBottom: '40%',
    backgroundColor: 'transparent',
    color: 'black',
    borderRadius: '0px',
    boxShadow: 'none',
    boxSizing: 'border-box',
    margin: '0px',
    marginTop: '40px',
    width: '30%',
    height: '48px',
    border: '4px solid black',

    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      border: '4px solid black',
    },
    '&:active': {
      fontSize: '14.75px',
      lineHeight: '16px',
    },
  },

  [theme.breakpoints.down('md')]: {
    marginBottom: '30%',
    backgroundColor: 'transparent',
    color: 'black',
    borderRadius: '0px',
    boxShadow: 'none',
    boxSizing: 'border-box',
    // margin: '0px',
    marginTop: '60px',
    width: '230px',
    height: '48px',
    border: '4px solid',
  }
}))