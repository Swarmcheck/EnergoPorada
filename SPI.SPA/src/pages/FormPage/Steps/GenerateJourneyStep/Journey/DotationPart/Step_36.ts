import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_36: StepI = {
  indexOfStep: 36,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Czy któraś z wymienionych poniżej sytuacji dotyczy Ciebie lub innego współwłaściciela domu/mieszkania, w którym mieszkasz?',
  belowQuestion: 'Zaznacz wszystkie odpowiedzi prawdziwe w Twoim/Waszym przypadku.',
  answers: [
    'Zaleganie z zapłatą zobowiązań podatkowych wobec miasta (np. podatki lokalne, opłata za wywóz śmieci).',
    'Toczące się wobec mnie lub współwłaściciela domu/mieszkania postępowanie egzekucyjne.',
    {answer: 'Żadna z tych sytuacji nie dotyczy mnie ani innego współwłaściciela domu/mieszkania.', deleteOther: ''},
    {answer: 'Nie wiem.', deleteOther: ''},
  ],
}