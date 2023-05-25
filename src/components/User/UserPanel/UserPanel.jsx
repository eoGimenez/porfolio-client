import { useContext, useState } from 'react';
import { projectsContext } from '../../../context/projects.context';
import './UserPanel.css';
import { useDelete } from '../../../Hooks/useDelete';

export default function UserPanel() {
  const { projects } = useContext(projectsContext);
  const [editing, setEditing] = useState(false);
  const { handleDelete } = useDelete({ projectId: '' });

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <>
      {!editing && (
        <table>
          <thead>
            <tr>
              <th>Project name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {projects.map((project) => (
            <tbody key={project._id}>
              <tr>
                <th>{project.title}</th>
                <td className='btn link__edit' onClick={handleEdit}>
                  Edit
                </td>
                <td
                  className='btn link__delete'
                  onClick={() => handleDelete({ projectId: project._id })}
                >
                  Delete
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </>
  );
}
