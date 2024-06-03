import express from 'express';

import { formController } from '../controllers/form/form.controller';

export const FORM_URL = '/form';

export const setupFormRoutes = (app: express.Express): void => {
  // path '/form' route GET for form
  app.route(FORM_URL)
    .post(formController.postForm)

  // Examples
  // app.route('/tasks/:taskId')
  // .get(todoList.read_a_task)
  // .put(todoList.update_a_task)
  // .delete(todoList.delete_a_task);
};