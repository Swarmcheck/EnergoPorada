import express from 'express';

import { setupFormRoutes } from './routing-pipelines/form.pipelines';
import { setupStepRoutes } from './routing-pipelines/step.pipelines';

export const setupRoutes = (app: express.Express): void => {
  app.get('/', (req, res) => res.send('Welcome to EnergyCheck API.'));

  setupFormRoutes(app);
  setupStepRoutes(app);
};