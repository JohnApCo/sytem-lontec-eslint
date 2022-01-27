import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Card,
  Stack,
  Link,
  Container,
  Typography,
  Box,
  Grid
} from '@mui/material';
// layouts
import AuthLayout from '../../layouts/AuthLayout';
// components
import Page from '../../common/Page';
import LoginForm from './LoginForm';
import AuthSocial from '../AuthSocial';
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------
const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center'
}));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const IMG = styled('img')(() => ({
  width: '100%'
}));

const RootStyle2 = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    borderRadius: 12,
    margin: '1rem'
  }
}));

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1A2038',
  '& .card': {
    maxWidth: 800,
    borderRadius: 12,
    margin: '1rem'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
  padding: theme.spacing(4, 2),
  '& .card': {
    maxWidth: 800,
    borderRadius: 12,
    margin: '1rem'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(0, 0)
}));

// ----------------------------------------------------------------------

export default function Login2() {
  return (
    <RootStyle>
      <Card className="card">
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <JustifyBox p={4} height="100%">
              <IMG src="/static/illustrations/logo.png" alt="" />
            </JustifyBox>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <ContentBox>
              {/* <Stack sx={{ mb: 5 }}>
                <Typography variant="h4" gutterBottom>
                  Sign in to Minimal
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Enter your details below.
                </Typography>
              </Stack> */}
              {/* <AuthSocial /> */}

              <LoginForm />

              {/* <Box sx={{ display: { xs: 'flex', sm: 'none' } }}> */}
              <Box>
                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                  Don’t have an account?&nbsp;
                  <Link
                    variant="subtitle2"
                    component={RouterLink}
                    to="register"
                  >
                    Get started
                  </Link>
                </Typography>
              </Box>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </RootStyle>
  );
}
