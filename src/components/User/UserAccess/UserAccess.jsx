import './UserAccess.css';
import { useField } from '../../../Hooks/useField';
import { useLogin } from '../../../Hooks/useLogin';
import { useSignup } from '../../../Hooks/useSignup';
import { useState } from 'react';

export default function UserAccess() {
  const userName = useField({ type: 'text' });
  const password = useField({ type: 'password' });
  const passwordRe = useField({ type: 'password' });
  const email = useField({ type: 'email' });
  const ownCode = useField({ type: 'password' });
  const [registered, setRegistered] = useState(true);
  const { handleLogin } = useLogin({ email, password });
  const { handleSignup } = useSignup({
    email,
    password,
    passwordRe,
    userName,
    ownCode,
  });

  return (
    <>
      {registered && (
        <section className='section__login'>
          <div className='container'>
            <h3 className='login__header'>Ingrese sus credenciales</h3>
            <form
              className='login__form'
              onSubmit={() => handleLogin({ email, password })}
            >
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
            <form
              className='signup__form'
              onSubmit={() =>
                handleSignup({ email, password, passwordRe, userName, ownCode })
              }
            >
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
