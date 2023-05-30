import '../FormProject.css';
import { useState } from 'react';
import { useField } from '../../../hook/useField';
import { useAddProject } from '../../../hook/useAddProject';
import { useFile } from '../../../hook/useFile';

export default function NewProject() {
  const title = useField({ type: 'text', field: '' });
  const description = useField({ type: 'text', field: '' });
  const secDescription = useField({ type: 'text', field: '' });
  const urlGit = useField({ type: 'text', field: '' });
  const [technologiesArr, setTechnologiesArr] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [techAux, setTechAux] = useState('');
  const { handleImage, imageAuxil } = useFile();

  const handleTech = (e) => {
    e.preventDefault();
    setTechnologiesArr([...technologiesArr, techAux]);
    setTechAux('');
  };

  const handleImages = (e) => {
    e.preventDefault();
    setImageUrl([...imageUrl, imageAuxil]);
  };

  const { handleProject } = useAddProject({
    title: title.value,
    description: description.value,
    secDescription: secDescription.value,
    urlGit: urlGit.value,
    technologies: technologiesArr,
    image: imageUrl,
  });

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
        {imageUrl &&
          imageUrl.map((url, i) => (
            <fieldset key={i} className='fieldset__tech'>
              <p>{url}</p>
            </fieldset>
          ))}
        {technologiesArr &&
          technologiesArr.map((tech, i) => (
            <fieldset key={i} className='fieldset__tech'>
              <p>{tech}</p>
            </fieldset>
          ))}
        <button className='btnn btn__form'>Crear proyecto</button>
      </form>
      <form className='project__form' onSubmit={handleImages}>
        <fieldset>
          <input
            type='file'
            onChange={(e) => {
              handleImage(e);
            }}
          />
        </fieldset>
        <button className='btnn btn__form'>Agregar Url</button>
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
