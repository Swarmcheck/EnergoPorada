import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FAQI } from "../FAQList"
import { FAQAnswerBoxStyled, FAQBoxListStyled, FAQExpandLessStyled, FAQExpandMoreStyled, FAQListItemButtonStyled } from "./FAQBox.styles";
import { TitleBoldText } from 'shared/FontBoxes/FontBoxes.styles';

interface FAQBoxProps {
  faq: FAQI,
}

export const FAQBox = (props:FAQBoxProps) => {
  const {
    faq,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <FAQBoxListStyled>
      <FAQListItemButtonStyled
        disableRipple={true}
        onClick={handleClick}
      >
        <ListItemText>
          <TitleBoldText>
            {faq.question}
          </TitleBoldText>
        </ListItemText>
        {open ? <FAQExpandLessStyled /> : <FAQExpandMoreStyled />}
      </FAQListItemButtonStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <FAQAnswerBoxStyled>
            {faq.answer}
          </FAQAnswerBoxStyled>
        </List>
      </Collapse>
    </FAQBoxListStyled>
  );
}