import dynamic from 'next/dynamic';
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
  const projects = [
    { name: "Letmeask", id: 617670848, isDeveloped: false },
    { name: "Warren", id: 599657419, isDeveloped: false },
    { name: "Mercantte", id: 624459441, isDeveloped: true },
    { name: "Portifolio", id: 12998282, isDeveloped: true }
  ]

  return (
    <>
      <main data-scroll data-scroll-section className='text-white h-screen relative'>
        <CubicsFalling />
        <Hero />
      </main>
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </>
  );
}
