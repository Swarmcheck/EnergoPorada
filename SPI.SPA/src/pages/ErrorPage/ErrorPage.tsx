import { Box } from "@mui/material"
import { useFooter } from "contexts/Footer/footer"
import { PageEnum } from "contexts/Footer/Page.enum"
import React, { useEffect } from "react"
import { BodySmallBoldText, H1Text, TitleBoldText } from "shared/FontBoxes/FontBoxes.styles"
import { ErrorPageBoxStyled, ErrorPageImageBoxStyled, ErrorPageMainTextStyled, ErrorPageSubMainTextStyled, ErrorPageTextBoxStyled } from "./ErrorPage.styles"
import ErrorMonitorIcon from "../../public/icons/ErrorMonitorIcon.svg"
import { GenerateListItem } from "pages/DotationAndEducationShared/GenerateListItem"
import { theme } from "shared/breakpointsTheme/styles"

export const ErrorPage = ():JSX.Element => {
  const { setCurrentPage } = useFooter();

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.ErrorPage)
  },[])

  function returnLink(text: string, link: string){
    return <BodySmallBoldText tabIndex={0}>
    <a className={'word-wrap'}
      rel="noreferrer"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  </BodySmallBoldText>
  }

  const links=[
  (returnLink('Strona główna', '/')),
  (returnLink('Ankieta', '/ankieta')),
  (returnLink('Przydatna wiedza', '/przydatnawiedza')),
  (returnLink('Dotacje na ciepło', '/dotacjenacieplo')),
  (returnLink('Dyskusja', '/dyskusja')),
  ];

  const imgStyle = {
    width: '80%',
    height: 'auto',

    [theme.breakpoints.down('xs')]: {
      width: '0px',
      height: '0px',
    },

    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '-35%',
      width: '90%',
    },

    [theme.breakpoints.up('md')]: {
      marginBottom: '-35%',
      width: '80%',
    },

    [theme.breakpoints.up('lg')]: {
      marginBottom: '-55%',
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: '-55%',
    },
  }

  return (
    <ErrorPageBoxStyled>
      <ErrorPageTextBoxStyled>
        <ErrorPageMainTextStyled>
          404
        </ErrorPageMainTextStyled>
        <ErrorPageSubMainTextStyled>
          Przepraszamy, nie możemy znaleźć strony, której szukasz
        </ErrorPageSubMainTextStyled>
        <TitleBoldText sx={{marginTop: '35px'}}>
          Tu garść przydatnych linków:
        </TitleBoldText>
        <Box sx={{marginTop: '25px'}}>
          {links.map(l => <GenerateListItem text={l}/>)}
        </Box>
      </ErrorPageTextBoxStyled>
      <ErrorPageImageBoxStyled>
        <Box
          component='img'
          aria-label=""
          src={ErrorMonitorIcon}
          sx={imgStyle}
        />
      </ErrorPageImageBoxStyled>
    </ErrorPageBoxStyled>
  )
}
