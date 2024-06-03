import React from "react";
import { useFooter } from "contexts/Footer/footer";
import { BottomNavigationBox } from "./BottomNavigation/BottomNavigation";
import { FooterWithLogos } from "./FooterWithLogos/FooterWithLogos";
import { Box } from "@mui/material";
import { FormToolbox } from "shared/FormToolbox/FormToolbox";

export const Footer = (): JSX.Element => {

  const { currentPage } = useFooter();

  const displayBottomNavigation = ['/ankieta', '/dotacjenacieplo/', '/przydatnawiedza/'].includes(currentPage)
  const displayFooterWithLogos = ['/', '/output', '/ego'].includes(currentPage)
  const isFixed = ['/', '/ankieta', '/dotacjenacieplo/', '/przydatnawiedza/'].includes(currentPage)
  const unFixForMobile = window.innerWidth <= 740 && currentPage === '/';

  return (
    <Box
      sx={{
        position: isFixed && !unFixForMobile ? 'fixed' : 'absolute',
        width: '100%',
        bottom: 0,
        marginTop: 'auto'
      }}
    >
      {displayBottomNavigation ? <BottomNavigationBox /> : null}
      {displayFooterWithLogos ? <FooterWithLogos /> : null}
      {/* <FormToolbox/> */}
    </Box>
  )
}