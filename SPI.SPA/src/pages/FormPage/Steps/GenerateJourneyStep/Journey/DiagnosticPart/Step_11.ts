import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_11: StepI = {
  isNeccesary: true,
  indexOfStep: 11,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy w ciągu ostatnich 12 miesięcy ktoś z dorosłych domowników przynoszących gospodarstwu przychód wyprowadził się lub zmarł?',
  questionTip: 'Chodzi o dowolny rodzaj przychodu: zarobki, emerytura, renta, przychód z działalności gospodarczej, zasiłek itd.',
  answers: [
    'Tak',
    'Nie',
  ],
}