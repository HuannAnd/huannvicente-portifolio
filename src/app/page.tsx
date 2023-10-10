import dynamic from 'next/dynamic';

import projects from '@/services/projects';

const Load = dynamic(
  () => import("@/components/Load"),
  { ssr: true }
)

const About = dynamic(
  () => import('./_layouts/About'),
  { ssr: true }
)

const Hero = dynamic(
  () => import('./_layouts/Hero'),
  { ssr: true }
)

const Projects = dynamic(
  () => import('./_layouts/Projects'),
  { ssr: false }
)

const Contact = dynamic(
  () => import('./_layouts/Contact'),
  {
    ssr: true,
  }
);

const CubicsFalling = dynamic(
  () => import('@/animations/scenes/CubicsFalling'),
  {
    loading: () => <Load className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />,
    ssr: false,
  }
);

const Skills = dynamic(
  () => import('./_layouts/Skills'),
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
