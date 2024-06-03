import { stepController } from '../controllers/step/step.controller';
import express from 'express';

export const STEP_URL = '/step';

export const setupStepRoutes = (app: express.Express): void => {
  // path '/step' route GET for step
  app.route(STEP_URL)
    .post(stepController.postStep)
};