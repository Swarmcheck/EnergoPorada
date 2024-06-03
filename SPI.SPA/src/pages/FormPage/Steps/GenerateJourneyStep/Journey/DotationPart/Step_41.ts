import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_41: StepI = {
  indexOfStep: 41,
  indexOfStepToGoTo: 200,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy gdyby Twój dom/mieszkanie miało zostać ocieplone lub gdyby wymieniano w nim źródło ciepła, to czy byłbyś/byłabyś w stanie pokryć 10% kosztów termomodernizacji lub wymiany ogrzewania?',
  belowQuestion: '10% kosztów to maksymalnie kwota 5 300 zł.',
  answers: [
    'Tak.',
    'Raczej tak.',
    'Raczej nie.',
    'Nie.',
  ],
}