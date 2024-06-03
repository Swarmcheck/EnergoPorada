import { Box } from "@mui/material";
import { TypeOfStep } from "models/step/answer/answer.model";
import React from "react";
import { StepI } from "../../generateStepModel";

export const step_10: StepI = {
  isNeccesary: true,
  indexOfStep: 10,
  typeOfStep: TypeOfStep.CustomInput,
  question: (
    <Box>
      Podaj, proszę, wysokość wydatków na energię, które Twoje gospodarstwo domowe poniosło w całym <Box sx={{textDecoration: 'underline', display: 'inline'}}>ubiegłym roku</Box> kalendarzowym.
    </Box>
  ),
  questionTip: 'Wydatki na energię obejmują wszystkie opłaty za energię elektryczną oraz energię potrzebną do ogrzewania pomieszczeń, ogrzewania wody i przygotowywania posiłków, niezależnie od tego, jakich urządzeń i paliw używasz, a więc gaz, węgiel, pellet, ciepło sieciowe itd.',
  symbolAtEnd: 'zł',
}