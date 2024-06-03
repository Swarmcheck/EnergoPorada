import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BodySmallMediumText, ButtonPrimaryText, TitleExtraBoldText } from "shared/FontBoxes/FontBoxes.styles";
import { theme } from "shared/breakpointsTheme/styles";

interface ProgramBoxProps {
  isOutputPage?: boolean;
  isAlone?: boolean;
  isEducationPage?: boolean,
}

export const ProgramBoxBoxStyled = styled(Box)<ProgramBoxProps>(({ isOutputPage, isAlone, isEducationPage }) => ({
  padding: '20px 40px 20px 20px',
  backgroundColor: '#BCD0ED',
  height: '445px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  
  ...(isOutputPage && {
    height: '445px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  }),

  ...(isAlone && {
    display: 'inline-flex',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),

  ...(isEducationPage && {
    height: '516px',
  }),

  ...(!isOutputPage && {
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '488px',
      ...(isEducationPage && {
        width: '450px',
      }),
    },
  }),
}));

export const ProgramBoxTextBoxStyled = styled(Box)<ProgramBoxProps>(({ isAlone, isEducationPage }) => ({
  overflow: 'hidden',

  ...(isAlone && {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),

  ...(isEducationPage && {
    marginTop: '20px',
  }),
}));

export const ProgramBoxTitleBoxStyled = styled(TitleExtraBoldText)(({
  marginTop: '24px',
}));

export const ProgramBoxDescriptionBoxStyled = styled(BodySmallMediumText)<ProgramBoxProps>(({ isAlone }) => ({
  marginTop: '12px',
  overflow: 'hidden',
  height: '100%',
}));

export const MoreButtonStyled = styled(ButtonPrimaryText)(({
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