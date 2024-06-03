import { Box } from "@mui/material";
import { TypeOfStep } from "models/step/answer/answer.model";
import React from "react";
import { StepI } from "../../generateStepModel";

export const step_9: StepI = {
  isNeccesary: true,
  indexOfStep: 9,
  typeOfStep: TypeOfStep.CustomInput,
  question: (
    <Box>
      Podaj, proszę, przeciętny <Box sx={{textDecoration: 'underline', display: 'inline'}}>miesięczny</Box> dochód netto całego Twojego gospodarstwa domowego w ubiegłym roku kalendarzowym.
    </Box>
  ),
  belowQuestion: 'Nie musisz obliczać dokładnej średniej co do złotówki, ale postaraj się być rzetelny/a.',
  questionTip: '„Netto” oznacza tzw. dochód na rękę. Uwzględnij każdy dochód, w tym wynagrodzenia za pracę, 500+, emerytury i renty, dochody z działalności gospodarczej czy rolnej, alimenty, zasiłki i stypendia, jeśli tylko nie są zajmowane przez komornika.',
  symbolAtEnd: 'zł',
}