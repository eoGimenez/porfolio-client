import './UserAccess.css';
import { useField } from '../../../hooks/useField';
import { useLogin } from '../../../hooks/useLogin';
import { useSignup } from '../../../hooks/useSignup';
import { useState } from 'react';

export default function UserAccess() {
  const userName = useField({ type: 'text', field: '' });
  const password = useField({ type: 'password', field: '' });
  const passwordRe = useField({ type: 'password', field: '' });
  const email = useField({ type: 'email', field: '' });
  const ownCode = useField({ type: 'password', field: '' });
  const [registered, setRegistered] = useState(true);
  const { handleLogin } = useLogin({
    email: email.value,
    password: password.value,
  });
  const { handleSignup } = useSignup({
    email: email.value,
    password: password.value,
    passwordRe: passwordRe.value,
    userName: userName.value,
    ownCode: ownCode.value,
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
