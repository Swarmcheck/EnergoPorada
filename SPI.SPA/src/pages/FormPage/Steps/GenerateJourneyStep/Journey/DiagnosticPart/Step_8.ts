import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_8: StepI = {
  isNeccesary: true,
  indexOfStep: 8,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy Ty sam/sama lub ktoś z Twoich domowników to rodzic wychowujący samotnie?',
  answers: [
    'Tak',
    'Nie',
  ],
}