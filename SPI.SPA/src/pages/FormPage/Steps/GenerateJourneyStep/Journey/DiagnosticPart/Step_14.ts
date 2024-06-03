import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_14: StepI = {
  isNeccesary: true,
  indexOfStep: 14,
  typeOfStep: TypeOfStep.SelectMulti,
  question: 'Czy w ciągu ostatnich 12 miesięcy Twoje gospodarstwo domowe spotkała któraś z poniższych sytuacji?',
  belowQuestion: 'Wybierz wszystkie opcje, które są prawdziwe.',
  answers: [
    'Zaleganie z opłaceniem rachunków za ogrzewanie, prąd, gaz, internet lub wodę.',
    'Pożyczanie pieniędzy od rodziny lub znajomych, aby zapłacić za ogrzewanie, prąd, gaz, internet lub wodę.',
    'Sięganie po oszczędności, aby zapłacić za ogrzewanie, prąd, gaz, internet lub wodę.',
    'Branie pożyczki lub chwilówki, aby zapłacić za ogrzewanie, prąd, gaz, internet lub wodę.',
    'Jeszcze nie spotkały mnie/nas tego rodzaju sytuacje, ale przypuszczam, że coś podobnego wydarzy się w ciągu najbliższego roku.',
    {answer: 'Nie mam(y) takich problemów.', deleteOther: ''},
  ],
}