import { Box } from "@mui/material"
import React from "react"
import { BodySmallBoldText } from "shared/FontBoxes/FontBoxes.styles"
import ArrowLeft from '../../public/icons/ArrowLeft.svg'

interface ListItemProps {
  text:string | JSX.Element,
}

export const GenerateListItem = (props:ListItemProps) => {
  const {
    text,
  } = props;

  return(
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '24px',
    }}>
      <Box
        component='img'
        aria-label=""
        src={ArrowLeft}
        sx={{transform: 'rotate(180deg)', marginRight: '12px'}}
      />
      <BodySmallBoldText>
        {text}
      </BodySmallBoldText>
    </Box>
  )
}