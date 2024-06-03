import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BodySmallSemiBoldText } from "shared/FontBoxes/FontBoxes.styles";

export const PlusMinusWithLabelBoxStyled = styled(Box)(({
  width: '100%',
  alignItems: 'left',
  marginBottom: '34px',
  marginTop: 0,
  paddingTop: 0,
}))

export const PlusMinusInsideBoxStyled = styled(Box)(({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '5px',
  paddingTop: 0,
}))

interface PlusMinusBoxStyledProps {
  isError?: boolean
}

export const PlusMinusBoxStyled = styled(BodySmallSemiBoldText)<PlusMinusBoxStyledProps>(({ isError }) => ({
  textTransform: 'none',
  width: '150px',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  display: 'flex',
  margin: '3px 3px 3px 3px',

  ...(isError && {
    margin: 0,
    border: '3px solid #eb5d48'
  })
}))

export const PlusMinusTextFieldStyled = styled(TextField)(({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#E0E0E0',
    borderRadius: '0px',
    width: '37px',
    height: '37px',
    padding: '0px',

    '& fieldset': {
      border: '0px',
    },
  },

  '& .MuiInputBase-input': {
    padding: '0px',
    textAlign: 'center',

    fontFamily: 'Archivo',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '20px',
  }
}));

export const PlusMinusTipBoxStyled = styled(Box)(({
  height: '30px',
  marginLeft: '5px',
}));