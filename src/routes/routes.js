import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../components/layouts/dashboard';
import LogoOnlyLayout from '../components/layouts/LogoOnlyLayout';
//
import Login from '../components/views/login/Login';
import Page404 from '../components/views/Page404';
import Register from '../components/views/Register';
import UserProfile from '../components/views/UserProfile';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/user" replace /> },
        { path: 'user', element: <UserProfile /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <Page404 /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
