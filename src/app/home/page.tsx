import projects from '@/services/projects';

import About from './layouts/About';
import Hero from './layouts/Hero';
import Projects from './layouts/Projects';
import Contact from './layouts/Contact';

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
