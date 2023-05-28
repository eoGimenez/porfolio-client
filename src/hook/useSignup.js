import { useContext } from 'react';
import AuthService from '../services/auth.service';
import { AuthContext } from '../context/auth.context';

export function useSignup({ email, password, passwordRe, userName, ownCode }) {
  const { isAuthenticated, storeToken } = useContext(AuthContext);
  const authService = new AuthService();
  const handleSignup = () => {
    authService
      .signUp({
        email,
        password,
        passwordRe,
        userName,
        ownCode,
      })
      .then((response) => response)
      .catch((err) => {
        console.log(err.response.data.messageError);
      });
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

  return { handleSignup };
}
