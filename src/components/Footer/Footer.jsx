import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='footer__container'>
        <div className='social__col'>
          <p className='footer__heading'>Redes</p>
          <ul className='social__links'>
            <li>
              <Link
                className='link footer__link'
                to='https://drive.google.com/flie/d/1tTCVzxgUsEMN4EIkMvtSrAdNZ2vAXoCJ/view?usp=share_link'
                target='_blank'
              >
                Curriculum vitae
              </Link>
            </li>
            <li>
              <Link
                className='link footer__link'
                to='https://www.linkedin.com/in/eogimenez/'
                target='_blank'
              >
                Perfli LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className='link footer__link'
                to='https://github.com/eoGimenez'
                target='_blank'
              >
                Perfli GitHub
              </Link>
            </li>
          </ul>
        </div>
        <div className='contacto__col'>
          <p className='footer__heading'>Información</p>
          <address className='personal__info'>
            <p>Barcelona, Barcelona, España</p>
            <p>
              <Link className='link' to='tel:622 80 80 43'>
                622 80 80 43
              </Link>
            </p>
            <p>
              <Link className='link' to='malito:e.o.gimenez@gmali.com'>
                e.o.gimenez@gmali.com
              </Link>
            </p>
          </address>
        </div>
        <div className='admin__col'>
          <p className='footer__heading'>Back-end</p>
          <ul className='admin__links'>
            <li>
              <Link className='link' to='#'>
                Panel API
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
