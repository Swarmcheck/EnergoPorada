import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const FormPageBoxStyled = styled(Box)(({
  justifyItems: 'center',
  alignItems: 'center',

  //Screen sized
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '20%',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '30%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '90%',
    paddingTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '40%',
  },
}));