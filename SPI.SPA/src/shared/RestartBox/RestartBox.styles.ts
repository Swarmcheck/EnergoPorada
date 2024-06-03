import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { ButtonPrimaryText, ButtonSecondaryText } from "shared/FontBoxes/FontBoxes.styles";

export const RetartBoxScreenBoxStyled = styled(Box)(({
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 5000,
  width: '100%',
  height: '100%',
}));

export const RetartBoxOpacityBoxStyled = styled(Box)(({
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  opacity: 0.5,
}));

export const RetartBoxBlackBoxStyled = styled(Box)(({
  position: 'fixed',
  backgroundColor: 'black',
  left: '30%',
  top: '25%',
  width: '40%',
  zIndex: 5001,
  color: 'white',

  [theme.breakpoints.down('xs')]: {
    width: '90%',
    left: '5%',
    top: '10%',
  },
}));

export const RetartBoxTextBoxStyled = styled(Box)(({
  width: '80%',
  margin: '50px auto 44px auto',
  flexDirection: 'column',
  display: 'flex',
}));

export const RetartBoxButtonsBoxStyled = styled(Box)(({
  marginTop: '40px',
  justifyContent: 'space-between',
  display: 'inline-flex',
}));

export const RestartBoxRestartButtonStyled = styled(ButtonPrimaryText)(({
  overflow:'hidden',
  textAlign:'center',
  backgroundColor:'black',
  border:'4px solid white',
  cursor:'pointer',
  width:'230px',
  height:'48px',
  color: 'white',
  borderRadius: '0px',

  [theme.breakpoints.down('xs')]: {
    width:'55%',
  },

  '&:hover': {
    backgroundColor: 'white',
    border:'4px solid white',
    color: 'black',
  },
  '&:active': {
    fontSize: '14.75px',
    lineHeight: '16px',
  },
}))

export const RestartBoxCancelButtonBoxStyled = styled(ButtonSecondaryText)(({
  color: 'white',
  backgroundColor: 'black',
  paddingBottom: '-10px',
  marginLeft: '-5px',

  '&:hover': {
    textDecoration: 'underline',
    textDecorationThickness: '1px',
    textDecorationColor: 'white',
    textUnderlineOffset: '5px',
  },
  '&:active': {
    fontFamily: 'Archivo Black',
    fontWeight: 400,
    textDecoration: 'underline',
    textDecorationThickness: '2px',
    textDecorationColor: 'white',
    textUnderlineOffset: '5px',
  },
}))