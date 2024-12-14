import React from 'react'
import { LoginFormSection } from './LoginFormSection'
import { Avatar, Box, Card, Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function Login() {
  return (
    <Card
      sx={{
        p: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 3
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box sx={{ mt: 1, width: '100%' }}>
        <LoginFormSection />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Link href="/register">
            {"Don't have an account? Sign Up"}
          </Link>
        </Stack>
      </Box>
    </Card>
  )
}
