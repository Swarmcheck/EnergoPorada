import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_27: StepI = {
  indexOfStep: 27,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy w domu/mieszkaniu, w którym mieszkasz, jest prowadzona działalność gospodarcza?',
  questionTip: 'Jako prowadzenie działalności gospodarczej należy rozumieć np. wynajem pokoju, najem okazjonalny, przeznaczenie jednego pomieszczenia w mieszkaniu na biuro firmowe lub oddzielnego pokoju na parterze domu na własny sklep, salon fryzjerski, itp.',
  answers: [
    'Tak.',
    {answer: 'Nie.', indexOfStepToGoTo: 29},
    {answer: 'Nie wiem.', indexOfStepToGoTo: 29},
  ],
}