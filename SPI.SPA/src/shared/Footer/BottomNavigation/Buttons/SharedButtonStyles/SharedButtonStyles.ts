import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

//Component for parent style for ReturnButton and NextButton
export const SharedButtonStyled = styled(Button)(({
  height: '48px',
  width: '320px',
  backgroundColor: 'transparent',
  color: 'black',
  fontWeight: 'bold',
  borderRadius: '0px',
  minHeight: '40%',
  margin: '30px',
  minWidth: '250px',
  fontFamily: 'Archivo',
  boxShadow: 'none',
  boxSizing: 'border-box',
}));