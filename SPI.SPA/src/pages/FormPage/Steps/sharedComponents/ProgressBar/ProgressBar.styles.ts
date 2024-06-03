import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";

export const ProgressBarBoxStyled = styled(Box)(({
  marginTop: '60px',
  marginBottom: '60px',
  width: '100%',

  [theme.breakpoints.down('xs')]: {
    marginTop: '0px',
    marginBottom: '40px',
  },
}))

export const ProgressBarPercentageTextBoxStyled = styled(Box)(({
  fontFamily: 'Archivo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '22px',
  lineHeight: '24px',
  textTransform: 'uppercase',
}))

export const ProgressBarProgressLineBoxStyled = styled(Box)(({
  display: 'flex',
  height: '12px',
  width: '100%',
  marginTop: '21px',
  backgroundColor: '#E0E0E0'
}))

export const ProgressBarFillProgressLineBoxStyled = styled(Box)(({
  backgroundColor: '#BCD0ED'
}))