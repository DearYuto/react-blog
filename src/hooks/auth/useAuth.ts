import { useEffect, useState } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';

import { firebaseApp } from '@/services/firebase/firebaseConfig';

export const useAuth = () => {
  const auth = getAuth(firebaseApp);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setIsLoading(false);
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return { isLoggedIn, isLoading, user };
};
