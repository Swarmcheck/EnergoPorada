import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_24: StepI = {
  indexOfStep: 24,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Czy budynek, w którym mieszkasz, jest podłączony do sieci gazowej lub ciepłowniczej?',
  belowQuestion: 'Zaznacz wszystkie prawdziwe odpowiedzi.',
  answers: [
    'Tak, do sieci gazowej.',
    'Tak, do sieci ciepłowniczej.',
    {answer: 'Nie.', deleteOther: ''},
  ],
}