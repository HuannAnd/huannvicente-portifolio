"use client";

import { useLayoutEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import LettersFadeIn from "@/components/Words/WordsFadeIn";
import Polygon from '@/components/Polygon';
import LetterMapping from '@/components/LettersSlideInOnView';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LettersSlideInOnView from '@/components/LettersSlideInOnView';


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
          <Polygon data-scroll data-scroll-speed="-0.2" trigger='#about' className='-z-10' isRegular vertexs={4} radius={200} />
          <div className='sticky top-0 col-start-2'>
            <LettersFadeIn isInView={isInView} delayInSeconds={.2} splitType="points" textColor="mixed" className="w-full sticky top-0 inline-block float-right mt-8" >
              I'm Frontend developer, from Brazil
            </LettersFadeIn>
            <LettersFadeIn isInView={isInView} delayInSeconds={.4} splitType="points" textColor="mixed" className="w-full inline-block float-right mt-8" >
              As a Developer my favorites technologies are Next.js, React.js, TailwindCSS and SCSS. Studing Software Development since 2022, my first contact with Software Development was solving basic problems using C#. Right now I'm studing Next.js, Typescript, Docker, Three.js and C#
            </LettersFadeIn>
          </div>
          <div className='col-start-3'>
            <LettersFadeIn isInView={isInView} delayInSeconds={.6} splitType="points" textColor="mixed" className="w-full inline-block float-right mt-8" >
              My Backends knowledges are C# (.NET Core), Java Spring Boot and Node.js
            </LettersFadeIn>
            <LettersFadeIn isInView={isInView} delayInSeconds={.8} splitType="points" textColor="mixed" className="w-full inline-block float-right mt-8" >
              If you haven't seen my projects, please take a look. If you find any bug, or want to contribute, open an issue, PR or contact me
            </LettersFadeIn>
          </div>
        </article>
      </div>
    </section>
  )
}