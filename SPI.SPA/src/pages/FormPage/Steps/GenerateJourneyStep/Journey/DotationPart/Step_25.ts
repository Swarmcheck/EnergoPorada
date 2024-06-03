import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_25: StepI = {
  indexOfStep: 25,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Czy budynek, w którym mieszkasz, ma możliwość podłączenia do sieci gazowej lub ciepłowniczej?',
  belowQuestion: 'Zaznacz wszystkie prawdziwe odpowiedzi.',
  answers: [
    'Tak, do sieci gazowej.',
    'Tak, do sieci ciepłowniczej.',
    {answer: 'Nie.', deleteOther: ''},
    {answer: 'Nie wiem.', deleteOther: ''},
  ],
}