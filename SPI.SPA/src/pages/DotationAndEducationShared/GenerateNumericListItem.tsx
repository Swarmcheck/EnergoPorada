import { Box } from "@mui/material"
import React from "react"
import { BodyLargeMediumText, H3Text } from "shared/FontBoxes/FontBoxes.styles"
import { visuallyHidden } from '@mui/utils';

interface NumericListItemProps {
  number: number,
  text: string | JSX.Element,
}

export const GenerateNumericListItem = (props:NumericListItemProps) => {
  const {
    text,
    number,
  } = props;

  return(
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'row',
      marginTop: '40px',
      marginBottom: '40px',
    }}>
      <H3Text sx={{flex:'none'}}>
        {number + 1}.
      </H3Text>
      <BodyLargeMediumText sx={{ marginLeft: '15.5px' }} tabIndex={0}>
        <Box sx={visuallyHidden}>{number+1}</Box>
        {text}
      </BodyLargeMediumText>
    </Box>
  )
}