import { User, UserList } from './user.types';
import * as userRepo from './user.repository';
import { UserUpdateData } from './user.validation';

export const findAll = (): Promise<UserList> => {
  return userRepo.findAll();
}

export const findById = (id: string, email?: string): Promise<User | undefined> => {
  return userRepo.findById(id);
}

export const findOrCreateUser = async (id: string, email: string): Promise<User> => {
  const user = await findById(id);

  if (user) {
    return user;
  }

  const newUser: User = {
    id,
    name: email,
    email: email,
    address: '',
    phoneNumber: '',
  }

  return createUser(newUser);
}

export const createUser = (user: User): Promise<User> => {
  return userRepo.createUser(user);
}

export const updateUser = (id: string, userUpdateData: UserUpdateData) => {
  return userRepo.updateUser(id, userUpdateData);
}