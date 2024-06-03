import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_39: StepI = {
  indexOfStep: 39,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy Twój roczny dochód netto przekracza kwotę 100 000 zł ?',
  questionTip: '„Netto” oznacza tzw. dochód na rękę. Uwzględnij każdy dochód, w tym wynagrodzenia za pracę, 500+, emerytury i renty, dochody z działalności gospodarczej czy rolnej, alimenty, zasiłki i stypendia.',
  answers: [
    'Tak.',
    'Nie.',
  ],
}