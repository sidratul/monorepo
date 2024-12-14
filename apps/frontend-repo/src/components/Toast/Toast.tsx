'use client';
import Alert, { AlertProps } from '@mui/material/Alert'
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar'
import React from 'react';
import { useState } from 'react';
import { FC } from 'react';

type ToastProps = Pick<SnackbarProps, 'autoHideDuration'>;
type Severity = AlertProps['severity'];

interface ToastObject {
  setOpen: ((o: boolean) => void) | null;
  setSeverity: ((s: Severity) => void) | null,
  setMessage: ((s: string) => void) | null;
}

const toastObject: ToastObject = {
  setOpen: null,
  setSeverity: null,
  setMessage: null,
}

export const ToastProvider: FC<ToastProps> = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<Severity>('success');
  const [message, setMessage] = useState<string>('');

  toastObject.setOpen = setOpen;
  toastObject.setSeverity = setSeverity;
  toastObject.setMessage = setMessage;

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export const show = (message: string, serverity?: AlertProps['severity']) => {
  if (!toastObject.setMessage || !toastObject.setOpen || !toastObject.setSeverity) {
    return;
  }

  toastObject.setMessage(message);
  toastObject.setOpen(true);
  toastObject.setSeverity(serverity);
}