import { Box } from "@mui/material"
import React from "react"
import { ProgramBoxBoxStyled, ProgramBoxDescriptionBoxStyled, ProgramBoxTextBoxStyled, ProgramBoxTitleBoxStyled, MoreButtonStyled } from "./ProgramBox.styles"
import { useNavigate } from 'react-router-dom';
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";
import { theme } from "shared/breakpointsTheme/styles";
import { useFooter } from "contexts/Footer/footer";

interface ProgramBoxProps {
  program: ProgramEducationI,
  isOutputPage?: boolean,
  isAlone?: boolean,
  isEducationPage?: boolean,
  hidden?: boolean,
}

export const ProgramBox = (props: ProgramBoxProps) => {
  const {
    program,
    isOutputPage = false,
    isAlone = false,
    isEducationPage = false,
    hidden = false,
  } = props

  let navigate = useNavigate(); 
  const { setReturnToOutput } = useFooter();

  function returnIcon(){
    const smallerIcon = {
      minHeight: '150px',
      maxHeight: '150px',
    }

    const biggerIcon = {
      minHeight: '220px',
      maxHeight: '150px',
    }
  
    const biggestIcon = {
      minHeight: '300px',
      maxHeight: '150px',
      marginRight: '44px',
      marginLeft: '60px',

      [theme.breakpoints.down('md')]: {
        minHeight: '220px',
        maxHeight: '150px',
        marginRight: '0px',
        marginLeft: '0px',
      },
    }

    if(isEducationPage){
      return biggerIcon
    }
    else{
      return isAlone ? biggestIcon : smallerIcon
    }
  }

  function handleClick(program: ProgramEducationI){
    if(isEducationPage){
      setReturnToOutput(true)
    }
    navigate(program.link)
  }  

  return (
    <ProgramBoxBoxStyled
      isOutputPage={isOutputPage}
      isAlone={isAlone}
      isEducationPage={isEducationPage}
      tabIndex={hidden ? -1 : 0}
    >
      <Box sx={{ 
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <Box
          component='img'
          aria-label=""
          src={program.smallerIcon ? program.smallerIcon : program.icon}
          sx={returnIcon()}
        />
        <ProgramBoxTextBoxStyled isAlone={isAlone} isEducationPage={isEducationPage}>
          <ProgramBoxTitleBoxStyled>
            {program.title}
          </ProgramBoxTitleBoxStyled>
          <ProgramBoxDescriptionBoxStyled>
            {program.miniDescription}
          </ProgramBoxDescriptionBoxStyled>
        </ProgramBoxTextBoxStyled>
      </Box>
      <MoreButtonStyled
        onClick={() => handleClick(program)}
        disableRipple={true}
        tabIndex={hidden ? -1 : 0}
        aria-label={program.title + '. Czytaj dalej'}
      >
        Czytaj dalej
      </MoreButtonStyled>
    </ProgramBoxBoxStyled>
  )
}