import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_42: StepI = {
  isNeccesary: true,
  indexOfStep: 42,
  indexOfStepToGoTo: 1,
  typeOfStep: TypeOfStep.SelectList,
  question: 'Ile masz lat?',
  answers:[
    {answer: 'poniżej 18 lat', indexOfStepToGoTo: 200},
    '18-24 lata',
    '25-29 lat',
    '30-34 lata',
    '35-39 lat',
    '40-49 lat',
    '50-59 lat',
    '60-69 lat',
    '70-79 lat',
    '80 i więcej lat',
  ]
}