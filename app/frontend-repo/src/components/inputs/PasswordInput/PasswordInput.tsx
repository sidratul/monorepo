import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'
import { InputProps } from '@/components/Form';

export interface PasswordInputProps extends Pick<TextFieldProps, 'label' | 'defaultValue' | 'error' | 'placeholder' | 'value'> {
  readOnly: true;
  onChange: (val: string) => void;
}

export const PasswordInput = (props: PasswordInputProps & InputProps<string>) => {
  const [showPassword, setShowPassword] = useState(false);
  const {readOnly, onChange, ...others} = props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...others}
      type={showPassword ? 'text' : 'password'}
      slotProps={{
        input: {
          readOnly: readOnly,
          endAdornment:
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        }
      }
      variant='outlined'
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  )
}
