"use client";

import Polygon from '@/components/Polygon';
import LettersSlideInOnView from '@/components/LettersSlideInOnView';
import TextFadeInOnView from '@/components/TextFadeInOnView';


export default function About() {
  return (
    <section
      id="about"
      data-name="About"
      className="w-screen @desktop:min-h-[200dvh] inline-flex relative flex-col items-start px-@section py-[9vw] mx-auto h-auto bg-transparent text-darkPrimary"
    >
      <div className="w-full grid grid-cols-6 gap-4 py-4 sticky top-0 bg-transparent">
        <LettersSlideInOnView trigger="#about" threshold={20}>
          <h1 className='@desktop:w-auto col-span-full @mobileAndTablet:w-full @mobileAndTablet:text-center @mobileAndTablet:mx-auto @mobileAndTablet:block @desktop:ml-auto text-white @desktop:block @desktop:overflow-hidden'>
            Delivering products
            <br />
            with respect
          </h1>
        </LettersSlideInOnView>
        <article id="about-me" className="@desktop:col-span-2 @tablet:col-span-2 @desktop:col-start-2 @tablet:col-start-2 @mobile:col-span-full mt-32 gap-4 py-[3vw] font-light z-20 col-start-6">
          <Polygon data-scroll data-scroll-speed="-0.2" trigger='#about' className='-z-10 absolute' isRegular vertexes={4} radius={200} />
          <TextFadeInOnView delayInSeconds={.2} trigger='#about'>
            <p className='text-[1rem] @mobile:text-center mb-4'>I&apos;m Frontend developer, from Brazil</p>
            <p className='text-[1rem] @mobile:text-center'>
              As a Developer my favorites technologies are Next.js, React.js, TailwindCSS and SCSS. Studying Software Development since 2022, my first contact with Software Development was solving basic problems using C#. Right now I&apos;m studying Next.js, Typescript, Docker, Three.js and C#
            </p>
            <p className='text-[1rem] mb-4 @mobile:text-center'>
              My Backends knowledge&apos;s are C# (.NET Core), Java Spring Boot and Node.js
            </p>
            <p className='text-[1rem] @mobile:text-center'>
              If you haven&apos;t seen my projects, please take a look. If you find any bug, or want to contribute, open an issue, PR or contact me
            </p>
          </TextFadeInOnView>
        </article>
      </div>
    </section>
  )
}