import { useFooter } from "contexts/Footer/footer";
import { useForm } from "contexts/Form/form";
import React, { useEffect, useRef, useState } from "react"
import { ProgressBarBoxStyled, ProgressBarPercentageTextBoxStyled, ProgressBarProgressLineBoxStyled, ProgressBarFillProgressLineBoxStyled } from "./ProgressBar.styles";

export const ProgressBar = () => {
  const { form, howManyQuestionAnswered } = useForm();
  const { switchProgressBar } = useFooter();
  
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);
  const [widthString, setWidthString] = useState<string>('');
  const readProgresBar = useRef(document.createElement("div"))

  const maxSteps = 42;

  useEffect(() => {
    const currentPerc = Math.round(howManyQuestionAnswered()/maxSteps * 100);
    setCurrentPercentage(currentPerc);
    setWidthString(currentPerc.toString() + '%');
  },[form.answers])

  useEffect(() => {
    readProgresBar.current.focus();
  },[])

  useEffect(() => {
    readProgresBar.current.focus();
  },[switchProgressBar])

  return (
    <ProgressBarBoxStyled>
      <ProgressBarPercentageTextBoxStyled
        aria-label={'pasek postępu wartość' + currentPercentage + "%"}
        tabIndex={0}
        ref={readProgresBar}
      >
        {currentPercentage}%
      </ProgressBarPercentageTextBoxStyled>
      <ProgressBarProgressLineBoxStyled>
        <ProgressBarFillProgressLineBoxStyled
          sx={{ width: widthString }}
        />
      </ProgressBarProgressLineBoxStyled>
    </ProgressBarBoxStyled>
  )
}