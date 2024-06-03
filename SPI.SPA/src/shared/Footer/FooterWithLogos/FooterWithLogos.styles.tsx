import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import { theme } from "shared/breakpointsTheme/styles";

export const FooterWithLogosPaperStyled = styled(Paper)(({
  backgroundColor: '#BCD0ED',
  height: '180px',
  zIndex: 50,
  borderRadius: '0px',
  bottom: 0,
  width: '100%',

  [theme.breakpoints.down('xs')]: {
    height: 'auto',
   },
}));

export const FooterWithLogosBoxStyled = styled(Box)(({
  width: '80%',
  marginLeft: '10%',
  marginRight: 'auto',
  paddingTop: '30px',
  display: 'flex',
  gap: '122px',
  ariaLabel: 'Stopka z informacjami o współfinansowaniu projektu',
  ariaRequired: "true",
  
  [theme.breakpoints.down('sm')]: {
    gap: '50px',
  },

  [theme.breakpoints.down('xs')]: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
    gap: '15px',
  },
}));

export const FooterWithSGLogoAndSharedButtonsStyled = styled(Box)(({
  display: 'flex',
  width: '50%',
  justifyContent: 'space-between',
  gap: '122px',

  [theme.breakpoints.down('md')]: {
    gap: '50px',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '15px',
  },

  [theme.breakpoints.down('xs')]: {
    width: '90%',
    paddingTop: '3px',
    flexDirection: 'row',
    gap: '30px',
  },
}));