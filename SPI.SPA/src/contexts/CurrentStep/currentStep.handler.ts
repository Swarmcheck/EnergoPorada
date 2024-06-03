import { StepModel } from 'models/step/step/step.model';
import { adalApiDelete, adalApiGet, adalApiPost, adalApiPut } from '../../framework/helpers/axios.methods';

import { URL_STEP } from '../../shared/navigation/baseUrlHelper';

interface StepToDBModel {
  formId: string,
  indexOfStep: number,
  time: number,
}

export const postStepToDB = async (step: StepModel, formId: string): Promise<StepToDBModel> => {
  const stepToDB:StepToDBModel = {
    formId: formId,
    indexOfStep: step.indexOfStep,
    time: step.time,
  }

  return await adalApiPost<StepToDBModel, StepToDBModel>(URL_STEP, stepToDB)
    .then(response => response.data);
};