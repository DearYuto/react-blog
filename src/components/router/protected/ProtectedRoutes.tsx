import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  redirectionPath: string;
  role: 'user' | 'no-user';
};

import Spinner from '@/components/loading/Spinner';
import { useAuth } from '@/hooks/auth/useAuth';

export default function ProtectedRoutes({ redirectionPath, role }: Props) {
  const { isLoading, isLoggedIn } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  if (role === 'user') {
    return isLoggedIn ? <Outlet /> : <Navigate to={redirectionPath} />;
  }

  return !isLoggedIn ? <Outlet /> : <Navigate to={redirectionPath} />;
}
