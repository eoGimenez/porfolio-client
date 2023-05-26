import { useState } from 'react';
import './UserPanel.css';
import { useDelete } from '../../../hooks/useDelete';
import EditProject from '../../Project/EditProject/EditProject';
import NewProject from '../../Project/NewProject/NewProject';

export default function UserPanel({ projects }) {
  const [project, setProject] = useState();
  const [adding, setAdding] = useState(false);
  const { handleDelete } = useDelete('');

  const handleEdit = (project) => {
    setProject(project);
  };

  const handleNewProject = () => {
    setAdding(!adding);
  };

  return (
    <section className='section__dashboard'>
      {!project && !adding && (
        <>
          <table>
            {projects.map((project) => (
              <tbody key={project._id}>
                <tr>
                  <th>{project.title}</th>
                  <td
                    className='btn link__edit'
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </td>
                  <td
                    className='btn link__delete'
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <h3 className='handle__newproject' onClick={handleNewProject}>
            Add new Project
          </h3>
        </>
      )}
      {project && !adding && <EditProject project={project} />}
      {!project && adding && <NewProject />}
    </section>
  );
}
