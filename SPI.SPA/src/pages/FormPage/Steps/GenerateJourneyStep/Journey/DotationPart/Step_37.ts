import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_37: StepI = {
  indexOfStep: 37,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Czy Ty lub inny współwłaściciel domu/mieszkania prowadzi działalność gospodarczą?',
  belowQuestion: 'Zaznacz wszystkie odpowiedzi prawdziwe w Twoim/Waszym przypadku.',
  answers: [
    'Tak, ja prowadzę działalność gospodarczą.',
    'Tak, inny współwłaściciel domu/mieszkania prowadzi działalność gospodarczą.',
    {answer: 'Nie.', indexOfStepToGoTo: 39, deleteOther: ''},
  ],
}