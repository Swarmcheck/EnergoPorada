import mongoose, { Document, Schema } from 'mongoose';

import { IAnswer, IForm, IFormAttached } from './form.model';

export const FormCollectionName = 'forms';

const FormSchema = new Schema({
  startTime: {
    type: Date,
    required: 'Put startTime',
  },
  endTime: {
    type: Date,
    required: 'Put endTime',
  },
  answers: {
    type: [],
    required: true,
  }
});

export interface IFormDocument extends IForm, Document {}

export const FormCollection = mongoose.model<IFormDocument>(
  FormCollectionName,
  FormSchema
);

export const mapFormToAttachedForm = (
  form: IFormDocument
): IFormAttached => {
  return {
    id: form._id,
    startTime: form.startTime,
    endTime: form.endTime,
    answers: form.answers,
  };
};