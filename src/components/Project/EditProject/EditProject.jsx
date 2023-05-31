import { useState } from 'react';
import { useField } from '../../../hook/useField';
import '../FormProject.css';
import { useEdit } from '../../../hook/useEditProject';
import { useFile } from '../../../hook/useFile';

export default function EditProject({ project }) {
  const title = useField({ type: 'text', field: project.title });
  const description = useField({ type: 'text', field: project.description });
  const secDescription = useField({
    type: 'text',
    field: project.secDescription,
  });
  const urlGit = useField({ type: 'text', field: project.urlGit });
  const [techAux, setTechAux] = useState('');
  const { handleImage, imageAuxil } = useFile();

  const handleTech = (e) => {
    e.preventDefault();
    project.technologies.push(techAux);
    setTechAux('');
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    project.image.push(imageAuxil);
  };

  const { handleEdit } = useEdit({
    projectId: project._id,
    title: title.value,
    description: description.value,
    secDescription: secDescription.value,
    urlGit: urlGit.value,
    technologies: project.technologies,
    image: project.image,
  });
  console.log(urlGit.value)
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
        {project.image.map((image, i) => (
          <fieldset key={i} className='fieldset__image'>
            <p>{image}</p>
            <p
              onClick={() => {
                project.image.splice(i, 1);
              }}
              className='btnn btn__form'
            >
              Delete
            </p>
          </fieldset>
        ))}
        {project.technologies.map((tech, i) => (
          <fieldset key={i} className='fieldset__tech'>
            <p>{tech}</p>
            <p
              onClick={() => {
                project.technologies.splice(i, 1);
              }}
              className='btnn btn__form'
            >
              Delete
            </p>
          </fieldset>
        ))}
        <button className='btnn btn__form'>Actualizar proyecto</button>
      </form>
      <form className='project__form' onSubmit={handleSubmitImage}>
        <h4>Agregar imagen</h4>
        <fieldset>
          <input type='file' onChange={(e) => handleImage(e)} />
        </fieldset>
        <button className='btnn btn__form'>Agregar tecnologia</button>
      </form>
      <form className='project__form' onSubmit={handleTech}>
        <h4>Agregar tecnologia</h4>
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
