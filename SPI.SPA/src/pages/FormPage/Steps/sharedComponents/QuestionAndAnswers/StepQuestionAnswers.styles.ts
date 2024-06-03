import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { BodySmallItalicText } from "shared/FontBoxes/FontBoxes.styles";

export const StepQuestionAndAnwersBoxStyled = styled(Box)(({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const StepQuestionBoxStyled = styled(Box)(({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
}));

export const StepBelowQuestionBoxStyled = styled(BodySmallItalicText)(({
  marginTop: '20px',
  width: '100%',
}));
