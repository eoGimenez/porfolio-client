import { useContext } from 'react';
import AuthService from '../services/auth.service';
import { AuthContext } from '../context/auth.context';

export function useLogin({ email, password }) {
  const { isAuthenticated, storeToken } = useContext(AuthContext);
  const authService = new AuthService();

  const handleLogin = (e) => {
    e.preventDefault();
    authService
      .login({
        email,
        password,
      })
      .then((response) => {
        storeToken(response.data.authToken);
        isAuthenticated();
      })
      .catch((err) => {
        console.log(err.response.data.messageError);
      });
  };
  return { handleLogin };
}
