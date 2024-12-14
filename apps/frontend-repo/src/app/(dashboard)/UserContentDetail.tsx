import { useGetUserDetail } from '@/api/users/user.api';
import React from 'react'
import { useUserContentContext } from './UserContent';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { UserUpdateForm } from './UserUpdateForm';

export const UserContentDetail = () => {
  const theme = useTheme();
  const { load } = useUserContentContext();
  const { data } = useGetUserDetail(load);

  const user = data?.data;
  if(!user) {
    return <></>;
  }

  return (
    <Stack gap={4} sx={{padding: 2}}>
      <Box>
        <Typography variant="caption" color={theme.palette.secondary.dark}>Name:</Typography>
        <Typography color={theme.palette.secondary.dark}>{user.name}</Typography>
        <Typography variant="caption" color="text.secondary">Email:</Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="caption" color="text.secondary">Phone:</Typography>
        <Typography color="text.secondary">{user.phoneNumber || '-'}</Typography>
        <Typography variant="caption" color="text.secondary">Address:</Typography>
        <Typography color="text.secondary">{user.address || '-'}</Typography>
      </Box>

      <UserUpdateForm/>
    </Stack>
  )
}
