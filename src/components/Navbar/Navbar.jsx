import {Link} from "react-router-dom"

export default function Navbar({ handleNewProject, newProject, setDetails }) {

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<p className='navbar-brand'>About me </p>
				<button
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
				<div className='collapse navbar-collapse displ' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<p className='nav-link' aria-current='page'>
								Home
							</p>
						</li>
						<li className='nav-item'>
							<p
								onClick={() => {
									handleNewProject(!newProject);
								}}
								className='nav-link'
							>
								New Project
							</p>
						</li>
						<li className='nav-item'>
							<p className='nav-link'>Filtrar</p>
						</li>
					</ul>
					<ul className='navbar-nav linkedIn'>
						<li>
							<Link to={"https://www.linkedin.com/in/eogimenez/"} className='nav-link'>LinkedIn</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
