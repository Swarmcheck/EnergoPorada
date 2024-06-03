import { Box } from "@mui/material";
import { TypeOfStep } from "models/step/answer/answer.model";
import React from "react";
import { H3Text } from "shared/FontBoxes/FontBoxes.styles";
import { StepI } from "../../generateStepModel";

export const step_32: StepI = {
  indexOfStep: 32,
  typeOfStep: TypeOfStep.CustomInput,
  question: (
    <Box sx={{flexDirection: 'column'}}>
      Wpisz sumę wszystkich zasiłków wymienionych poniżej, które <Box sx={{textDecoration: 'underline', display: 'inline'}}>miesięcznie</Box> otrzymują wszystkie osoby w Twoim gospodarstwie domowym.
      <p/>
      <H3Text>
         - 500 plus,
        <p/>
        - dodatek z tytułu urodzenia dziecka,
        <p/>
        - świadczenie pomocy materialnej dla uczniów,
        <p/>
        - zasiłek okresowy z pomocy społecznej,
        <p/>
        - dodatek pielęgnacyjny,
        <p/>
        - dodatek energetyczny.
      </H3Text>
    </Box>
  ),
  symbolAtEnd: 'zł',
}