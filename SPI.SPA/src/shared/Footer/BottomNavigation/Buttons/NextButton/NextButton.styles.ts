import { ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { ButtonPrimaryText } from "shared/FontBoxes/FontBoxes.styles";

interface NextButtonStyledProps extends ButtonProps {
  blackTheme?: boolean
}

export const NextButtonStyled = styled(ButtonPrimaryText)<NextButtonStyledProps>(({ disabled, blackTheme }) => ({
  height: '48px',
  width: '320px',
  backgroundColor: 'transparent',
  color: 'black',
  borderRadius: '0px',
  boxShadow: 'none',
  boxSizing: 'border-box',
  border: '4px solid black',

  [theme.breakpoints.down('xs')]: {
    width: '220px'
  },

  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
    border: '4px solid black',
  },
  '&:active': {
    backgroundColor: 'black',
    color: 'white',
    border: '4px solid black',
    fontSize: '14.75px',
    lineHeight: '16px',
  },
  
  ...(disabled && {
    opacity: '50%',
    border: '4px solid #989898',
  }),
  ...(blackTheme && {
    border: '4px solid #FFFFFF',
    color: 'white',

    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      border: '4px solid white',
    },
  })
}));

//TODO Why merge doesn't work
//export const NextButtonStyled = _.merge(NextButtonStyledBase, SharedButtonStyles)