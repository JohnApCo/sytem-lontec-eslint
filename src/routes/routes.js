import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../components/layouts/dashboard';
import ForgotPassword from '../components/views/ForgotPassword';
//
import Login3 from '../components/views/login/Login3';
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
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login3 />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/404',
      element: <Page404 />
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
