import { useContext, useState } from 'react';
import './app.css';
import './general.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import { projectsContext } from './context/projects.context';
import ProjectCard from './components/Project/Card/ProjectCard';
import About from './components/About/About';

export default function App() {
  const { projects, getProjects } = useContext(projectsContext);
  const [showDetail, setShowDetail] = useState(false);
  const [project, setProject] = useState({});

  const handleClick = (showDetail, project) => {
    setShowDetail(showDetail);
    setProject(project);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav />
      <main>
        <Hero />
        {!showDetail && (
          <h3 className='section__project__title'>Mis proyectos</h3>
        )}
        {!showDetail &&
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              handleClick={handleClick}
              showDetail={showDetail}
            />
          ))}
        {!showDetail && <About />}
      </main>
    </>
  );
}
