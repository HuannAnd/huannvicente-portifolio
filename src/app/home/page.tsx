import About from './layouts/About';
import Hero from './layouts/Hero';
import Projects from './layouts/Projects';
import Contact from './layouts/Contact';

import LocomotiveScrollProvider from '@/contexts/LocomotiveScrollProvider'

export default async function Home() {
  return (
    <LocomotiveScrollProvider>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </LocomotiveScrollProvider>
  );
}