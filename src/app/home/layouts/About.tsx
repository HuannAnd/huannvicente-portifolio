"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import LettersFadeIn from "@/components/Words/WordsFadeIn";


export default function About() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      data-scroll
      data-scroll-section
      id="about"
      className="w-full min-h- h-auto max-h-[1200px] overflow-y-hidden text-darkPrimary relative pt-[3vw]
      before:absolute before:w-full before:z-10 before:pointer-events-none before:content-[''] before:-translate-y-1/2 before:h-[5vw] before:top-0 before:left-0 before:rotate-180 before:bg-gradient-to-t before:from-black before:via-black before:to-transparent
      "
    >
      <motion.div
        data-scroll
        data-scroll-speed="-2"
        data-scroll-offset="-100%,0%"
        initial={{ y: "-100%" }}
        className="clip-around w-full h-full bg-primaryColor bg-darkPrimary flex flex-col"
      >
        <div aria-label="About-me" className=" z-10 bg-darkPrimary">
          <h2 className="block col-span-12 text-left relative border-b-2 border-b-white/50 mx-[3vw]">
            ABOUT
          </h2>
        </div>
        <article ref={ref} data-scroll-class="about-me-scroll" id="about-me" className="grow align-baseline font-light px-[3vw] pb-[9vw] z-20 col-start-6">
          <LettersFadeIn isInView={isInView} delayInSeconds={.5} splitType="points" textColor="mixed" className="w-3/4 inline-block float-right mt-8" >
            I'm Frontend developer, from Brazil
          </LettersFadeIn>
          <motion.img className="w-32 float-left inline-block mt-8" src="/brazil-flag.png" alt="Brazil Flag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
          <motion.img className="w-32 float-left inline-block mt-16" src="/pernambuco-flag.jpg" alt="Brazil Flag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
          <LettersFadeIn isInView={isInView} delayInSeconds={1} splitType="points" textColor="mixed" className="w-3/4 inline-block float-right mt-8" >
            As a Developer my favorites technologies are Next.js, React.js, TailwindCSS and SCSS. Studing Software Development since 2022, my first contact with Software Development was solving basic problems using C#. Right now I'm studing Next.js, Typescript, Docker, Three.js and C#
          </LettersFadeIn>
          <LettersFadeIn isInView={isInView} delayInSeconds={1.2} splitType="points" textColor="mixed" className="w-3/4 inline-block float-right mt-8" >
            My Backends knowledges are C# (.NET Core), Java Spring Boot and Node.js
          </LettersFadeIn>
          <LettersFadeIn isInView={isInView} delayInSeconds={1.5} splitType="points" textColor="mixed" className="w-3/4 inline-block float-right mt-8" >
            If you haven't seen my projects, please take a look. If you find any bug, or want to contribute, open an issue, PR or contact me
          </LettersFadeIn>
        </article>
      </motion.div>
    </section>
  )
}