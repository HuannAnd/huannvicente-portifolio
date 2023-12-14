import About from './layouts/About'
import Hero from './layouts/Hero'
import Projects from './layouts/Projects'
import Contact from './layouts/Contact'

import Hamburger from '@/components/Hamburger'

import LocomotiveScrollProvider from '@/contexts/LocomotiveScrollProvider'

export default async function Home() {
  return (
    <LocomotiveScrollProvider>
      <Hamburger />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </LocomotiveScrollProvider>
  );
}