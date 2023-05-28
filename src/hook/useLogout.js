import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

export function useLogout() {
  const { deleteToken, isAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    deleteToken();
    isAuthenticated();
  };

  return { handleLogout };
}
