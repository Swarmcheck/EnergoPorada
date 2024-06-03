import { createTheme } from "@mui/material/styles";
import { Box, styled } from "@mui/material";

export const AppTheme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: 'white',
          color: 'black',
          fontFamily: 'Archivo',
          overflow: 'hidden',
        },
      },
    },
  },
});

export const AppBoxStyled = styled(Box)(({
  position: 'relative', 
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '100vw',
}))