'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#171717',
    },
  },
  typography: {
    fontFamily: 'Geist, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          maxWidth: '100vw',
          overflowX: 'hidden',
        },
        body: {
          backgroundColor: '#ffffff',
          color: '#171717',
          fontFamily: 'Geist, Arial, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '*': {
          boxSizing: 'border-box',
          padding: 0,
          margin: 0,
        },
      },
    },
  },
});
