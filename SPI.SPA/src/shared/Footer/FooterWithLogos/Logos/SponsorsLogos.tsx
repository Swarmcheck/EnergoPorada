import Logo_ŚPI from '../../../../public/icons/logos/Logo_SPI.png';
import Logo_CRIS from '../../../../public/icons/logos/Logo_CRIS.png';
import Logo_FFW from '../../../../public/icons/logos/Logo_FFW.png';
import React from "react";
import { DescriptionText } from "shared/FontBoxes/FontBoxes.styles";
import { theme } from "shared/breakpointsTheme/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FooterWithLogosLogosBoxStyled } from './LogosInFooter.styled';

export const SponsorsLogos = (): JSX.Element => {

  const imgStyle = {
    height: '65px',

    [theme.breakpoints.down('sm')]: {
      height: '50px',
    }
  }
  
  return (
    <Box>
      <DescriptionText sx={{ marginBottom: '10px'}} tabIndex={0}>
        Przedsięwzięcie współfinansowane w ramach projektu Śląska Przestrzeń Innowacji.
      </DescriptionText>
      <FooterWithLogosLogosBoxStyled>
        <Link 
          to={{ pathname: "//cofund.org.pl/" }} 
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Box
            component='img'
            src={Logo_FFW}
            sx={imgStyle}
            aria-label={'Logo Fundacja Fundusz Współpracy'}
          />
        </Link>
        <Link 
          to={{ pathname: "//slaska.przestrzeninnowacji.pl/" }} 
          target="_blank" 
          style={{ textDecoration: 'none' }}
        >
          <Box
            component='img'
            src={Logo_ŚPI}
            sx={imgStyle}
            aria-label={'Logo Śląska Przestrzeń Innowacji'}
          />
        </Link>
        <Link 
          to={{ pathname: "//cris.org.pl/" }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Box
            component='img'
            src={Logo_CRIS}
            sx={imgStyle}
            aria-label={'Logo Centrum Rozwoju Inicjatyw Społecznych'}
          />
        </Link>
      </FooterWithLogosLogosBoxStyled>
    </Box>
  )
}