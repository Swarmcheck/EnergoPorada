export enum TypeOfStep {
  SelectOne = 'SelectOne',
  PlusMinus = 'PlusMinus',
  YesNo = 'YesNo',
  SelectMulti = 'SelectMulti',
  CustomInput = 'CustomInput',
  SelectList = 'SelectList',
  MultiWithInput = 'MultiWithInput',
  OneWithInput = 'OneWithInput',
}

export interface Answer {
  indexOfStep: number,
  typeOfStep: TypeOfStep,
  answer: string,
  indexOfStepToGoTo: number,
  value?: number | null,
  answerTip?: string,
  deleteOther?: string | null,
  isCustomInput?: boolean,
}

export const defaultAnswer: Answer = {
  indexOfStep: 42,
  typeOfStep: TypeOfStep.SelectOne,
  answer: '',
  indexOfStepToGoTo: 1,
  deleteOther: null,
  value: 0,
}