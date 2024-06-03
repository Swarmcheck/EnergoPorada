import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_2: StepI = {
  isNeccesary: true,
  indexOfStep: 2,
  typeOfStep: TypeOfStep.OneWithInput,
  question: 'W jakiego rodzaju budynku mieszkasz?',
  specialChars: true,
  answers: [
    'Blok mieszkalny.',
    'Dom wolnostojący (jednorodzinny lub „bliźniak”).',
    'Dom w zabudowie szeregowej.',
    'Familok.',
    'Kamienica.',
    {answer: '', isCustomInput: true},
  ],
}