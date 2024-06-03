import { Answer, defaultAnswer } from "./step/answer/answer.model";

export interface FormModel {
  id: string,
  answers: Array<Answer>,
  startTime: Date,
  endTime?: Date,
}

export const defaultForm: FormModel = {
  id: '',
  answers: [defaultAnswer],
  startTime: new Date(),
}