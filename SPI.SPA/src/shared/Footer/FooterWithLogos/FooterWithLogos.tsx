import { FooterWithLogosBoxStyled, FooterWithLogosPaperStyled, FooterWithSGLogoAndSharedButtonsStyled } from "./FooterWithLogos.styles"

import React from "react";
import { SGLogo } from "./Logos/SGLogo";
import { SponsorsLogos } from "./Logos/SponsorsLogos";
import { SharedButtons } from "./Logos/SharedButtons";

export const FooterWithLogos = (): JSX.Element => {
  return (
    <FooterWithLogosPaperStyled>
      <FooterWithLogosBoxStyled tabIndex={0}>
        <SponsorsLogos/>
        <FooterWithSGLogoAndSharedButtonsStyled>
          <SGLogo/>
          <SharedButtons/>
        </FooterWithSGLogoAndSharedButtonsStyled>
      </FooterWithLogosBoxStyled>
    </FooterWithLogosPaperStyled>
  )
}