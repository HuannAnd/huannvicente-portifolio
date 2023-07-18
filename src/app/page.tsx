import dynamic from 'next/dynamic';

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
    loading: () => <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-gray-300 border-t-4 animate-spin"></div>,
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
    { name: "Letmeask", id: 617670848, isDeveloped: true },
    { name: "Warren", id: 599657419, isDeveloped: true },
    { name: "Blog", id: 617668310, isDeveloped: false },
    { name: "Mercantte", id: 624459441, isDeveloped: true },
    { name: "Portifolio", id: 12998282, isDeveloped: false },
    { name: "Next Blog", id: 620027499, isDeveloped: false }
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
