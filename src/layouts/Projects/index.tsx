"use client";


import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import Project from "./Project";


type ProjectsProps = {
  projects: {
    name: string,
    id: number,
    isDeveloped: boolean
  }[]
}

export default function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null!)

  const developed = projects.filter(r => r.isDeveloped)
  const prototyped = projects.filter(r => !r.isDeveloped)

  return (
    <section
      data-scroll
      data-scroll-section
      ref={ref}
      id="projects"
      className="w-full h-auto grid grid-rows-1 overflow-x-hidden py-[9vw] relative bg-inherit text-white shadow-[0_20px_20px_#00000081]
        after:w-full after:absolute after:top-full"
    >
      <motion.div
        className="absolute top-0 left-0 bg-white z-10 -translate-y-full h-[4px] w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeIn" } }} />
      <div
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
        data-scroll-offset="-50%, 0%"
        className="w-auto"
      >
        <h1 className="text-[clamp(120px,_8vw,_200px)] pl-[3vw] font-semibold text-white uppercase">
          Projects{""}
          <span className="relative translate-y-1/2 font-normal text-[30px]">({projects.length})</span>
        </h1>
      </div>
      <motion.div
        className="h-auto min-h-[800px] px-[3vw] w-full grid grid-cols-12 grid-row-1 gap-x-4"
      >
        <small className="py-10 text-[16px] bg-transparent font-light select-none">Developed</small>
        {developed.map((project, i) => <Project key={i} nTh={i + 1} project={project} />)}
        <small className="py-10 text-[16px] bg-transparent font-light select-none">Prototyped</small>
        {prototyped.map((project, i) => <Project key={i} nTh={developed.length + i + 1} project={project} />)}
      </motion.div>
    </section>
  )
}