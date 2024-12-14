'use client';
import Form, { FormFieldProps } from '@/components/Form'
import { TextInput } from '@/components/inputs/TextInput'
import { UserUpdate } from '@/types/user.types'
import React, { useState } from 'react'
import * as yup from 'yup';
import { useUserContentContext } from './UserContent';
import { updateUser, useGetUserDetail } from '@/api/users/user.api';
import { Typography } from '@mui/material';
import { show } from '@/components/Toast';

export interface LoginFormProps {
  onSubmit: (data: UserUpdate) => void;
  loading: boolean;
  label?: string;
}

export const UserUpdateForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { load } = useUserContentContext();
  const { data, mutate } = useGetUserDetail(load);

  const onSubmit = async (updateData: UserUpdate) => {
    setLoading(true);
    setError('');
    try {
      const res = await updateUser(updateData);
      mutate(res, { revalidate: false});
      show('Profile updated!', 'success');
    } catch(err){
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Typography color='primary' variant='h5'>Update Profile</Typography>
      {error && (
        <Typography color='error'>{error}</Typography>
      )}
      <Form
        loading={loading}
        fields={userFields}
        submitLabel={'Update'}
        data={data?.data || {} as UserUpdate}
        onSubmit={onSubmit}
      />
    </>
  )
}

const userFields: FormFieldProps<UserUpdate> = {
  name: {
    label: 'Name',
    input: TextInput,
    validation: yup.string().required(),
  },
  email: {
    label: 'Email',
    input: TextInput,
    validation: yup.string().required(),
    props: {
      readOnly: true,
    }
  },
  phoneNumber: {
    label: 'Phone',
    input: TextInput,
    validation: yup.string().min(7).max(18),
  },
  address: {
    label: 'address',
    input: TextInput,
    validation: yup.string(),
  },
}