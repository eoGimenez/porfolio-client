import { Link } from 'react-router-dom';
import './projectCard.css';
import { useState } from 'react';

export default function ProjectCard({ project, handleClick, showDetail }) {
  const [bounce, setBounce] = useState('fa-brands fa-github fa-lg');
  return (
    <section className='card__section'>
      {/* {!showDetail && ( */}
        <div className='card__container'>
          <img
            className='card__img'
            src={project.image}
            alt={'Imagen representativa del proyecto' + project.title}
          />
          <div
            className='card__project'
            onClick={() => {
              handleClick(!showDetail, project);
            }}
          >
            <h3 className='card__title'>{project.title}</h3>
            <div className='card__techs'>
              {project.technologies.map((tech, i) => (
                <i key={i} className={tech}></i>
              ))}
            </div>
            <p className='card__intro'>{project.description}</p>
          </div>
          {/* <div className='link__container'> */}
            <Link
              className='btn link__github'
              to={project.urlGit}
              onMouseEnter={() => {
                setBounce('fa-brands fa-github fa-xl fa-bounce');
              }}
              onMouseLeave={() => setBounce('fa-brands fa-github fa-xl')}
              target='_blank'
            >
              <i className={bounce}></i> R e p o
            </Link>
          {/* </div> */}
        </div>
      {/* )} */}
    </section>
  );
}
