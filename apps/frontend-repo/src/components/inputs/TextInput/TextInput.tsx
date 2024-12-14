import { InputProps } from '@/components/Form';
import TextField, { TextFieldProps } from '@mui/material/TextField'
import React from 'react'

export interface TextInputProps extends Pick<TextFieldProps, 'label' | 'defaultValue' | 'error' | 'placeholder' | 'value'> {
  readOnly: true;
  onChange: (val: string) => void;
}

export const TextInput = (props: TextInputProps & InputProps<string>) => {
  const {readOnly, onChange, ...others} = props;
  
  return (
    <TextField
      {...others}
      slotProps={{
        input: {
          readOnly: readOnly
        }
      }}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      variant='outlined'
    />
  )
}
