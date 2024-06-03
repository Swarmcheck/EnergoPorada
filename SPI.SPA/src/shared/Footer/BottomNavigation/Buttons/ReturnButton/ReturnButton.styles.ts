import { ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonSecondaryText } from "shared/FontBoxes/FontBoxes.styles";

interface ReturnButtonStyledProps extends ButtonProps {
  blackTheme?: boolean
}

export const ReturnButtonStyled = styled(ButtonSecondaryText)<ReturnButtonStyledProps>(({blackTheme}) => ({
  height: '48px',
  backgroundColor: 'transparent',
  color: 'black',
  borderRadius: '0px',
  minWidth: '72px',
  boxShadow: 'none',
  boxSizing: 'border-box',

  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
    textDecorationThickness: '3px',
    boxShadow: 'none',
    textUnderlineOffset: '3px',
  },

  '&:active': {
    fontFamily: 'Archivo Black',
    fontWeight: 400,
    textDecoration: 'underline',
    textDecorationThickness: '3px',
    textUnderlineOffset: '3px',
  },

  ...(blackTheme && {
    color: 'white',
  })
}));

//TODO Why merge doesn't work
//export const ReturnButtonStyled = _.merge(ReturnButtonStyledBase, SharedButtonStyles)