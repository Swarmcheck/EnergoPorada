import { NextButton } from "./Buttons/NextButton/NextButton"
import { ReturnButton } from "./Buttons/ReturnButton/ReturnButton"
import { BottomNavigationBoxStyled, BottomNavigationButtonsBoxStyled, BottomNavigationPaperStyled } from "./BottomNavigation.styles"
import React from "react"

export const BottomNavigationBox = ():JSX.Element => {  
  return (
    <BottomNavigationPaperStyled>
      <BottomNavigationBoxStyled>
        <BottomNavigationButtonsBoxStyled>
          <ReturnButton/>
          <NextButton/>
        </BottomNavigationButtonsBoxStyled>
      </BottomNavigationBoxStyled>
    </BottomNavigationPaperStyled>
  )
}