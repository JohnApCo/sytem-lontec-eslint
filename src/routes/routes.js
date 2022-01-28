import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../components/layouts/dashboard';
//
import Login from '../components/views/session/login/Login';
import Page404 from '../components/views/Page404';
import Register from '../components/views/session/register/Register';
import UserProfile from '../components/views/UserProfile';
import ForgotPassword from '../components/views/session/forgotPassword/ForgotPassword';

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
      element: <Login />
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
