import { Select, SelectProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const SelectListStyled = styled(Select)<SelectProps>(({
  width: '50%',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
    
  '& .MuiSelect-select': {
    fontFamily: 'Archivo',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: '16px',
    lineHeight: '17.5px',

    '& .Mui-focused': {
      fontWeight: 500,
      fontStyle: 'normal',
    },
  },

  '& .Mui-focused': {
    borderRadius: 0,
    border: '0px',
    borderBottom: '2px solid #5C5C5C',

    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: 0,
      border: '0px',
      borderBottom: '2px solid #5C5C5C',
    }
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: 0,
    border: '0px',
    borderBottom: '2px solid #5C5C5C',
  }, 
}));