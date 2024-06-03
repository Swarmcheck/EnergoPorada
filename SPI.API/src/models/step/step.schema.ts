import mongoose, { Document, Schema } from 'mongoose';
import { StepModel, IStepModelAttached } from './step.model';

export const StepsCollectionName = 'steps';

const StepSchema = new Schema({
  formId: {
    type: String,
    required: 'Put formId',
  },
  indexOfStep: {
    type: Number,
    required: 'Put index of step',
  },
  time: {
    type: Number,
    required: 'Put time of step',
  },
});

export interface IStepDocument extends StepModel, Document {}

export const StepCollection = mongoose.model<IStepDocument>(
  StepsCollectionName,
  StepSchema
);

export const mapStepToAttachedStep = (
  step: IStepDocument
): IStepModelAttached => {
  return {
    id: step._id,
    formId: step.formId,
    indexOfStep: step.indexOfStep,
    time: step.time,
  };
};