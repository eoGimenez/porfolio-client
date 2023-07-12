import { useState } from 'react';
import { useField } from '../../../hook/useField';
import '../FormProject.css';
import { useEdit } from '../../../hook/useEditProject';
import { useFile } from '../../../hook/useFile';
import Selector from '../../Uploader/Selector/Selector';
import Loading from '../../Uploader/Loading/Loading';
import Successfull from '../../Uploader/Successfull/Successfull';

export default function EditProject({ project }) {
  const title = useField({ type: 'text', field: project.title });
  const description = useField({ type: 'text', field: project.description });
  const secDescription = useField({
    type: 'text',
    field: project.secDescription,
  });
  const urlGit = useField({ type: 'text', field: project.urlGit });
  const [techAux, setTechAux] = useState('');
  const { image, isLoadingImg, onChange, status, handleDrag, handleDrop } =
    useFile();

  const handleTech = (e) => {
    e.preventDefault();
    project.technologies.push(techAux);
    setTechAux('');
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    project.image.push(image);
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
  console.log(image, isLoadingImg);
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
        {project.urlGit.map((url, i) => (
          <fieldset key={i} className='fieldset__url'>
            <p>{url.label}</p>
            <p
              onClick={() => {
                project.urlGit.splice(i, 1);
              }}
              className='btnn btn__form'
            >
              Delete
            </p>
          </fieldset>
        ))}
        {project.image.map((image, i) => (
          <fieldset key={i} className='fieldset__image'>
            <p className='path__img__parraf'>{i} {image}</p>
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
        <fieldset className='fieldset--img--handler'>
          {!image && !isLoadingImg && (
            <Selector
              onChange={onChange}
              status={status}
              handleDrop={handleDrop}
              handleDrag={handleDrag}
            />
          )}
          {!image && isLoadingImg && <Loading />}
          {image && <Successfull image={image} />}
        </fieldset>
        <button className='btnn btn__form'>Agregar imagen</button>
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
