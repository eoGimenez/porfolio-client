import { useContext } from 'react';
import { useField } from '../../../hooks/useField';
import ProjectsService from '../../../services/projects.service';
import './EditProject.css';
import { projectsContext } from '../../../context/projects.context';

export default function EditProject({ project }) {
  const title = useField({ type: 'text', field: project.title });
  const description = useField({ type: 'text', field: project.description });
  const secDescription = useField({
    type: 'text',
    field: project.secDescription,
  });
  const urlGit = useField({ type: 'text', field: project.urlGit });
  const technologies = useField({ type: 'text', field: project.technologies });
  const image = useField({ type: 'text', field: project.image });
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);

  const handleEdit = () => {
    projectService
      .editProject(project._id, {
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
    <section className='section__edit'>
      <form className='edit__form' onSubmit={handleEdit}>
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
          <input {...technologies} required />
        </fieldset>
        <fieldset>
          <input {...image} required />
        </fieldset>
        <button className='btnn btn__form'>Actualizar proyecto</button>
      </form>
    </section>
  );
}
