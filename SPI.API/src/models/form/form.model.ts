import { IBaseModelAttached } from '../../models/abstraction/base.interface';

export interface IAnswer {
  indexOfStep: number,
  answer: string,
  value?: number | null,
}

export interface IForm {
  startTime: Date,
  endTime: Date,
  answers: [IAnswer],
}

export type IFormAttached = IForm & IBaseModelAttached;