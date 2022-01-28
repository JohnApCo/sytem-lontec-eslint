import { Link as RouterLink } from 'react-router-dom';
// material
import { Stack, Link, Typography, Box, Grid } from '@mui/material';
// components
import LoginForm from './LoginForm';
/* import AuthSocial from '../../AuthSocial'; */
import Logo2 from '../../../common/Logo2';
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <AuthWrapper title="Login | LontecIoT">
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
                Hola de nuevo!
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Ingrese sus credenciales para continuar
              </Typography>
            </Stack>
            {/* <AuthSocial /> */}

            <LoginForm />

            <Box>
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Necesitas una cuenta?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Registrarse
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AuthCardWrapper>
    </AuthWrapper>
  );
}
