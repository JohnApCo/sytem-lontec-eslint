import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Typography, Box, Grid } from '@mui/material';
// components
import Page from '../../common/Page';
import LoginForm from './LoginForm';
import AuthSocial from '../AuthSocial';
import Logo2 from '../../common/Logo2';

// ----------------------------------------------------------------------
const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center'
}));

const ContentBox = styled(Box)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  /* background: 'rgba(0, 0, 0, 0.01)', */
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 2, 2, 2)
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 3, 3, 3)
  }
}));

const IMG = styled('img')(() => ({
  width: '100%'
}));

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1A2038',
  '& .card': {
    /*     maxWidth: 800,
    borderRadius: 12,
    margin: theme.spacing(2, 2) */
    width: '100%',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function Login2() {
  return (
    <RootStyle title="Login | LontecIoT">
      <Card className="card">
        <Grid container direction="column">
          <Grid>
            <JustifyBox p={3} height="100%">
              {/* <IMG src="/static/illustrations/logo.png" alt="" /> */}
              <Logo2 />
            </JustifyBox>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <ContentBox>
              <Stack
                sx={{ mb: 3 }}
                alignItems="center"
                justifyContent="center"
                /* spacing={1} */
              >
                <Typography variant="h4" gutterBottom>
                  Hi, Welcome Back
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Enter your credentials to continue
                </Typography>
              </Stack>
              <AuthSocial />

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
