export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export type UserUpdate = Omit<User, 'id'>;

export interface UserLogin extends Required<Pick<User, 'email'>> {
  password: string
};