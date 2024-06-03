import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { BodySmallExtraBoldText } from "shared/FontBoxes/FontBoxes.styles";

export const BiggerErrorBoxStyled = styled(Box)(({
  backgroundColor: '#EF8271',
  height: '57px',
  width: '100%',
  marginTop: '60px',
  marginBottom: '60px',

  [theme.breakpoints.down('xs')]: {
    marginTop: '0px',
    marginBottom: '40px',
  },
}))

export const BiggerErrorContentStyled = styled(Box)(({
  paddingLeft: '22px',
  paddingRight: '22px',
  display: 'flex',
  alignContent: 'center',
  height: '100%',
}))

export const BiggerErrorTextBoxStyled = styled(BodySmallExtraBoldText)(({
  width: '95%',
  marginLeft: '15px',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
}))