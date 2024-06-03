import { Box } from "@mui/material";
import React from "react"
import { BodySmallMediumText } from "shared/FontBoxes/FontBoxes.styles";
import RedExclamationIcon from '../../../../../../public/icons/RedExclamationIcon.svg'
import { SmallerErrorBoxBoxStyled } from "./SmallerError.styles";

interface SmallerErrorProps {
  errorMessage: string
}

export const SmallerError = (props: SmallerErrorProps) => {
  const {
    errorMessage,
  } = props;

  return (
      <SmallerErrorBoxBoxStyled>
        <Box
          component='img'
          aria-label=""
          src={RedExclamationIcon}
          sx={{
            height: '21.8px',
          }}
          
        />
        <BodySmallMediumText sx={{ marginLeft: '10px' }} tabIndex={0}>
          {errorMessage}
        </BodySmallMediumText>
      </SmallerErrorBoxBoxStyled>
  )
}