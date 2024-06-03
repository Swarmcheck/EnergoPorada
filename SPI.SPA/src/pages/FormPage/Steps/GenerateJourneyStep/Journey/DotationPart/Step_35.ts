import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_35: StepI = {
  indexOfStep: 35,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy jesteś właścicielem lub współwłaścicielem domu/mieszkania, w którym mieszkasz?',
  answers: [
    'Tak.',
    {answer: 'Nie.', indexOfStepToGoTo: 200},
  ],
}