import SwarmcheckLogo from '../../../../public/icons/logos/SwarmcheckLogo.svg';
import React from "react";
import { DescriptionText } from "shared/FontBoxes/FontBoxes.styles";
import { theme } from "shared/breakpointsTheme/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FooterWithSGLogoBoxStyled } from './LogosInFooter.styled';

export const SGLogo = (): JSX.Element => {
  const imgSCStyle = {
    height: '45px',

    [theme.breakpoints.down('xs')]: {
      height: '30px',
    }
  }

  return (
    <Box>
      <DescriptionText sx={{ marginBottom: '10px'}} tabIndex={0}>
        Wykonawca aplikacji
      </DescriptionText>
      <FooterWithSGLogoBoxStyled>
        <Link
          to={{ pathname: "//www.swarmcheck.ai/" }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Box
            component='img'
            src={SwarmcheckLogo}
            sx={imgSCStyle}
            aria-label={'Logo Słormczek'}
          />
        </Link>
      </FooterWithSGLogoBoxStyled>
    </Box>     
  )
}