import { Answer, TypeOfStep } from "../answer/answer.model"

export interface StepModel {
  indexOfStep: number,
  indexOfStepToGoTo?: number,
  typeOfStep: TypeOfStep,
  question: string | JSX.Element,
  belowQuestion?: string,
  answers: Array<Answer>,
  time: number,
  symbolAtEnd?: string,
  specialChars?: boolean,
  questionTip?: string,
  isNeccesary: boolean,
}

export const defaultStep: StepModel = {
  indexOfStep: 50,
  indexOfStepToGoTo: 1,
  typeOfStep: TypeOfStep.SelectOne,
  question: '',
  answers: [],
  time: 0,
  isNeccesary: true,
}