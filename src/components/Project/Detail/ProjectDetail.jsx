import './projectDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectDetail({ project, showDetail, handleClick }) {
  const [beat, setBeat] = useState('fa-brands fa-github fa-xl');
  return (
    <section className='section__detail'>
      <div className='project__container'>
        <div className='project__body'>
          <h3 className='project__title'>{project.title}</h3>
          <div className=' tech__print'>
            {project.technologies.map((tech, i) => (
              <i key={i} className={tech}></i>
            ))}
          </div>
          <p>{project.description}</p>
          <p>{project.secDescription}</p>
        </div>
        <div className='img__container'>
          <img
            src={project.image}
            className='project__img'
            alt={'This is the image of the project :' + project.title}
          />
          <Link
            className='btn link__github'
            to={project.urlGit}
            onMouseEnter={() => setBeat('fa-brands fa-github fa-xl fa-bounce')}
            onMouseLeave={() => setBeat('fa-brands fa-github fa-xl')}
            target='_blank'
          >
            <i className={beat}></i> R e p o
          </Link>
        </div>
      </div>
    </section>
  );
}
