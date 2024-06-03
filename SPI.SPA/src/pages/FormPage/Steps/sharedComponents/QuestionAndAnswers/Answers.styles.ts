import { styled } from "@mui/material/styles";
import { theme } from "shared/breakpointsTheme/styles";
import { BodySmallSemiBoldText } from "shared/FontBoxes/FontBoxes.styles";

export const AnswersBoxStyled = styled(BodySmallSemiBoldText)(({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
 
  [theme.breakpoints.down('md')]: {
    marginBottom: '25%',
  },
}));