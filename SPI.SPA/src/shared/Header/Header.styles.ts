import { AppBar, Box, Button, ButtonProps, Container, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const HeaderAppBarStyled = styled(AppBar)(({
  backgroundColor: '#BCD0ED',
  width: '100vw',
  height: '72px',
  display: 'flex',
  justifyContent: 'center',
  position: "sticky",
  elevation: 0,
}));

export const HeaderToolbarStyled = styled(Toolbar)(({
  '@media': {
    padding: 0,
  }
}));

export const HeaderBoxStyled = styled(Box)(({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: '1rem',
    marginRight: '1rem',
  },

}));

export const MenuOpnenedContainer = styled(Container)(({
  height: '100vh',
  width: '100vw',
  backgroundColor: '#BCD0ED',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const HeaderMenuBoxStyled = styled(Box)(({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '800px',
  ariaLabel: 'Menu',
  ariaRequired: "true",
}))

interface MenuButtonStyledProps extends ButtonProps{
  isLogo?:boolean,
  isActive?: boolean,
}

export const MenuButtonStyled = styled(Button)<MenuButtonStyledProps>(({isLogo = false, isActive = false}) => ({
  backgroundColor: 'transparent',
  color: 'black',
  borderRadius: '0px',
  boxShadow: 'none',
  paddingBottom: '10px',

  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '16px',
  lineHeight: '17px',
  textTransform: 'uppercase',

  ...(isActive && {
    textDecoration: 'underline',
    textDecorationThickness: '3px',
    textUnderlineOffset: '6px',
  }),

  ...(!isLogo && {
    '&:hover': {
    textDecoration: 'underline',
    textDecorationThickness: '3px',
    textUnderlineOffset: '6px',
    },
}),
}));

export const MenuOpenedBoxStyled = styled(Box)(({
  marginTop: 3,
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

export const MenuOpenedListBoxStyled = styled(Box)(({
  marginTop: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
  justifyItems: 'center',
}));

export const MenuOpenedButtonBoxStyled = styled(Box)(({
  marginTop: '57px',
  alignSelf: 'center',
}));