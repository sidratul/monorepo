'use client';
import Form, { FormFieldProps, } from '@/components/Form'
import { PasswordInput } from '@/components/inputs/PasswordInput/PasswordInput';
import { TextInput } from '@/components/inputs/TextInput'
import { UserLogin } from '@/types/user.types'
import React from 'react'
import * as yup from 'yup';
import { FC } from 'react';

const loginFields: FormFieldProps<UserLogin> = {
  email: {
    label: 'Email',
    input: TextInput,
    validation: yup.string().email().required(),
  },
  password: {
    label: 'Password',
    input: PasswordInput,
    validation: yup.string().min(6).required(),
  }
}

export interface LoginFormProps {
  onSubmit: (data: UserLogin) => void;
  loading: boolean;
  label?: string;
}

export const LoginForm: FC<LoginFormProps> = ({onSubmit, loading, label}) => {
  return (
    <Form
      loading={loading}
      fields={loginFields}
      submitLabel={label || 'Login'}
      onSubmit={onSubmit}
    />
  )
}
