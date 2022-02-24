import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getAuth, getRedirectResult, UserCredential } from 'firebase/auth';
import { useRouter } from 'next/router';

interface IUserInfo {
  userName: string;
  email: string;
  uid: string;
}

interface AuthContextState {
  userInfo: IUserInfo;
  setUserInfo: (val: any) => void;
}

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    email: '',
    uid: '',
  });

  useEffect(() => {
    const auth = getAuth();
    const name = window.localStorage.getItem('name');
    if (!name) {
      getRedirectResult(auth)
        .then((result: UserCredential | null) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          if (result) {
            setUserInfo({
              email: result.user.email || '',
              userName: result.user.displayName || '',
              uid: result.user.uid || '',
            });
            window.localStorage.setItem('name', result.user.displayName || '');
            router.push('/');
          } else {
            if (router.pathname !== 'login') router.push('/login');
          }
        })
        .catch((error) => {
          // Handle Errors here.
          console.error(error);
          // ...
        });
    }
  }, []);

  return <AuthContext.Provider value={{ userInfo, setUserInfo }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context || context === ({} as AuthContextState)) {
    throw new Error('You need to wrap FolderProvider');
  }
  return context;
};
