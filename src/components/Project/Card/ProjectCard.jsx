import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { useEffect, useState } from 'react';

export default function ProjectCard({
  project,
  handleClick,
  showDetail,
  index,
}) {
  const [side, setSide] = useState('');
  const [links, setLinks] = useState('');

  useEffect(() => {
    index % 2 === 0 ? setSide('left__side') : setSide('rigth__side');
  }, []);

  const handleLinks = () => {
    links ? setLinks('') : setLinks(' active');
  };

  return (
    <section className='card__section'>
      {!showDetail && (
        <div className={'card__conteiner ' + side}>
          <p
            className='fa-solid fa-ellipsis-vertical fa-2xl'
            onClick={handleLinks}
          ></p>
          <div className='img__container'>
            {project.image.map((image, i) => (
              <img
                key={i}
                className='card__img'
                src={image}
                alt={'Imagen representativa del proyecto' + project.title}
              />
            ))}
          </div>
          <div className='card__project'>
            <h3 className='card__title'>{project.title}</h3>
            <div className='card__techs'>
              {project.technologies.map((tech, i) => (
                <i key={i} className={tech}></i>
              ))}
            </div>
            <p
              className='card__intro'
              onClick={() => {
                handleClick(!showDetail, project);
              }}
            >
              {project.description}
            </p>
          </div>

          <div className={'links__container' + links}>
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
      )}
    </section>
  );
}
