import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Socials from '../components/Socials';
import FeatureGrid from '../components/FeatureGrid';
import ProjectCard from '../components/ProjectCard';
import Experience from '../components/Experience';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Socials />
    </>
  );
}
