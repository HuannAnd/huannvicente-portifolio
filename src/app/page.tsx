import dynamic from 'next/dynamic';

import projects from '@/services/projects';

// import { useEffect, useState } from 'react';

const Load = dynamic(
  () => import("@/components/Load"),
  { ssr: true }
)

const About = dynamic(
  () => import('@/layouts/About'),
  { ssr: true }
)

const Hero = dynamic(
  () => import('@/layouts/Hero'),
  { ssr: true }
)

const Projects = dynamic(
  () => import('@/layouts/Projects'),
  { ssr: false }
)

const Contact = dynamic(
  () => import('@/layouts/Contact'),
  {
    ssr: true,
  }
);

const CubicsFalling = dynamic(
  () => import('@/layouts/CubicsFalling'),
  {
    loading: () => <Load className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />,
    ssr: false,
  }
);

const Skills = dynamic(
  () => import('@/layouts/Skills'),
  {
    ssr: true,
  }
);


export default async function Home() {
  return (
    <>
      <div data-scroll data-scroll-section className='text-white h-screen relative'>
        <CubicsFalling />
        <Hero />
      </div>
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </>
  );
}
