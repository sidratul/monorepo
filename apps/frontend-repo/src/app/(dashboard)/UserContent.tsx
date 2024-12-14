'use client'
import { useGetUserDetail } from '@/api/users/user.api'
import { Stack, Typography } from '@mui/material';
import React, { createContext, useContext, useState } from 'react'
import { UserContentDetail } from './UserContentDetail';
import { LoadingButton } from '@/components/LoadingButton';

interface UserContentContextProps {
  load: boolean;
}

const UserContentContext = createContext({} as UserContentContextProps);
export const useUserContentContext = () => useContext(UserContentContext);

export const UserContent = () => {
  const [load, setLoad] = useState(false);
  const { mutate, error, isLoading } = useGetUserDetail(load);

  const onClick = () => {
    if (!load) {
      setLoad(true);
    } else {
      mutate();
    }
  }

  return (
    <UserContentContext.Provider
      value={{
        load,
      }}
    >
      <Stack>
        <LoadingButton
          loading={isLoading}
          label='Load Data'
          onClick={onClick}
        />
        {
          error && (
            <Typography color='error'>{error.message}</Typography>
          )
        }
        <UserContentDetail/>
      </Stack>
    </UserContentContext.Provider>
  )
}
