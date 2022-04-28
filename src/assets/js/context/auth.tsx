import { createContext, ReactNode } from 'react';
import { useLocalStorage } from 'react-use';

interface User {
  username: string;
}

interface AuthContextType {
  user?: User;
  signIn: (newUser: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => ({}),
  signOut: () => ({}),
});

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider(props: AuthProviderProps): JSX.Element {
  const [user, setUser, removeUser] = useLocalStorage<User>('auth');

  function signIn(username: string, callback: VoidFunction) {
    setUser({
      username,
    });
    callback();
  }

  function signOut(callback: VoidFunction): void {
    removeUser();
    callback();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
      {...props}
    />
  );
}

export type { AuthProviderProps, AuthContextType };
export { AuthContext };
export default AuthProvider;
