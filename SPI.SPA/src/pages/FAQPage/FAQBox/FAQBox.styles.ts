import styled from "@emotion/styled";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { List, ListItemButton } from "@mui/material";
import { BodyLargeMediumText } from "shared/FontBoxes/FontBoxes.styles";

export const FAQBoxListStyled = styled(List)(({
  marginBottom: '57px',
  width: '873px',
  maxWidth: '746px',
}));

export const FAQAnswerBoxStyled = styled(BodyLargeMediumText)(({
  marginTop: '24px',
  paddingBottom: '24px',
}))

export const FAQListItemButtonStyled = styled(ListItemButton)(({
  borderBottom: '1px solid black',
  padding: '0px',

  '&:hover': {
    backgroundColor: 'transparent',
  }
}))

export const FAQExpandLessStyled = styled(ExpandLess)(({
  width: '40px',
  height: '40px'
}))

export const FAQExpandMoreStyled = styled(ExpandMore)(({
  width: '40px',
  height: '40px'
}))