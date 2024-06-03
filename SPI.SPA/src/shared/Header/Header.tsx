import { HeaderAppBarStyled, HeaderBoxStyled, HeaderMenuBoxStyled, HeaderToolbarStyled, MenuButtonStyled, MenuOpenedBoxStyled, MenuOpenedButtonBoxStyled, MenuOpenedListBoxStyled, MenuOpnenedContainer } from './Header.styles'
import { Box, Hidden, IconButton, SwipeableDrawer } from '@mui/material';

import LogoRybnik from '../../public/icons/logos/LogoRybnik.svg';
import ArrowLeft from '../../public/icons/ArrowLeft.svg';
import React, { useState } from 'react';
import { useFooter } from 'contexts/Footer/footer';

import HamburgerMenu from '../../public/icons/HamburgerMenu.svg';


export const Header = (): JSX.Element => {

  const { currentPage } = useFooter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function generateMenuItem(name: string, path: string, mobileView?:boolean) {

    const menuButtonStyled =(
    <MenuButtonStyled
      disableRipple={true}
      href={path}
      isActive={currentPage === path}
      aria-label={name}
    >
      {name}
    </MenuButtonStyled>)

    function returnMenuButtonStyled(){
      if(mobileView){
        return(
          <MenuOpenedButtonBoxStyled>
            {menuButtonStyled}
          </MenuOpenedButtonBoxStyled>
        )
      }
      else{
        return menuButtonStyled
      }
    }
    return returnMenuButtonStyled();
  }

  return (
    <HeaderAppBarStyled>
      <HeaderToolbarStyled
        aria-label={'Nawigacja górna'}
      >
        <HeaderBoxStyled>
          <MenuButtonStyled
            disableRipple={true}
            href={'/'}
          >
            <Box
              p={0}
              aria-label={'Logo miasto Rybnik. Wróć do strony głównej'}
              component='img'
              src={LogoRybnik}
              sx={{
                height: '38px',
                marginTop: '8px',
              }}
            />
          </MenuButtonStyled>
          <Hidden lgDown>
            <HeaderMenuBoxStyled>
              {generateMenuItem('Strona Główna', '/')}
              {generateMenuItem('Ankieta', '/ankieta')}
              {/* {generateMenuItem('Częste pytania', '/czestepytania')} */}
              {generateMenuItem('Przydatna wiedza', '/przydatnawiedza')}
              {generateMenuItem('Dotacje na ciepło', '/dotacjenacieplo')}
              {generateMenuItem('Dyskusja', '/dyskusja')}
            </HeaderMenuBoxStyled>
          </Hidden>
          <Hidden lgUp>
            <IconButton onClick={() => setIsOpen(true)} sx={{ backgroundColor: '#BCD0ED' }}>
              <Box
                aria-label={'Rozwiń menu'}
                component='img'
                src={HamburgerMenu}
              />
            </IconButton>
          </Hidden>
        </HeaderBoxStyled>
      </HeaderToolbarStyled>

      {/* MOBILE MENU */}
      <SwipeableDrawer open={isOpen} anchor='top' onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)} >
        <MenuOpnenedContainer>
          <MenuOpenedBoxStyled>
            <Box
              p={0}
              aria-label={'Logo Rybnika'}
              component='img'
              src={LogoRybnik}
              sx={{
                height: '38px',
                marginTop: '8px',
              }}
            />
            <IconButton onClick={() => setIsOpen(false)} sx={{ backgroundColor: '#BCD0ED' }}>
              <Box
                aria-label={'Zwiń menu'}
                component='img'
                src={ArrowLeft}
              />
            </IconButton>
          </MenuOpenedBoxStyled>
          <MenuOpenedListBoxStyled>
            {generateMenuItem('Strona Główna', '/', true)}
            {generateMenuItem('Ankieta', '/ankieta', true)}
            {/* {generateMenuItem('Częste pytania', '/czestepytania', true)} */}
            {generateMenuItem('Przydatna wiedza', '/przydatnawiedza', true)}
            {generateMenuItem('Dotacje na ciepło', '/dotacjenacieplo', true)}
            {generateMenuItem('Dyskusja', '/dyskusja', true)}
          </MenuOpenedListBoxStyled>
        </MenuOpnenedContainer>
      </SwipeableDrawer>
    </HeaderAppBarStyled>
  )
}