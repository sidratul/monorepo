import { User, UserUpdate } from '@/types/user.types';
import * as api from '../api';

interface UserResponse {
  data: User;
}

export const useGetUserDetail = (load?: boolean) => {
  return api.getSwr<UserResponse>(!load ? null : '/api/users/profile');
}

export const updateUser = (data: UserUpdate) => {
  return api.patch<UserResponse, UserUpdate>('/api/users/profile', data);
}
