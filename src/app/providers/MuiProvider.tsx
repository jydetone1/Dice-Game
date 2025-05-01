'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';
import { theme } from '../ui/theme';

export const MuiProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
