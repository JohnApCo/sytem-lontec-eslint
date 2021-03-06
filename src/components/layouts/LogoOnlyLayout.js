import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// components
import { blue } from '@mui/material/colors';
import Logo from '../common/Logo';
/* import Logo from '../common/Logo'; */

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0)
  },
  backgroundColor: theme.palette.common.white
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  return (
    <>
      <HeaderStyle>
        <RouterLink to="/">
          <Logo sx={{ color: blue[900] }} />
        </RouterLink>
      </HeaderStyle>
      <Outlet />
    </>
  );
}
