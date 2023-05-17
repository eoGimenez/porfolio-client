import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <header className='header'>
      <nav className='navbar navbar-dark navbar-expand-lg nav__custom'>
        <div className='container-fluid '>
          <button
            id='navbar__togg'
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse navbar__display'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='#' className='nav-link linkto__about'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='#' className='nav-link linkto__projects'>
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='#' className='nav-link linkto__about'>
                  About me
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='#' className='nav-link linkto__contact__me'>
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
