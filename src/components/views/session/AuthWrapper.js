import { styled } from '@mui/material';
import Page from '../../common/Page';

const AuthWrapper = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1A2038'
}));

export default AuthWrapper;
