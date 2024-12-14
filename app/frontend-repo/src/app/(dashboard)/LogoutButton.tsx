'use client'
import { logout } from '@/app/actions';
import { Button } from '@mui/material';
 
export function LogoutButton() {
  return (
    <Button 
      variant="text" 
      color="inherit"
      onClick={() => logout()}
    >Logout</Button>
  )
}

