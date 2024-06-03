import { Answer, defaultAnswer } from "./answer.model";

export interface AnswerPlusMinus extends Answer {
  plusMinusLimit: number,
  value: number | null,
}

export const defaultAnswerPlusMinus: AnswerPlusMinus= {
  ...defaultAnswer,
  value: null,
  plusMinusLimit: 0,
}