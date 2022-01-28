import { Link as RouterLink } from 'react-router-dom';
// material
import { Stack, Link, Typography, Box, Grid } from '@mui/material';
// components
import RegisterForm from './RegisterForm';
/* import AuthSocial from '../../AuthSocial'; */
import Logo2 from '../../../common/Logo2';
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <AuthWrapper title="Register | LontecIoT">
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
                Crear una cuenta
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Free forever. No credit card needed.
              </Typography>
            </Stack>
            {/* <AuthSocial /> */}

            <RegisterForm />

            <Box>
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Ya tienes una cuenta?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="/login">
                  Inicia sesión
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AuthCardWrapper>
    </AuthWrapper>
  );
}
