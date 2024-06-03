import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { H1Text } from "shared/FontBoxes/FontBoxes.styles";

export const ErrorPageBoxStyled = styled(Box)(({
  paddingTop: '7%',
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '20%',
  display: 'flex',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '30%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '90%',
    paddingTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '40%',
  },
}));

export const ErrorPageTextBoxStyled = styled(Box)(({
  width: '40%',

  [theme.breakpoints.down('md')]: {
    width: '900%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));

export const ErrorPageImageBoxStyled = styled(Box)(({
  width: '50%',
  marginTop: '-6%',
  marginLeft: 'auto',
  
  [theme.breakpoints.down('md')]: {
    width: '0px',
  }
}));

export const ErrorPageMainTextStyled = styled(H1Text)(({
  fontSize: '72px',
  lineHeight: '78px',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '45px',
    marginTop: '20px',
  }
}));

export const ErrorPageSubMainTextStyled = styled(H1Text)(({
  fontSize: '32px',
  lineHeight: '40px',
  marginTop: '15px',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
    marginTop: '30px',
  }
}));