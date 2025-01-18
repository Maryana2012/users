import express from 'express';
import { signUp } from '../controllers/users-controllers.js';

const usersRouter = express.Router();

usersRouter.post('/signup', signUp); //signup user
// usersRouter.post(); // signin user
// usersRouter.post(); //logout user
// usersRouter.get(); //current user

export default usersRouter;