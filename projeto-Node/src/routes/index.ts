import { Router } from 'express';
import appointmentsRouter from './appointments.router'
import usersRouter from './users.router'
import sessions from './sessions.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessions);

export default routes;
