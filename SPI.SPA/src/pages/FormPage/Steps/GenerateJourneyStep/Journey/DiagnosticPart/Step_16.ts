import { TypeOfStep } from "models/step/answer/answer.model";
import { StepI } from "../../generateStepModel";

export const step_16: StepI = {
  isNeccesary: true,
  indexOfStep: 16,
  typeOfStep: TypeOfStep.SelectOne,
  question: 'Jestem w stanie w sezonie jesienno-zimowym ogrzać swoje mieszkanie w wystarczającym stopniu tak, że każdemu z domowników jest ciepło i mogę/możemy normalnie przyjmować gości.',
  answers: [
    'Zawsze.',
    'Przez większość czasu.',
    'Tylko przez część czasu.',
    'Nigdy.',
  ],
}