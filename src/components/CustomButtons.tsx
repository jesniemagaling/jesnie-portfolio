import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// Primary
export const PrimaryButton = styled((props: ButtonProps) => (
  <Button variant="contained" color="primary" {...props} />
))(() => ({
  borderRadius: '8px',
  backgroundColor: '#242424',
  color: '#ffffff',
  padding: '8px 22px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1a1a1a',
  },
}));

// Secondary (outlined)
export const SecondaryButton = styled((props: ButtonProps) => (
  <Button variant="outlined" color="secondary" {...props} />
))(() => ({
  borderRadius: '8px',
  border: '1px solid #4B4848',
  color: '#ffffff',
  padding: '8px 22px',
  textTransform: 'none',
  '&:hover': {
    border: '1px solid #6b6969',
    backgroundColor: 'rgba(75, 72, 72, 0.1)',
  },
}));
