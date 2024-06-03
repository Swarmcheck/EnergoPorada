import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_6: StepI = {
  isNeccesary: true,
  indexOfStep: 6,
  typeOfStep: TypeOfStep.PlusMinus,
  question: 'Ilu domowników mieszka w Twoim gospodarstwie domowym?',
  belowQuestion: 'Policz również siebie.',
  answers: [' '],
}