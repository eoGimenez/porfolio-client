import { useContext } from 'react';
import ProjectsService from '../services/projects.service';
import { projectsContext } from '../context/projects.context';

export function useDelete({ projectId }) {
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);

  
  const handleDelete = (projectId) => {
    projectService.deleteProject(projectId).then((result) => {
      getProjects();
    });
  };

  return { handleDelete };
}
