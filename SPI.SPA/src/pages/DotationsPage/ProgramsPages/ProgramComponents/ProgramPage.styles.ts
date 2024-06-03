import { Box, Link, LinkProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { BodyLargeMediumText, H2Text } from "shared/FontBoxes/FontBoxes.styles";

export const ProgramPageBoxStyled = styled(Box)(({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
  marginBottom: '10%',
  marginTop: '5%',
  overflowWrap: 'break-word',

  [theme.breakpoints.down('md')]: {
    marginBottom: '20%',
  },
  [theme.breakpoints.down('xs')]: {
    marginBottom: '50%',
  },
}));

export const ProgramPageHalfBoxStyled = styled(Box)(({
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '95%',
  },
}));

export const ProgramPageTitleBoxStyled = styled(H2Text)(({
  fontSize: '32px',
  lineHeight: '35px',
  marginTop: '44px',
  marginBottom: '30px',
}));

export const ProgramPageListBoxStyled = styled(Box)(({
  marginTop: '40px',
}));

interface ProgramPageLinkProps extends LinkProps {
  isSmallerLink?: boolean,
}

export const ProgramPageLinkStyled = styled(Link)<ProgramPageLinkProps>(({isSmallerLink}) => ({
  fontFamily: 'Archivo',
  color:'black',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '24px',
  textDecorationColor: 'black',
  display: 'inline',
  overflowWrap: 'break-word',

  ...(isSmallerLink &&{
    fontSize: '16px',
    lineHeight: '17.5px',
  })
}));

export const ProgramPageFirstTextStyled = styled(BodyLargeMediumText)(({
  marginTop: '12.5px',
}));