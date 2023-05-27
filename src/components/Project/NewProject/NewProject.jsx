import { useContext, useState } from 'react';
import { useField } from '../../../hook/useField';
import ProjectsService from '../../../services/projects.service';
import '../FormProject.css';
import { projectsContext } from '../../../context/projects.context';

export default function NewProject() {
  const title = useField({ type: 'text', field: '' });
  const description = useField({ type: 'text', field: '' });
  const secDescription = useField({ type: 'text', field: '' });
  const urlGit = useField({ type: 'text', field: '' });
  const [technologiesArr, setTechnologiesArr] = useState([]);
  const [imageAux, setImageAux] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
  const [techAux, setTechAux] = useState('');
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);

  const handleTech = (e) => {
    e.preventDefault();
    setTechnologiesArr([...technologiesArr, techAux]);
    setTechAux('');
  };

  const handleImage = (e) => {
    const uploadData = new FormData();
    uploadData.append('image', e.target.files[0]);
    projectService
      .uploadFile(uploadData)
      .then((response) => {
        console.log(response);
        setImageAux(response.data.imageUrl);
      })
      .catch((err) => console.log('Error while uploading the image: ', err));
  };

  const handleImages = (e) => {
    e.preventDefault();
    setImageUrl([...imageUrl, imageAux]);
    setImageAux('');
  };

  const handleProject = (e) => {
    projectService
      .addProject({
        title: title.value,
        description: description.value,
        secDescription: secDescription.value,
        urlGit: urlGit.value,
        technologies: technologiesArr,
        image: imageUrl,
        ownCode: 'm4n0n3gr4',
      })
      .then((result) => {
        console.log(result);
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
