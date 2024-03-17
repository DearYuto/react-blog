import { useAuth } from '@/hooks/auth/useAuth';
import { User } from 'firebase/auth';
import React, { createContext } from 'react';

export const AuthContext = createContext({
  user: null as User | null,
  isLoggedIn: false,
  isLoading: false,
});

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const { user, isLoggedIn, isLoading } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
