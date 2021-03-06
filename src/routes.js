import { Router } from 'express';
import UserController from './app/Controller/UserController';
import SessionController from './app/Controller/SessionController';
import authMiddleware from './app/middleware/auth';
import RecipientController from './app/Controller/RecipientController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

export default routes;
