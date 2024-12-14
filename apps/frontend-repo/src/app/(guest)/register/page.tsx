import { RegisterFormSection } from './RegisterFormSection'
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
        Sign Up
      </Typography>
      <Box sx={{ mt: 1, width: '100%' }}>
        <RegisterFormSection />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Link href="/login">
            {"Already have an account? Sign In"}
          </Link>
        </Stack>
      </Box>
    </Card>
  )
}
