import { Box } from "@mui/material";
import { TypeOfStep } from "models/step/answer/answer.model";
import React from "react";
import { H3Text } from "shared/FontBoxes/FontBoxes.styles";
import { StepI } from "../../generateStepModel";

export const step_31: StepI = {
  indexOfStep: 31,
  typeOfStep: TypeOfStep.YesNo,
  question: (<Box sx={{display: 'flex', flexDirection: 'column'}}>
      Czy Ty lub ktoś z domowników otrzymuje, którąś z zapomóg wymienionych poniżej?
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
    </Box>),
  answers: [
    'Tak.',
    {answer: 'Nie.', indexOfStepToGoTo: 33},
    {answer: 'Nie wiem.', indexOfStepToGoTo: 33},
  ],
}