import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const DotationsPageBoxStyled = styled(Box)(({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80vw',
  marginTop: '68px',
  marginBottom: '5%',
  
  [theme.breakpoints.down('md')]: {
    width: '90vw',
    marginBottom: '20%',
  },

  [theme.breakpoints.up('xl')]: {
    width: '50vw',
    marginBottom: '20%',
  },
}));

export const DotationsListBoxStyled = styled(Box)(({
  marginTop: '72px',
}))

