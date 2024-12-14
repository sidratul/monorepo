import { FC } from 'react';
import { LoginForm, LoginFormProps } from './LoginForm';

export const RegisterForm: FC<LoginFormProps> = (props) => {
  return (
    <LoginForm 
      {...props}
      label='Sign Up'
    />
  )
}