import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BoxProps } from "@mui/system";
import { theme } from "shared/breakpointsTheme/styles";

export const ButtonWithCircleBox = styled(Box)(({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
}))

export const CircleBox = styled(Box)(({
  margin: '16px',
  marginLeft: '-5px',
}))

export const SquareBox = styled(Box)(({
  margin: '16px',
  marginLeft: '-5px',
}))

export const SelectButtonsTipBoxBoxStyled = styled(Box)(({
  position: 'absolute',
  right: '-5%',
  alignItems: 'center',
  top: '25%',

  [theme.breakpoints.down('md')]: {
    right: '10%',
  },
  [theme.breakpoints.down('sm')]: {
    right: '5%',
  },
  [theme.breakpoints.down('xs')]: {
    right: '0',
  },
}))


interface SelectButtonStyled extends BoxProps{
  isShorter?: boolean,
}

export const SelectButtonStyled = styled(Button)<SelectButtonStyled>(({ isShorter }) => ({
  textTransform: 'none',
  justifyContent: 'left',
  width: '100%',
  minWidth: '1050px',
  height: '70px',
  borderRadius: '0px',
  color: 'black',
  paddingLeft: '52px',
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '17px',
  textAlign: 'left',

  //TODO fix boxShadow into globally
  boxShadow: 'none',

  [theme.breakpoints.down('md')]: {
    width: '80%',
    minWidth: '80%',
    paddingLeft: '22px',
    minHeight: '70px',
    height: '100%',
  },

  '&.MuiButton-outlined': {
    boxShadow: 'none',
    backgroundColor: '#ECECEC',
    border: '1px #ECECEC',

    '&:hover': {
      borderRadius: '0px',
      boxShadow: 'none',
      fontFamily: 'Archivo',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '17.5px',
    },
  },

  '&.MuiButton-contained': {
    fontWeight: '800',
    boxShadow: 'none',
    backgroundColor: '#BCD0ED',

    '&:focus active': {
      fontFamily: 'Archivo',
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '16px',
      lineHeight: '17px',
    },
  },

  ...(isShorter && {
    width: '358px',
    minWidth: '358px',
    justifyContent: 'center',
    paddingLeft: '15px',
    textAlign: 'center',

    [theme.breakpoints.down('xs')]: {
      width: '80%',
      minWidth: '80%',
    },
  })
}));