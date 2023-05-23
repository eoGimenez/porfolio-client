import './UserAccess.css';
import { AuthContext } from '../../../context/auth.context';
import AuthService from '../../../services/auth.service';
import { useContext, useState } from 'react';
import { useField } from '../../../Hooks/useField';

export default function UserAccess({ handleAPI, userDash }) {
  const authService = new AuthService();
  const userName = useField({ type: 'text' });
  const password = useField({ type: 'password' });
  const passwordRe = useField({ type: 'password' });
  const email = useField({ type: 'email' });
  const ownCode = useField({ type: 'password' });
  const { isAuthenticated, storeToken } = useContext(AuthContext);
  const [registered, setRegistered] = useState(true);

  const handleSignup = (e) => {
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

  const handleLogin = (e) => {
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
  return (
    <>
      {registered && (
        <section className='section__login'>
          <div className='container'>
            <h3 className='login__header'>Ingrese sus credenciales</h3>
            <form className='login__form' onSubmit={handleLogin}>
              <fieldset>
                <input
                  placeholder='e.paramos@ejemplo.com'
                  {...email}
                  required
                />
              </fieldset>
              <fieldset>
                <input placeholder='Password' {...password} required />
              </fieldset>
              <button className='btnn btn__form'>Log in</button>
              <p onClick={() => setRegistered(!registered)}>Registrate!</p>
            </form>
          </div>
        </section>
      )}
      {!registered && (
        <section className='section__signup'>
          <div className='container'>
            <h3 className='signup__header'>Registre su usuario</h3>
            <form className='signup__form' onSubmit={handleSignup}>
              <fieldset>
                <input placeholder='Ej: EvaristoP' {...userName} required />
              </fieldset>
              <fieldset>
                <input
                  placeholder='e.paramos@ejemplo.com'
                  {...email}
                  required
                />
              </fieldset>
              <fieldset>
                <input placeholder='Password' {...password} required />
              </fieldset>
              <fieldset>
                <input
                  placeholder='Confirme su password'
                  {...passwordRe}
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder='Codigo de autorización'
                  {...ownCode}
                  required
                />
              </fieldset>
              <button className='btnn btn__form'>Crear usuario</button>
              <p onClick={() => setRegistered(!registered)}>Tengo usuario!</p>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
