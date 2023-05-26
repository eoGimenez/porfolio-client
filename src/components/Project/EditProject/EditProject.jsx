import { useContext, useState } from 'react';
import { useField } from '../../../hook/useField';
import ProjectsService from '../../../services/projects.service';
import '../FormProject.css';
import { projectsContext } from '../../../context/projects.context';

export default function EditProject({ project }) {
  const title = useField({ type: 'text', field: project.title });
  const description = useField({ type: 'text', field: project.description });
  const secDescription = useField({
    type: 'text',
    field: project.secDescription,
  });
  const urlGit = useField({ type: 'text', field: project.urlGit });
  const image = useField({ type: 'text', field: project.image });
  const [techAux, setTechAux] = useState('');
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);

  const handleTech = (e) => {
    e.preventDefault();
    project.technologies.push(techAux);
    setTechAux('');
  };

  const handleEdit = () => {
    projectService
      .editProject(project._id, {
        title: title.value,
        description: description.value,
        secDescription: secDescription.value,
        urlGit: urlGit.value,
        technologies: project.technologies,
        image: image.value,
        // ownCode: 'm4n0n3gr4',
      })
      .then((result) => {
        getProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className='section__edit'>
      <form className='project__form' onSubmit={handleEdit}>
        <fieldset>
          <input {...title} required />
        </fieldset>
        <fieldset>
          <textarea {...description} required />
        </fieldset>
        <fieldset>
          <textarea {...secDescription} required />
        </fieldset>
        <fieldset>
          <input {...urlGit} required />
        </fieldset>
        <fieldset>
          <input {...image} required />
        </fieldset>
        {project.technologies.map((tech, i) => (
          <fieldset key={i} className='fieldset__tech'>
            <p>{tech}</p>
            <p
              onClick={() => {
                project.technologies.splice(i, 1);
              }}
              className='btnn btn__form'
            >
              delete
            </p>
          </fieldset>
        ))}
        <button className='btnn btn__form'>Actualizar proyecto</button>
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
