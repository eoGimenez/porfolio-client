import './Nav.css';

export default function Nav() {
  return (
    <header className='header'>
      <nav className='navbar navbar-dark navbar-expand-lg nav__custom'>
        <div className='conteiner-fluid '>
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
                <a
                  href='https://portfolio-eogimenez.netlify.app/'
                  className='nav-link linkto__about'
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#section__project__title'
                  className='nav-link linkto__projects'
                >
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a href='#section__about' className='nav-link linkto__about'>
                  About me
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#section__contact'
                  className='nav-link linkto__contact__me'
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
