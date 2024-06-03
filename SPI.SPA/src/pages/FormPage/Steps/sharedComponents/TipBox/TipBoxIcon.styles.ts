import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { BodySmallSemiBoldText } from "shared/FontBoxes/FontBoxes.styles";

export const TipBoxBoxStyled = styled(Box)(({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  [theme.breakpoints.up('md')]: {
    marginRight: '-5%',
  },
}));

interface FlipProps extends BoxProps {
  toRightSide?: boolean,
  toUpSide?: boolean,
}

export const TipBoxBlackBoxStyled = styled(Box)<FlipProps>(({ toRightSide, toUpSide }) => ({
  backgroundColor: 'black',
  color: 'white',
  minWidth: '487px',
  maxWidth: '487px',
  paddingTop: '35.5px',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingBottom: '32px',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: '-50vw',
  top: '30px',
  zIndex: 300,

  [theme.breakpoints.up('xs')]: {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 10%, 83% 10%, 85% 0, 75% 10%, 0 10%)',
  },

  [theme.breakpoints.down('md')]: {
    minWidth: '50vw',
    maxWidth: '50vw',
  },

  [theme.breakpoints.down('xs')]: {
    top: '-50px',
    paddingTop: '20px',
    left: '-85vw',
    minWidth: '80vw',
    maxWidth: '80vw',
  },

  ...(toRightSide && {
    transform: 'scaleX(-1)',
    left: '0vw',

    [theme.breakpoints.down('md')]: {
      minWidth: '50vw',
      maxWidth: '50vw',
    },
    [theme.breakpoints.down('xs')]: {
      left: '-15vw',
      minWidth: '70vw',
      maxWidth: '70vw',
      paddingTop: '20px',
    },
    '@media (max-width: 500px)':{
      left: '-40vw',
      minWidth: '80vw',
      maxWidth: '80vw',
    },
  }),
  ...(toUpSide && {
    transform: 'scaleY(-1)',
  }),
}));

export const TipBoxTextBoxStyled = styled(BodySmallSemiBoldText)(({
  marginTop: '35px',
  lineHeight: '24px',
}));

export const TipBoxReverseBoxStyled = styled(Box)<FlipProps>(({ toRightSide, toUpSide }) => ({
  ...(toRightSide && {
    transform: 'scaleX(-1)',
  }),
  ...(toUpSide && {
    transform: 'scaleY(-1)',
  }),
}));