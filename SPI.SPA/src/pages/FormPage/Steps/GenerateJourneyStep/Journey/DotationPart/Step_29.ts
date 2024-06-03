import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_29: StepI = {
  indexOfStep: 29,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy Ty lub ktoś z domowników otrzymuje świadczenie przysługujące osobie bezrobotnej lub świadczy alimenty na rzecz innych osób?',
  answers: [
    'Tak.',
    {answer: 'Nie.', indexOfStepToGoTo: 31},
    {answer: 'Nie wiem.', indexOfStepToGoTo: 31},
  ],
}