import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_28: StepI = {
  indexOfStep: 28,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy działalność gospodarcza prowadzona w domu/mieszkaniu, w którym mieszkasz, zajmuje więcej niż 30% tego domu/mieszkania?',
  questionTip: 'Jako prowadzenie działalności gospodarczej należy rozumieć np. wynajem pokoju, najem okazjonalny, przeznaczenie jednego pomieszczenia w mieszkaniu na biuro firmowe lub oddzielnego pokoju na parterze domu na własny sklep, salon fryzjerski, itp.',
  answers: [
    'Tak.',
    'Nie.',
    'Nie wiem.',
  ],
}