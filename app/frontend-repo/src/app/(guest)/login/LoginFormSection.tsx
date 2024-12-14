'use client';

import { UserLogin } from '@/types/user.types'
import React from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase.config';
import { LoginForm } from '@/components/forms';
import { useEffect } from 'react';
import { show } from '@/components/Toast';
import { login } from '@/app/actions';

export const LoginFormSection = () => {
  const [
    signInWithEmailAndPassword,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  useEffect(()=>{
    if(!error) {
      return;
    }

    show('Invalid account or Incorect password', 'error');
  }, [error]);

  const onSubmit = async (data: UserLogin) => {
    const user = await signInWithEmailAndPassword(data.email, data.password);
    const token = await user?.user.getIdToken();
    if (token) {
      login(token);
    }
  }

  return (
    <LoginForm
      loading={loading}
      onSubmit={onSubmit}
    />
  )
}
