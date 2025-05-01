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
  height: 200,
  width: 320,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
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
  zIndex: theme.zIndex.snackbar,
  minWidth: 320,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const StyledDiceDigit = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: theme.typography.fontWeightLight,
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
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const StyledGridRow = styled(Grid)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  alignItems: 'center',
}));

export const StyledEmptyText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: theme.typography.fontWeightLight,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledResultText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$success',
})<IStyledResultText>(({ $success, theme }) => ({
  color: $success ? theme.palette.success.main : theme.palette.error.main,
  fontWeight: theme.typography.fontWeightBold,
}));
