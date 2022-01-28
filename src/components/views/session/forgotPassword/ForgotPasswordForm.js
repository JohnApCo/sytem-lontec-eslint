import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function ForgotPasswordForm() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required')
  });

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: false });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Correo electrónico"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Reset Password
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
