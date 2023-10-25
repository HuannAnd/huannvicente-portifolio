"use client";

import { motion } from "framer-motion";

import Project from "./Project";

import ProjectsService from "@/services/projects";


interface ProjectsProps { }

function Projects({ }: ProjectsProps) {
  const developedProjects = ProjectsService.getDevelopedProjects()
  const mainatanceProjects = ProjectsService.getProjectsInMainantance()
  const quantityOfProjects = developedProjects.length + mainatanceProjects.length

  return (
    <section
      data-scroll
      data-scroll-section
      id="projects"
      className="w-full h-auto grid grid-rows-1 overflow-x-hidden py-[9vw] relative bg-inherit text-white shadow-[0_20px_20px_#00000081]
        after:w-full after:absolute after:top-full"
    >
      <div className="w-auto">
        <h2
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
          data-scroll-offset="-50%, 0%" className="text-white font-semibold uppercase">
          Projects{""}
        </h2>
        <small className="italic ml-auto absolute right-0 -translate-x-full text-@secondary -translate-y-full font-normal text-small">({quantityOfProjects})</small>
      </div>
      <div className="h-auto min-h-[800px] px-[3vw] w-full grid grid-cols-12 grid-row-1 gap-x-4">
        <small className="py-10 uppercase bg-transparent text-white/50 h-auto col-span-12 font-light select-none">Developed</small>
        {developedProjects.map((project, i) => <Project key={i} nTh={i + 1} {...project} />)}
        <small className="py-10 uppercase bg-transparent text-white/50 h-auto col-span-12 font-light select-none">Developing</small>
        {mainatanceProjects.map((project, i) => <Project key={i} nTh={developedProjects.length + i + 1} {...project} />)}
      </div>
    </section>
  )
}

export default Projects