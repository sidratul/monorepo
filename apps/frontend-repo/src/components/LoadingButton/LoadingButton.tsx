import { Button, CircularProgress } from '@mui/material'
import type { ButtonProps } from '@mui/material'
import React, { FC } from 'react'

interface LoadingButtonProps extends Pick<ButtonProps, 'onClick' | 'size' > {
  label: string;
  loading: boolean;
}

const loadingSize: Record<NonNullable<ButtonProps['size']>, string> = {
  large: '26.5px',
  medium: '24px',
  small: '20px',
}

export const LoadingButton: FC<LoadingButtonProps> = ({ label, loading, onClick, size='medium' }) => {
  return (
    <Button
      onClick={onClick}
      variant='contained'
      size={size}
      disabled={loading}
    >
    { loading ? (
      <CircularProgress color="secondary" size={loadingSize[size]}/>
    ): (
      <span>{label || 'Submit'}</span> 
    )}
  </Button>
  )
}
