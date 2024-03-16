import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  redirectionPath: string;
  redirectionCondition: boolean;
};

export default function ProtectedRoutes({ redirectionPath, redirectionCondition }: Props) {
  if (redirectionCondition) {
    return <Navigate to={redirectionPath} />;
  }

  return <Outlet />;
}
