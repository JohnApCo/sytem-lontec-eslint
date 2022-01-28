import { Card, styled } from '@mui/material';

const AuthCardWrapper = styled(Card)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    maxWidth: 400
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    maxWidth: 475
  }
}));

export default AuthCardWrapper;
