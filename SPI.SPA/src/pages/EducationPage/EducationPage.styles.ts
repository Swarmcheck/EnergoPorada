import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const EducationPageBoxStyled = styled(Box)(({
  marginLeft: '200px',
  marginRight: '197px',
  marginTop: '65px',
  marginBottom: '5%',
  justifyItems: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    width: '80%',
    marginLeft: 'auto', 
    marginRight: 'auto'
  },

  [theme.breakpoints.down('md')]: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  [theme.breakpoints.down('xs')]: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
}));

export const EducationListBoxStyled = styled(Box)(({
  marginTop: '72px',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  alignItems: 'left',
  gap: '30px',

  [theme.breakpoints.down('xs')]: {
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
}));

export const EducationHeaderBox = styled(Box)(({
  [theme.breakpoints.down('xs')]: {
    alignSelf: 'flex-start'
  },
}));


