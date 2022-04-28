import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../../context/auth';

function useAuth(): AuthContextType {
  return useContext(AuthContext);
}

export default useAuth;
