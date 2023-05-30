import './UserPanel.css';
import { useState } from 'react';
import { useDelete } from '../../../hook/useDelete';
import EditProject from '../../Project/EditProject/EditProject';
import NewProject from '../../Project/NewProject/NewProject';
import { useLogout } from '../../../hook/useLogout';

export default function UserPanel({ projects }) {
  const [project, setProject] = useState();
  const [adding, setAdding] = useState(false);
  const { handleDelete } = useDelete('');
  const { handleLogout } = useLogout();

  const handleEdit = (project) => {
    setProject(project);
  };

  const handleNewProject = () => {
    setAdding(!adding);
  };

  const handleHome = () => {
    setAdding(false);
    setProject(false);
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

          <h3 className='btn handle__newproject' onClick={handleNewProject}>
            Add new Project
          </h3>
          <h3 className='btn handle__logout' onClick={handleLogout}>
            LogOut
          </h3>
        </>
      )}
      {project && !adding && <EditProject project={project} />}
      {!project && adding && <NewProject />}
      <h4 className='btn' onClick={handleHome}>
        Go to Panel
      </h4>
    </section>
  );
}
