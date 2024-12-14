import { Router } from 'express';
import * as userService from './user.service';
import { validate } from '../middlewares/validation.middleware';
import { UserUpdateData, userUpdateValidation } from './user.validation';

export const userRouter = Router();

userRouter.get('/fetch-user-data', async (req, res) => {
  const authUser = res.locals.user;
  const user = await userService.findOrCreateUser(authUser.id, authUser.email);
  res.json(user);
});

userRouter.patch('/update-user-data', validate(userUpdateValidation), async (req, res) => {
  const data = req.body as UserUpdateData;
  const authUser = res.locals.user;
  const user = await userService.updateUser(authUser.id,  data);
  res.json(user)
});