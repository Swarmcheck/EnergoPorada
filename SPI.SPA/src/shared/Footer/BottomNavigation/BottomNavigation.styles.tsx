import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const BottomNavigationPaperStyled = styled(Paper)(({
  boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.15)',
  width: '100%',
  height: '125px',
  borderRadius: '0px',
  zIndex: 50,
  bottom: 0,
}));

export const BottomNavigationBoxStyled = styled(Box)(({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
}))

export const BottomNavigationButtonsBoxStyled = styled(Box)(({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',

  //TODO: apply styles for desktop - size of bottons change

  [theme.breakpoints.down('xs')]: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between'
  },
}))