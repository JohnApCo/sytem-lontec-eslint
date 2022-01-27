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
  }
}));

// ----------------------------------------------------------------------

export default function Login3() {
  return (
    <RootStyle title="Login | LontecIoT">
      <Card className="card">
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

            {/* <Box sx={{ display: { xs: 'flex', sm: 'none' } }}> */}
            <Box>
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Necesitas una cuenta?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="register">
                  Registrarse
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </RootStyle>
  );
}
