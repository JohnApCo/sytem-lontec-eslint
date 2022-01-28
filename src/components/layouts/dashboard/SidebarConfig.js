import { Person, PieChart } from '@mui/icons-material';

// ----------------------------------------------------------------------

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <PieChart />
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: <Person />
  }
];

export default sidebarConfig;
