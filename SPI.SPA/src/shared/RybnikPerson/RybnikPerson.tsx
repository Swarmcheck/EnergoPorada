import { Box } from "@mui/material"
import React from "react";
import { useFooter } from "contexts/Footer/footer";
import Ludzik_Kontekstowy from '../../public/pictures/Ludzik_Kontekstowy.svg';
import Ludzik_Edukacyjny from '../../public/pictures/Ludzik_Edukacyjny.svg';
import { RybnikPersonBoxStyled, RybnikPersonImageBoxStyled, RybnikPersonInsideBoxStyled } from "./RybnikPerson.styles";
import { theme } from "shared/breakpointsTheme/styles";
import { PageEnum } from "contexts/Footer/Page.enum";

export const RybnikPerson = (): JSX.Element => {
  const { currentPage } = useFooter();
  const isArticleOfProgram = ['/przydatnawiedza/', '/dotacjenacieplo/'].includes(currentPage);
  const displayPerson = ['/', '/cheerup', '/ego', '/przydatnawiedza/', '/dotacjenacieplo/'].includes(currentPage);
  const isFixed = ['/', '/przydatnawiedza/', '/dotacjenacieplo/'].includes(currentPage);

  const imgStyle = {
    width: '80%',
    height: 'auto',

    [theme.breakpoints.down('xs')]: {
      width: '0px',
      height: '0px',
    },

    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '-35%',
      // marginBottom: '-75%',
      width: '90%',

      ...(currentPage === PageEnum.EGO && {
        marginBottom: '12%',
        width: '80%'
      }),

      ...(currentPage === PageEnum.Cheerup && {
        marginBottom: '-60%'
      }),

      ...(isArticleOfProgram && {
        width: '0px',
        height: '0px',
      })
    },

    [theme.breakpoints.up('md')]: {

      marginBottom: '-35%',
      width: '80%',

      ...(currentPage === PageEnum.EGO && {
        marginBottom: '-20%'
      }),

      ...(currentPage === PageEnum.Cheerup && {
        marginBottom: '-60%'
      }),

      ...(isArticleOfProgram && {
        marginBottom: '-40%',
      })
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: '-55%',

      ...(currentPage === PageEnum.EGO && {
        marginBottom: '-25%'
      }),
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: '-55%',

      ...(currentPage === PageEnum.EGO && {
        marginBottom: '-35%'
      }),
    },

    // for person on tablet with high resolution
    // (-webkit-min-device-pixel-ratio:2) - fory @media if resolution won't work on Safari 
    '@media (max-width: 900px) and (min-resolution: 120dpi)': {
      marginBottom: '35%',
      width: '80%',
    },

    '@media (min-width: 1024px) and (min-resolution: 120dpi)': {
      marginBottom: '-52%',
      width: '80%',

      ...(currentPage === PageEnum.EGO && {
        marginBottom: '12%',
      }),

      ...(currentPage === PageEnum.Cheerup && {
        marginBottom: '-60%'
      }),

    },
  }

  return displayPerson ?
    <RybnikPersonBoxStyled isFixed={isFixed}>
      <RybnikPersonInsideBoxStyled>
        <RybnikPersonImageBoxStyled>
          <Box
            component='img'
            aria-label=""
            src={currentPage === PageEnum.EGO ? Ludzik_Edukacyjny : Ludzik_Kontekstowy}
            sx={imgStyle}
          />
        </RybnikPersonImageBoxStyled>
      </RybnikPersonInsideBoxStyled>
    </RybnikPersonBoxStyled>
    : <></>
}