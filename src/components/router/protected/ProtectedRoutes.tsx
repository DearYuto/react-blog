import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  redirectionPath: string;
  role: 'user' | 'no-user';
};

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '@/services/firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import Spinner from '@/components/loading/Spinner';

export default function ProtectedRoutes({ redirectionPath, role }: Props) {
  const auth = getAuth(firebaseApp);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (isLoading) {
    return <Spinner />;
  }

  if (role === 'user') {
    return isLoggedIn ? <Outlet /> : <Navigate to={redirectionPath} />;
  }

  return !isLoggedIn ? <Outlet /> : <Navigate to={redirectionPath} />;
}
