import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

//Headers
export const H1Text = styled(Box)(({
  fontFamily: 'Archivo Black',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '32px',
  lineHeight: '35px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '26px',
  },
}));

export const H2Text = styled(Box)(({
  fontFamily: 'Archivo Black',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '26px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

export const H3Text = styled(Box)(({
  fontFamily: 'Archivo Black',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '22px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

//Titles
export const TitleExtraBoldText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '20px',
  lineHeight: '22px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

export const TitleBoldText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '24px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

//Menu
export const MenuText = styled(Button)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '16px',
  lineHeight: '17px',
  textTransform: 'uppercase',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

//Buttons
export const ButtonPrimaryText = styled(Button)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '16px',
  lineHeight: '17px',
  textTransform: 'uppercase',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const ButtonSecondaryText = styled(Button)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '16px',
  lineHeight: '17px',
  textTransform: 'uppercase',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const ButtonSecondaryClickedText = styled(Button)(({
  fontFamily: 'Archivo Black',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '17px',
  textTransform: 'uppercase',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

//Body Large
export const BodyLargeExtraBoldText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '18px',
  lineHeight: '24px',
}));

export const BodyLargeBoldText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '20px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const BodyLargeMediumText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '24px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

//Body Small
export const BodySmallExtraBoldText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '16px',
  lineHeight: '17px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const BodySmallBoldText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '17.5px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const BodySmallSemiBoldText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '17px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const BodySmallMediumText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const BodySmallItalicText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '17px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

//Description
export const DescriptionText = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '15px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));