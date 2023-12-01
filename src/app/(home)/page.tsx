import About from './layouts/About';
import Hero from './layouts/Hero';
import Projects from './layouts/Projects';
import Contact from './layouts/Contact';

import Hamburger from '@/components/Hamburger';

import GithubService from '@/services/github'

import LocomotiveScrollProvider from '@/contexts/LocomotiveScrollProvider'

export default async function Home() {
  const repositories = await GithubService.getRepositories()
  console.log("My repositories: ", repositories)

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