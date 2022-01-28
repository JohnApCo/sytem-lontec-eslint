import { Link as RouterLink } from 'react-router-dom';
// material
import { Stack, Link, Typography, Box, Grid } from '@mui/material';
// components
import ForgotPasswordForm from './ForgotPasswordForm';
/* import AuthSocial from '../../AuthSocial'; */
import Logo2 from '../../../common/Logo2';
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';

// ----------------------------------------------------------------------

export default function ForgotPassword() {
  return (
    <AuthWrapper title="ForgotPassword | LontecIoT">
      <AuthCardWrapper>
        <Grid container direction="column">
          <Grid
            sx={{ mb: 2 }}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Logo2 />
          </Grid>
          <Grid>
            <Stack
              sx={{ mb: 3 }}
              alignItems="center"
              justifyContent="center"
              /* spacing={1} */
            >
              <Typography variant="h4" gutterBottom>
                Forgot your password?
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </Typography>
            </Stack>
            {/* <AuthSocial /> */}

            <ForgotPasswordForm />

            <Box>
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                <Link variant="subtitle2" component={RouterLink} to="/login">
                  Atrás
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AuthCardWrapper>
    </AuthWrapper>
  );
}
