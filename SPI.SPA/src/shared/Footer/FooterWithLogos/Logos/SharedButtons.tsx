
import FacebookShare from '../../../../public/icons/social/FacebookShare.svg';
import LinkedInShare from '../../../../public/icons/social/LinkedInShare.svg';
import TwitterShare from '../../../../public/icons/social/TwitterShare.svg';
import React from "react";
import { DescriptionText } from "shared/FontBoxes/FontBoxes.styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FooterSharedButtonsStyled, FooterTextSharedButtonsStyled } from './LogosInFooter.styled';

export const SharedButtons = (): JSX.Element => {
  return (
    <FooterTextSharedButtonsStyled>
      <DescriptionText sx={{ marginBottom: '5px'}} tabIndex={0}>
        Podziel się Energoporadą ze znajomymi
      </DescriptionText>
      <FooterSharedButtonsStyled>
        {/* Twitter share button */}
        <Link
          to={{ pathname: "//twitter.com/intent/tweet?text=Zachęcam do skorzystania z Energoporady!&url=https://www.energoporada.pl" }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Box
            component='img'
            src={TwitterShare}
            sx={{width: '40px', paddingTop: '6px', paddingRight: '6px'}}
            aria-label={'Podziel się Energoporadą ze znajomymi na twitterze'}
          />
        </Link>
        {/* Facebook share button */}
        <Link
          to={{ pathname: "//www.facebook.com/sharer/sharer.php?&u=https://www.energoporada.pl&t=Zachęcam do skorzystania z Energoporady!" }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Box
            component='img'
            src={FacebookShare}
            sx={{width: '52px'}}
            aria-label={'Podziel się Energoporadą ze znajomymi na facebooku'}
          />
        </Link>
      </FooterSharedButtonsStyled>
    </FooterTextSharedButtonsStyled>
  )
}