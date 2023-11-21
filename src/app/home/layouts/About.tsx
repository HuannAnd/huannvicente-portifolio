"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import Polygon from '@/components/Polygon';
import LettersSlideInOnView from '@/components/LettersSlideInOnView';
import TextFadeInOnView from '@/components/TextFadeInOnView';


export default function About() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id="about"
      className="w-screen min-h-[200vh] px-4 py-[9vw] mx-auto relative h-auto bg-transparent overflow-y-hidden text-darkPrimary"
    >
      <div className="clip-around w-full h-full bg-transparent flex flex-col">
        <LettersSlideInOnView trigger="#about" threshold={20}>
          <h1 className='relative text-[7rem] float-right text-white inline-block ml-auto overflow-hidden'>
            Delivering products
            <br />
            with respect
          </h1>
        </LettersSlideInOnView>
        <article ref={ref} id="about-me" className="grow grid sticky top-0 grid-cols-6 mt-32 gap-4 py-[3vw] align-baseline font-light z-20 col-start-6">
          <Polygon data-scroll data-scroll-speed="-0.2" trigger='#about' className='-z-10' isRegular vertexes={4} radius={200} />
          <TextFadeInOnView className='sticky top-0 col-start-2' delayInSeconds={.2} trigger='#about'>
            <p className='text-[1rem] mb-4'>I'm Frontend developer, from Brazil</p>
            <p className='text-[1rem]'>
              As a Developer my favorites technologies are Next.js, React.js, TailwindCSS and SCSS. Studying Software Development since 2022, my first contact with Software Development was solving basic problems using C#. Right now I'm studing Next.js, Typescript, Docker, Three.js and C#
            </p>
          </TextFadeInOnView>
          <TextFadeInOnView className='col-start-3' trigger='#about' delayInSeconds={.4}>
            <p className='text-[1rem] mb-4'>
              My Backends knowledge's are C# (.NET Core), Java Spring Boot and Node.js
            </p>
            <p className='text-[1rem]'>
              If you haven't seen my projects, please take a look. If you find any bug, or want to contribute, open an issue, PR or contact me
            </p>
          </TextFadeInOnView>
        </article>
      </div>
    </section>
  )
}