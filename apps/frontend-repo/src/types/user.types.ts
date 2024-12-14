import { User as UserInterface, UserUpdateData } from '@repo/data-model/users';
export type User = UserInterface;
export type UserUpdate = UserUpdateData;

export interface UserLogin extends Required<Pick<User, 'email'>> {
  password: string
};