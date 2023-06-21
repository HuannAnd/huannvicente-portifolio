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

const CubicsFalling = dynamic(
  () => import('@/layouts/CubicsFalling'),
  {
  loading: () => <p style={{ color: "black" }}>Loading...</p>,
    ssr: false,
  }
);

import GithubService from '@/services/github';

export default async function Home() {
  // const user = await GithubService.getUser("HuannAnd");

  return (
    <>
      <main className='text-white h-[750px] relative mb-[50vh]'>
        <CubicsFalling />
        <Hero />
      </main>
      <About />
      <Projects />

    </>
  );
}
