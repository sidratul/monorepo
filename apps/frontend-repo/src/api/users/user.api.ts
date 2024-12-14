import { User, UserUpdate } from '@/types/user.types';
import { ApiResponse } from '@repo/data-model/api';
import * as api from '../api';

type UserResponse = ApiResponse<User>;

export const useGetUserDetail = (load?: boolean) => {
  return api.getSwr<UserResponse>(!load ? null : '/api/users/profile');
}

export const updateUser = (data: UserUpdate) => {
  return api.patch<UserResponse, UserUpdate>('/api/users/profile', data);
}
