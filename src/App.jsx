import { useContext, useState } from 'react';
import './App.css';
import './General.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import { projectsContext } from './context/projects.context';
import ProjectCard from './components/Project/Card/ProjectCard';
import About from './components/About/About';
import ProjectDetail from './components/Project/Detail/ProjectDetail';
import ContactMe from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import UserAuth from './components/User/UserAuth';

export default function App() {
  const { projects } = useContext(projectsContext);
  const [showDetail, setShowDetail] = useState(false);
  const [project, setProject] = useState({});
  const [userDash, setUserDash] = useState(false);

  const handleClick = (showDetail, project) => {
    window.scrollTo(0, 0);
    setShowDetail(showDetail);
    setProject(project);
  };
  const handleAPI = (userDash) => {
    setUserDash(userDash);
  };

  return (
    <>
      <Nav />
      <main>
        {!showDetail && !userDash && <Hero />}
        {!showDetail && !userDash && (
          <h3 id='section__project__title'>Mis proyectos</h3>
        )}
        <div className='card__section__container'>
          {!showDetail &&
            !userDash &&
            projects.map((project, i) => (
              <ProjectCard
                key={project._id}
                project={project}
                index={i}
                handleClick={handleClick}
                showDetail={showDetail}
              />
            ))}
        </div>
        {!showDetail && !userDash && <About />}
        {!showDetail && !userDash && <ContactMe />}
        {showDetail && !userDash && (
          <ProjectDetail
            project={project}
            showDetail={showDetail}
            handleClick={handleClick}
          />
        )}
        {!showDetail && userDash && (
          <UserAuth handleAPI={handleAPI} userDash={userDash} />
        )}
      </main>
      <Footer handleAPI={handleAPI} userDash={userDash} />
    </>
  );
}
