import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "shared/breakpointsTheme/styles";

export const FooterWithLogosLogosBoxStyled = styled(Box)(({
  display: 'flex',
  paddingTop: '15px',
  justifyContent: 'space-between',
  width: '90%',
  gap: '30px',

  [theme.breakpoints.down('md')]: {
    width: '80%',
  },

  [theme.breakpoints.down('sm')]: {
    width: '70%',
    minWidth: '300px',
  },

  [theme.breakpoints.down('xs')]: {
    paddingTop: '3px',
    height: '50px',
    width: '60%',
  },
}));

export const FooterWithSGLogoBoxStyled = styled(Box)(({
  display: 'flex',
  width: '50%',

  [theme.breakpoints.down('xs')]: {
    paddingTop: '3px',
    height: '50px',
  },
}));

export const FooterTextSharedButtonsStyled = styled(Box)(({
  minWidth: '170px',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '220px',
    flexDirection: 'row',
  },

  [theme.breakpoints.down('xs')]: {
    maxWidth: '300px',
    flexDirection: 'column',
    minWidth: '150px',
  },
}));

export const FooterSharedButtonsStyled = styled(Box)(({
  display: 'flex',
}));

