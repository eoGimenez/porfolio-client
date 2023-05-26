import { useContext, useState } from 'react';
import { useField } from '../../../hooks/useField';
import ProjectsService from '../../../services/projects.service';
import '../FormProject.css';
import { projectsContext } from '../../../context/projects.context';

export default function NewProject() {
  const title = useField({ type: 'text', field: '' });
  const description = useField({ type: 'text', field: '' });
  const secDescription = useField({ type: 'text', field: '' });
  const urlGit = useField({ type: 'text', field: '' });
  const image = useField({ type: 'text', field: '' });
  const [technologies, setTechnologies] = useState([]);
  const [techAux, setTechAux] = useState('');
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);

  const handleTech = (e) => {
    e.preventDefault();
    setTechnologies([...technologies, techAux]);
    setTechAux('');
  };

  const handleProject = () => {
    projectService
      .addProject({
        title: title.value,
        description: description.value,
        secDescription: secDescription.value,
        urlGit: urlGit.value,
        technologies: technologies.value,
        image: image.value,
        // ownCode: 'm4n0n3gr4',
      })
      .then((result) => {
        getProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className='section__project'>
      <form className='project__form' onSubmit={handleProject}>
        <fieldset>
          <input {...title} required placeholder='Título proyecto' />
        </fieldset>
        <fieldset>
          <textarea {...description} required placeholder='Descripción' />
        </fieldset>
        <fieldset>
          <textarea
            {...secDescription}
            required
            placeholder='Segundo parrafo descripción'
          />
        </fieldset>
        <fieldset>
          <input {...urlGit} required placeholder='URL repositorio' />
        </fieldset>
        <fieldset>
          <input {...image} required placeholder='Seleccione una imagen' />
        </fieldset>
        {technologies &&
          technologies.map((tech, i) => (
            <fieldset key={i} className='fieldset__tech'>
              <p>{tech}</p>
              <p
                onClick={() => {
                  technologies.splice(i, 1);
                  setTechnologies([...technologies]);
                }}
                className='btnn btn__form'
              >
                delete
              </p>
            </fieldset>
          ))}
        <button className='btnn btn__form'>Crear proyecto</button>
      </form>
      <form className='project__form' onSubmit={handleTech}>
        <fieldset>
          <input
            type='text'
            value={techAux}
            onChange={(e) => setTechAux(e.target.value)}
          />
        </fieldset>
        <button className='btnn btn__form'>Agregar tecnologia</button>
      </form>
    </section>
  );
}
