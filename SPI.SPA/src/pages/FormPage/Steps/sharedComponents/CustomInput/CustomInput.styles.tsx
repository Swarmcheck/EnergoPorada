import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BoxProps } from "@mui/system";
import { theme } from "shared/breakpointsTheme/styles";

interface InputBoxProps extends BoxProps{
  isCustomInput: boolean,
}

export const InputBox = styled(Box)<InputBoxProps>(({isCustomInput = false}) => ({
  width: '100%',

  ...(isCustomInput && {
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
  })
}))

export const CustomInputTextFieldStyled = styled(TextField)(({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#E0E0E0',
    borderRadius: '0px',
    minHeight: '70px',

    '& fieldset': {
      border: '0px',
      borderBottom: '2px solid #5C5C5C',
    },

    '&.Mui-focused fieldset': {
      borderBottom: '2px solid #5C5C5C',
    },

    '&:hover': {
      backgroundColor: '#ECECEC',
      '& fieldset': {
        borderBottom: '2px solid #5C5C5C',
      }
    },
    
  },
  '& .Mui-error': {
    border: '3px solid #EB5D48',

    '& fieldset': {
      border: '0px',
    },

    '&.Mui-focused fieldset': {
      border: '0px',
    },

    '&:hover': {
      backgroundColor: '#ECECEC',
      '& fieldset': {
        border: '0px',
      }
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Archivo',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: '16px',
    lineHeight: '17.5px',
    marginLeft: '35px',

    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
    },

    '&:focus': {
      fontWeight: 500,
      fontStyle: 'normal'
    },
  }
}));