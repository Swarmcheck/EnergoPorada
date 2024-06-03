import { Box, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BodyLargeMediumText, BodySmallMediumText, ButtonPrimaryText, H1Text } from "shared/FontBoxes/FontBoxes.styles";
import { theme } from "shared/breakpointsTheme/styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const ContentContainer = styled(Box)(({
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',

  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
}))

export const WelcomePageBoxstyled = styled(Box)(({
  marginTop: '5%',
  marginBottom: '25%',
  width: '50%',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '30%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '90%',
    marginTop: '10%',
    marginBottom: '80%',
  },
}))

export const WelcomePageTextBoxStyled = styled(Box)(({
  [theme.breakpoints.up('md')]: {
    marginBottom: '32px',
    whiteSpace: "pre-wrap",
  },
}))

export const PersonImgBox = styled(Box)(({
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },

  // [theme.breakpoints.down('md')]: {
  //   width: '40%',
  //   backgroundColor: 'red',
  // },

  // [theme.breakpoints.up('xs')]: {
  //   width: '30%',
  //   pradding: 0,
  //   margin: 0,
  // }
}))

export const WelcomePageTitleBoxStyled = styled(H1Text)(({
  marginBottom: '40px',
}))

export const WelcomePageDescriptionBoxStyled = styled(BodyLargeMediumText)(({
  marginBottom: '32px',
}))

export const WelcomePageTipBoxStyled = styled(BodyLargeMediumText)(({
  marginBottom: '32px',
  display: 'flex',
  alignItems: 'center',
}))

export const WelcomePageExpandDescriptionBoxStyled = styled(BodySmallMediumText)(({
  marginTop: '19px',
}))

export const WelcomePageButtonStyled = styled(ButtonPrimaryText)(({
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'transparent',
    color: 'black',
    borderRadius: '0px',
    boxShadow: 'none',
    boxSizing: 'border-box',
    margin: '0px',
    width: '230px',
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
    backgroundColor: 'transparent',
    color: 'black',
    borderRadius: '0px',
    boxShadow: 'none',
    boxSizing: 'border-box',
    // margin: '0px',
    marginTop: '2rem',
    width: '230px',
    height: '48px',
    border: '4px solid',
  }
}))

export const WelcomePageListItemButtonStyled = styled(ListItemButton)(({
  padding: '0px',
  marginTop: '32px',
  
  '&:hover': {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.up('sm')]: {
    width: '570px',
  },
}))

export const WelcomePageExpandLessStyled = styled(ExpandLess)(({
  width: '40px',
  height: '40px',
}))

export const WelcomePageExpandMoreStyled = styled(ExpandMore)(({
  width: '40px',
  height: '40px'
}))