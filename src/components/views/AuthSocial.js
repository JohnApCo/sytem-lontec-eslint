import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
// material
import { Stack, Button, Divider, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <FaGoogle color="#DF3E30" height={24} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <FaFacebookF color="#1877F2" height={24} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <FaTwitter color="#1C9CEA" height={24} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
