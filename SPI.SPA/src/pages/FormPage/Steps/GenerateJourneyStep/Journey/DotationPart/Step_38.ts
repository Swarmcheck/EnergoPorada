import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_38: StepI = {
  indexOfStep: 38,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Jaka forma opodatkowania dotyczy działalności gospodarczej prowadzonej przez Ciebie lub innego współwłaściciela domu/mieszkania, w którym mieszkasz?',
  belowQuestion: 'Wybierz wszystkie pasujące odpowiedzi.',
  answers: [
    'Podatek według skali podatkowej.',
    'Podatek liniowy według stawki 19%.',
    'Ryczałt od przychodów ewidencjonowanych.',
    'Karta podatkowa.',
    {answer: 'Nie wiem.', deleteOther: ''},
  ],
}