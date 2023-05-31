import { useContext } from 'react';
import ProjectsService from '../services/projects.service';
import { projectsContext } from '../context/projects.context';
import { AuthContext } from '../context/auth.context';

export function useAddProject({
  title,
  description,
  secDescription,
  urlGit,
  technologies,
  image,
}) {
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);
  const { user } = useContext(AuthContext);

  const handleProject = (e) => {
    e.preventDefault();
    projectService
      .addProject({
        title,
        description,
        secDescription,
        urlGit,
        technologies,
        image,
        author: user._id,
      })
      .then((result) => {
        getProjects();
      })
      .catch((err) => console.log(err));
  };

  return { handleProject };
}
