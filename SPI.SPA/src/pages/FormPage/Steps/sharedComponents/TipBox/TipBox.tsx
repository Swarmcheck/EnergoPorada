import { Box } from "@mui/material";
import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { TipBoxBlackBoxStyled, TipBoxReverseBoxStyled, TipBoxTextBoxStyled } from "./TipBoxIcon.styles";
import CloseIcon from '../../../../../public/icons/CloseIcon.svg';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';

interface TipBoxProps {
  text: string,
  toRightSide?: boolean,
  toUpSide?: boolean,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const TipBox = (props: TipBoxProps) => {
  const {
    text,
    toRightSide = false,
    toUpSide = false,
    isOpen,
    setIsOpen
  } = props;

  function keyPressed(event: KeyboardEvent<HTMLImageElement>){
    if(event.key === 'Enter'){
      setIsOpen(!isOpen)
    }
 }

  return (
    <FocusLock autoFocus returnFocus>
      <TipBoxBlackBoxStyled
        toRightSide={toRightSide}
        toUpSide={toUpSide}
      >
        <TipBoxReverseBoxStyled
          toRightSide={toRightSide}
          toUpSide={toUpSide}
          tabIndex={0}
          aria-label={text}
        >
          <Box
            component='img'
            src={CloseIcon}
            sx={{
              cursor: 'pointer',
              float: 'right',
            }}
            aria-label='. Zamknij dodatkowy opis'
            onClick={() => setIsOpen(false)}
            onKeyDown={(event: KeyboardEvent<HTMLImageElement>) => keyPressed(event)}
            tabIndex={0}
          />
          <TipBoxTextBoxStyled>
            {text}
          </TipBoxTextBoxStyled>
        </TipBoxReverseBoxStyled>
      </TipBoxBlackBoxStyled>
    </FocusLock>
  )
}