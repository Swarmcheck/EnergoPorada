import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_3: StepI = {
  isNeccesary: true,
  indexOfStep: 3,
  typeOfStep: TypeOfStep.CustomInput,
  question: 'Jak duża jest powierzchnia Twojego domu lub mieszkania?',
  symbolAtEnd: 'm2',
}