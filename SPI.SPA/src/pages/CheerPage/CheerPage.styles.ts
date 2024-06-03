import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const CheerPageBoxStyled = styled(Box)(({
  width: '50%',
  marginLeft: '0%',
  marginRight: 'auto',
  marginBottom: '20%',

  [theme.breakpoints.down('xs')]: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export const CheerPageBoxWithTextStyled = styled(Box)(({
  marginLeft: '20%',
  marginRight: '20%',
  marginTop: '100px',
  marginBottom: '15%',
  justifyItems: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('xs')]: {
    marginLeft: '5%',
    marginRight: '5%',
  },
}));