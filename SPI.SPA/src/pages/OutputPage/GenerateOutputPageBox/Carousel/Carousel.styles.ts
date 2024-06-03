import styled from "@emotion/styled"
import { Box, Button, ButtonProps } from "@mui/material"
import { theme } from "shared/breakpointsTheme/styles"

export const CarouselBoxStyled = styled(Box)(({
  marginTop: '40px',
  marginBottom: '52px',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
}))

export const CarouselLeftButtonStyled = styled(Button)<ButtonProps>(({
  position: 'absolute',
  left: '-70px',
  backgroundColor: 'transparent',

  [theme.breakpoints.down('md')]: {
    left: '-10px',
  },
}))

export const CarouselRightButtonStyled = styled(Button)<ButtonProps>(({
  position: 'absolute',
  right: '-70px',
  transform: 'rotate(180deg)',
  backgroundColor: 'transparent',

  [theme.breakpoints.down('md')]: {
    right: '-10px',
  },
}))

export const CarouselProgramBoxStyled = styled(Box)(({
  flexDirection: 'row',
  display: 'inline-flex',
  gap: '30px',
  width: '80vw',

  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },

  [theme.breakpoints.down('xs')]: {
    width: '95vw',
  },
}))

