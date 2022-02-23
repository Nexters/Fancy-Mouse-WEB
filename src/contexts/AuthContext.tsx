import React, { createContext, ReactNode, useContext, useState } from 'react';

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
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    email: '',
    uid: '',
  });

  return <AuthContext.Provider value={{ userInfo, setUserInfo }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context || context === ({} as AuthContextState)) {
    throw new Error('You need to wrap FolderProvider');
  }
  return context;
};
