import '../FormProject.css';
import { useState } from 'react';
import { useField } from '../../../hook/useField';
import { useAddProject } from '../../../hook/useAddProject';
import { useFile } from '../../../hook/useFile';

export default function NewProject() {
  const title = useField({ type: 'text', field: '' });
  const description = useField({ type: 'text', field: '' });
  const secDescription = useField({ type: 'text', field: '' });
  const [urlsGit, setUrlsGit] = useState([]);
  const [urlGitAux, setUrlGitAux] = useState({ label: '', url: '' });
  const [technologiesArr, setTechnologiesArr] = useState([]);
  const [techAux, setTechAux] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
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

  const handleGitUrl = (e) => {
    e.preventDefault();
    setUrlsGit([...urlsGit, urlGitAux]);
    setUrlGitAux({ label: '', url: '' });
  };

  const { handleProject } = useAddProject({
    title: title.value,
    description: description.value,
    secDescription: secDescription.value,
    urlGit: urlsGit,
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
        {urlsGit &&
          urlsGit.map((git, i) => (
            <fieldset key={i} className='fieldset__tech'>
              <p>{git.label}</p>
              <p>{git.url}</p>
            </fieldset>
          ))}
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
      <h4>Agregar imagen</h4>
      <form className='project__form' onSubmit={handleImages}>
        <fieldset>
          <input
            type='file'
            onChange={(e) => {
              handleImage(e);
            }}
          />
        </fieldset>
        <button className='btnn btn__form'>Agregar Imagen</button>
      </form>
      <form className='project__form' onSubmit={handleGitUrl}>
        <h4>Agregar url git</h4>
        <fieldset>
          <input
            type='text'
            value={urlGitAux.label}
            onChange={(e) =>
              setUrlGitAux({ ...urlGitAux, label: e.target.value })
            }
          />
          <input
            type='text'
            value={urlGitAux.url}
            onChange={(e) =>
              setUrlGitAux({ ...urlGitAux, url: e.target.value })
            }
          />
        </fieldset>
        <button className='btnn btn__form'>Agregar urlGit</button>
      </form>
      <form className='project__form' onSubmit={handleTech}>
        <h4>Agregar tecnología</h4>
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
