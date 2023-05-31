import './ProjectDetail.css';
import { Link } from 'react-router-dom';

export default function ProjectDetail({ project }) {
  return (
    <section className='section__detail'>
      <div className='project__conteiner'>
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
        <div className='img__conteiner'>
          <img
            src={project.image[0]}
            className='project__img'
            alt={'This is the image of the project :' + project.title}
          />
          <div className='project__links'>
            {project.urlGit &&
              project.urlGit.map((urlGit, i) => (
                <Link
                  key={i}
                  className='btn link__github'
                  to={urlGit.url}
                  target='_blank'
                >
                  {urlGit.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
