import { Box } from "@mui/material";
import { TypeOfStep } from "models/step/answer/answer.model";
import React from "react";
import { StepI } from "../../generateStepModel";

export const step_30: StepI = {
  indexOfStep: 30,
  typeOfStep: TypeOfStep.CustomInput,
  question: (
    <Box>
      Wpisz sumę wszystkich świadczeń przysługujących osobom bezrobotnym, które <Box sx={{textDecoration: 'underline', display: 'inline'}}>miesięcznie</Box> otrzymują wszystkie osoby w Twoim gospodarstwie domowym i sumę wszystkich alimentów świadczonych na rzecz innych osób przez Ciebie lub innych domowników.
    </Box>
  ),
  symbolAtEnd: 'zł',
}