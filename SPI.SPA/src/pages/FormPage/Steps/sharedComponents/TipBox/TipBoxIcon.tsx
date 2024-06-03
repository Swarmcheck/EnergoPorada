import { Box, ClickAwayListener } from "@mui/material";
import React, { useState, KeyboardEvent, useRef } from 'react';
import { TipBoxBoxStyled } from "./TipBoxIcon.styles";
import InfoIcon from '../../../../../public/icons/InfoIcon.svg';
import { TipBox } from "./TipBox";

interface TipBoxProps {
  text: string,
  toRightSide?: boolean,
  toUpSide?: boolean
}

export const TipBoxIcon = (props: TipBoxProps) => {
  const {
    text,
    toRightSide = false,
    toUpSide = false,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const readTipBox = useRef(document.createElement("div"))

  function keyPressed(event: KeyboardEvent<HTMLImageElement>){
    if(event.key === 'Enter'){
      setIsOpen(!isOpen)

      if(!isOpen){
        readTipBox.current.focus();
      } 
    }
 }

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <TipBoxBoxStyled>
        <Box
          component='img'
          src={InfoIcon}
          sx={{ cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={'. sprawdź dodatkowy opis'}
          onKeyDown={(event: KeyboardEvent<HTMLImageElement>) => keyPressed(event)}
          tabIndex={0}
        />
        {isOpen &&
          <TipBox
            text={text}
            toRightSide={toRightSide}
            toUpSide={toUpSide}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        }
      </TipBoxBoxStyled>
    </ClickAwayListener>
  )
}