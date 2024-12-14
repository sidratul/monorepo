'use client';

import { UserLogin } from '@/types/user.types'
import React, { useEffect } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';
import { RegisterForm } from '@/components/forms';
import { login } from '@/app/actions';
import { show } from '@/components/Toast';

export const RegisterFormSection = () => {
  const [
    createUserWithEmailAndPassword,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  useEffect(()=>{
    if(!error) {
      return;
    }

    show('Invalid data or email already registered', 'error');
  }, [error]);

  const onSubmit = async (data: UserLogin) => {
    const user = await createUserWithEmailAndPassword(data.email, data.password);
    const token = await user?.user.getIdToken();
    if (token) {
      login(token!);
    }
  }

  return (
    <RegisterForm
      loading={loading}
      onSubmit={onSubmit}
    />
  )
}
