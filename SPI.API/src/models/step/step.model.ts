import { IBaseModelAttached } from '../../models/abstraction/base.interface';

export interface StepModel {
  formId: string,
  indexOfStep: number,
  time: number,
}

export type IStepModelAttached = StepModel & IBaseModelAttached;