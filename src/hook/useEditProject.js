import { useContext } from 'react';
import ProjectsService from '../services/projects.service';
import { projectsContext } from '../context/projects.context';

export function useEdit({
  projectId,
  title,
  description,
  secDescription,
  ultGit,
  technologies,
  image,
}) {
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);

  const handleEdit = (e) => {
    e.preventDefault();
    projectService
      .editProject(projectId, {
        title,
        description,
        secDescription,
        ultGit,
        technologies,
        image,
      })
      .then((result) => {
        getProjects();
      })
      .catch((err) => console.log(err));
  };

  return { handleEdit };
}
