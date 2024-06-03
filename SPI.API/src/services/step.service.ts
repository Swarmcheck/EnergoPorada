import { StepModel, IStepModelAttached } from "../models/step/step.model";
import { StepCollection, mapStepToAttachedStep } from "../models/step/step.schema";

class StepService {
  postStep = async (step: StepModel): Promise<void> => {
    const result = await StepCollection.findOneAndUpdate((
      {formId: step.formId, indexOfStep: step.indexOfStep}),
      step,
      {upsert : true}
    );
  };
}

export const stepService = new StepService();