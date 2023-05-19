import { useContext, useState } from 'react';
import './app.css';
import './general.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import { projectsContext } from './context/projects.context';
import ProjectCard from './components/Project/Card/ProjectCard';
import About from './components/About/About';
import ProjectDetail from './components/Project/Detail/ProjectDetail';
import ContactMe from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const { projects } = useContext(projectsContext);
  const [showDetail, setShowDetail] = useState(false);
  const [project, setProject] = useState({});
  

  const handleClick = (showDetail, project) => {
    window.scrollTo(0, 0);
    setShowDetail(showDetail);
    setProject(project);
  };

  return (
    <>
      <Nav />
      <main>
        {!showDetail && <Hero />}
        {!showDetail && (
          <h3 id='section__project__title'>Mis proyectos</h3>
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
        {!showDetail && <ContactMe />}
        {showDetail && (
          <ProjectDetail
            project={project}
            showDetail={showDetail}
            handleClick={handleClick}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
