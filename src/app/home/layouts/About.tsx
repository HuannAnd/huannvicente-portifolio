"use client";

import { useLayoutEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import LettersFadeIn from "@/components/Words/WordsFadeIn";

import CustomButton from '@/components/CustomButton';
import WordsSlideIn from '@/components/WordsSlideIn';
import Polygon from '@/components/Polygon';
import LetterMapping from '@/components/LettersMapping';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export default function About() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: false })

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const innerSpans = document.querySelectorAll("#about h1 span > span")

    gsap.set(innerSpans, {
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        onEnter: () => {
          gsap.to(innerSpans, {
            y: "0%",
            filter: "blur(0px)",
            opacity: 1,
            ease: "power4.out",
            duration: .8,
            stagger: .02
          })
        }
      },
      y: "-100%",
      filter: "blur(10px)",
      opacity: 0,
    })

  }, [])

  return (
    <section
      id="about"
      className="w-screen min-h-[200vh] px-4 py-[9vw] mx-auto relative h-auto bg-transparent overflow-y-hidden text-darkPrimary"
    >
      <div className="clip-around w-full h-full bg-transparent flex flex-col">
        <h1 className='relative text-[7rem] float-right text-white inline-block ml-auto'>
          <LetterMapping>Delivering</LetterMapping> <LetterMapping>products</LetterMapping>
          <br />
          <LetterMapping>with</LetterMapping> <LetterMapping>respect</LetterMapping>
        </h1>
        <article ref={ref} id="about-me" className="grow grid sticky top-0 grid-cols-6 mt-32 gap-4 py-[3vw] align-baseline font-light z-20 col-start-6">
          <Polygon data-scroll data-scroll-speed="-0.2" trigger='#about' className='-z-10' isRegular vertexs={4} radius={200} />
          <div className='sticky top-0 col-start-2'>
            <LettersFadeIn isInView={isInView} delayInSeconds={.5} splitType="points" textColor="mixed" className="w-full sticky top-0 inline-block float-right mt-8" >
              I'm Frontend developer, from Brazil
            </LettersFadeIn>
            <LettersFadeIn isInView={isInView} delayInSeconds={1} splitType="points" textColor="mixed" className="w-full inline-block float-right mt-8" >
              As a Developer my favorites technologies are Next.js, React.js, TailwindCSS and SCSS. Studing Software Development since 2022, my first contact with Software Development was solving basic problems using C#. Right now I'm studing Next.js, Typescript, Docker, Three.js and C#
            </LettersFadeIn>
          </div>
          <div className='col-start-3'>
            <LettersFadeIn isInView={isInView} delayInSeconds={1.2} splitType="points" textColor="mixed" className="w-full inline-block float-right mt-8" >
              My Backends knowledges are C# (.NET Core), Java Spring Boot and Node.js
            </LettersFadeIn>
            <LettersFadeIn isInView={isInView} delayInSeconds={1.5} splitType="points" textColor="mixed" className="w-full inline-block float-right mt-8" >
              If you haven't seen my projects, please take a look. If you find any bug, or want to contribute, open an issue, PR or contact me
            </LettersFadeIn>
          </div>
        </article>
      </div>
    </section>
  )
}