'use client';

import { FC } from 'react';
import { Alert } from '@mui/material';
import { StyledToastWrapper } from '../../gameStyles';

interface IToast {
  notificationText: string;
  warning?: boolean;
}

const Toast: FC<IToast> = ({ warning, notificationText }) => {
  return (
    <StyledToastWrapper>
      <Alert severity={warning ? 'error' : 'success'} variant='filled'>
        {notificationText}
      </Alert>
    </StyledToastWrapper>
  );
};

export default Toast;
