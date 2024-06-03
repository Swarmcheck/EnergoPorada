import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_26: StepI = {
  indexOfStep: 26,
  typeOfStep: TypeOfStep.YesNo,
  question: 'Czy Twoje mieszkanie ma wyodrębnioną księgę wieczystą?',
  questionTip: 'Księga wieczysta to ogólnodostępny dokument opisujący stan prawny pojedynczej nieruchomości. Znajdziemy w niej dane dotyczące m.in. właściciela, adresu nieruchomości oraz jej powierzchni i przeznaczenia, a także hipotek. Księgi wieczyste są zakładane i prowadzone przez wydziały ksiąg wieczystych w sądach rejonowych.',
  answers: [
    'Tak.',
    'Nie.',
    'Nie wiem.',
  ],
}