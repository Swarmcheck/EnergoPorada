import { Box } from "@mui/material"
import React from "react"
import { EducationBoxBoxStyled, EducationBoxDescriptionBoxStyled, EducationBoxTitleBoxStyled, EducationContextBoxStyled, EducationTextBoxStyled, MoreButtonStyled } from "./EducationBox.styles"
import { useNavigate } from 'react-router-dom';
import { ProgramEducationI } from "pages/DotationAndEducationShared/ProgramEducationI";

interface EducationBoxProps {
  education: ProgramEducationI,
}

export const EducationBox = (props: EducationBoxProps) => {
  const {
    education,
  } = props

  let navigate = useNavigate(); 

  return (
    <EducationBoxBoxStyled tabIndex={0}>
      <Box
      component='img'
        aria-label=""
        src={education.icon}
        sx={{ width: '100%' }}
      />
      <EducationContextBoxStyled>
        <Box>
          <EducationTextBoxStyled>
            <EducationBoxTitleBoxStyled>
              {education.title}
            </EducationBoxTitleBoxStyled>
            <EducationBoxDescriptionBoxStyled>
              {education.miniDescription}
            </EducationBoxDescriptionBoxStyled>
          </EducationTextBoxStyled>
        </Box>
       
        <MoreButtonStyled
          onClick={()=> navigate(education.link)}
          disableRipple={true}
          aria-label={education.title + '. Czytaj dalej'}
        >
          Czytaj dalej
        </MoreButtonStyled>
      </EducationContextBoxStyled>
    </EducationBoxBoxStyled>
  )
}