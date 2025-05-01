import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TypographyProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface IStyledResultText extends TypographyProps {
  $success?: boolean;
}
export const StyledMainContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
}));

export const StyledDigitContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
}));

export const StyledDigitWrapper = styled(Box)(({ theme }) => ({
  height: '200px',
  width: '320px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'var(--bg-color)',
  marginBottom: theme.spacing(3),
}));

export const StyledRadioButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(5),
}));

export const StyledToastWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(1.25),
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1300,
  minWidth: '320px',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const StyledDiceDigit = styled(Typography)(() => ({
  fontSize: '3rem',
  fontWeight: 300,
}));

export const StyledSliderRangeWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const StyledSliderRange = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledTableContainer = styled(Box)(() => ({
  width: '100%',
}));

export const StyledButtonWrapper = styled(Button)(() => ({
  width: '100%',
}));

export const StyledGridColumn = styled(Grid)(({ theme }) => ({
  borderBottom: '1px solid var(--border-color)',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const StyledGridRow = styled(Grid)(({ theme }) => ({
  borderBottom: '1px solid var(--border-color)',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  alignItems: 'center',
}));

export const StyledEmptyText = styled(Typography)(() => ({
  fontSize: '1rem',
  fontWeight: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledResultText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$success',
})<IStyledResultText>(({ $success }) => ({
  color: $success ? 'green' : 'red',
  fontWeight: 'bold',
}));
