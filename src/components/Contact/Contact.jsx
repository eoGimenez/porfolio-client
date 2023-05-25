import './Contact.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function ContactMe() {
  const refForm = useRef();
  const [bounce, setBounce] = useState({ github: '', linkedin: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, refForm.current, publicKey)
      .then((result) => {
        return { status: result.status, text: result.text };
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id='section__contact'>
      <div className='contact__links__container'>
        <Link
          className='link__my__github'
          to='https://github.com/eoGimenez'
          onMouseEnter={() => {
            setBounce({ ...bounce, github: ' fa-bounce' });
          }}
          onMouseLeave={() => setBounce({ ...bounce, github: ' ' })}
          target='_blank'
        >
          <i className={'fa-brands fa-github fa-xl' + bounce.github}></i>
        </Link>
        <Link
          className='link__linkedin'
          to='https://www.linkedin.com/in/eogimenez/'
          onMouseEnter={() => {
            setBounce({ ...bounce, linkedin: ' fa-bounce' });
          }}
          onMouseLeave={() => setBounce({ ...bounce, linkedin: ' ' })}
          target='_blank'
        >
          <i className={'fa-brands fa-linkedin fa-lg' + bounce.linkedin}></i>{' '}
        </Link>
      </div>
      <h3 className='contact__title'>Escríbeme !</h3>
      <form
        className='contact__form'
        method='POST'
        ref={refForm}
        onSubmit={handleSubmit}
      >
        <fieldset>
          {/* <label>Nombre:</label> */}
          <input
            name='fromName'
            type='text'
            placeholder='Ej: Evaristo Páramos'
            required
          />
        </fieldset>
        <fieldset>
          {/* <label>Email:</label> */}
          <input
            name='fromEmail'
            type='email'
            placeholder='e.paramos@ejemplo.com'
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            name='message'
            type='text'
            placeholder='Escriba el mensaje aquí..'
            required
          />
        </fieldset>

        <br />
        <button className='btnn btn__form'>Send email</button>
      </form>
    </section>
  );
}
