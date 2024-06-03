import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_4: StepI = {
  isNeccesary: true,
  indexOfStep: 4,
  typeOfStep: TypeOfStep.SelectList,
  question: 'Kiedy wybudowano dom lub mieszkanie, w którym mieszkasz?',
  answers: [
    'W latach od 2011 do roku bieżącego.',
    'W latach 2001-2010.',
    'W latach 1991-2000.',
    'W latach 1981-1990.',
    'W latach 1971-1980.',
    'W latach 1961-1970.',
    'W latach 1946-1960.',
    'Przed rokiem 1945.',
    'Nie wiem.',
  ],
}