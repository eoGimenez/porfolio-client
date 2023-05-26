import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import UserAccess from './UserAccess/UserAccess';
import './UserAuth.css';
import UserPanel from './UserPanel/UserPanel';

export default function UserAuth({ projects }) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section className='section__user'>
      {!isLoggedIn && <UserAccess />}
      {isLoggedIn && <UserPanel projects={projects} />}
    </section>
  );
}
