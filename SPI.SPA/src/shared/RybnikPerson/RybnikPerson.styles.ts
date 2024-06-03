import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/system";
import { theme } from "shared/breakpointsTheme/styles";

interface RybnikPersonProps extends BoxProps {
  isFixed?: boolean,
}

export const RybnikPersonBoxStyled = styled(Box)<RybnikPersonProps>(({isFixed})=>({
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 0,
  overflow: 'hidden',
  width: '100%',
  pointerEvents: 'none',

  ...(isFixed && {
    position: 'fixed',
  })
}));

export const RybnikPersonInsideBoxStyled = styled(Box)(({
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'end',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    width: '95%'
  },
}));

export const RybnikPersonImageBoxStyled = styled(Box)(({
  width:'50%',
  display: 'flex',
  justifyContent: 'end',
}));