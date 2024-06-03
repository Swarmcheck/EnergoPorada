import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { TitleExtraBoldText, BodySmallMediumText, ButtonPrimaryText } from "shared/FontBoxes/FontBoxes.styles";

export const EducationBoxBoxStyled = styled(Box)(({
  width: '100%',
  minHeight: '516px',

  [theme.breakpoints.up('md')]: {
    width: '450px',
  },
}));

export const EducationContextBoxStyled = styled(Box)(({
  marginTop: '-5px',
  backgroundColor: '#E8E7E7',
  padding: '10px 40px 20px 20px',
}));

export const EducationTextBoxStyled = styled(Box)(({
  height: '250px',
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    height: '200px',
  },
}));

export const EducationBoxTitleBoxStyled = styled(TitleExtraBoldText)(({
  marginTop: '24px',
}));

export const EducationBoxDescriptionBoxStyled = styled(BodySmallMediumText)(({
  marginTop: '12px',
}));

export const MoreButtonStyled = styled(ButtonPrimaryText)(({
  marginTop: '20px',
  height: '48px',
  width: '153px',
  backgroundColor: 'transparent',
  color: 'black',
  borderRadius: '0px',
  boxShadow: 'none',
  boxSizing: 'border-box',
  border: '4px solid black',
  padding: '4px',  

  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
    border: '4px solid black',
  },
  '&:active': {
    backgroundColor: 'black',
    color: 'white',
    border: '4px solid black',
    fontSize: '14.75px',
    lineHeight: '16px',
  },
}));