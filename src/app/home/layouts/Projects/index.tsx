"use client";

import { useLayoutEffect } from "react";

import Project from "./Project";
import Polygon from "@/components/Polygon";
import LettersSlideInOnView from "@/components/LettersSlideInOnView";

import ProjectsService from "@/services/projects";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


interface ProjectsProps { }

function Projects({ }: ProjectsProps) {
  const developedProjects = ProjectsService.getDevelopedProjects()
  const mainatanceProjects = ProjectsService.getProjectsInMainantance()
  const quantityOfProjects = developedProjects.length + mainatanceProjects.length

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const projects = document.querySelectorAll("#projects [data-project]")
    const timeline = gsap.timeline()

    timeline.set(projects, {
      y: "-100%",
      filter: "blur(10px)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#projects",
        start: "-=20px top",
        onEnter: () => {
          timeline.to(projects, {
            stagger: .2,
            duration: .8,
            transform: "scaleX(1)",
            ease: "expo.inOut",
            opacity: 1,
            filter: "blur(0px)"
          }, 0)
        }
      },
    })

    return () => {
      timeline.kill()
    }
  },
    []
  )

  return (
    <section id="projects" className="w-screen mx-auto h-auto grid grid-cols-6 py-[9vw] px-4 text-white after:w-full after:absolute after:top-full">
      <LettersSlideInOnView trigger="#projects" threshold={20}>
        <h1 className="mb-32 z-50 text-[7rem] col-span-6">
          Modern Products
          <br />
          And Proudled
        </h1>
      </LettersSlideInOnView>
      <p data-scroll className="sticky top-[10vh] text-white uppercase font-semibold">Works <span className="font-normal text-white/50 text-[11px] absolute translate-x-1/2 -translate-y-1/2">{quantityOfProjects}</span></p>
      <div className="relative col-span-2 col-start-1">
        <Polygon trigger="#projects" vertexes={5} radius={400} data-scroll data-scroll-speed="0.4" className="-z-10" />
      </div>
      <div className="h-auto mt-16 relative min-h-[800px] px-[3vw] w-full col-span-4 col-start-3 flex flex-col gap-2">
        {developedProjects.map((project, i) => <Project key={i} nTh={i + 1} {...project} />)}
        {mainatanceProjects.map((project, i) => <Project key={i} nTh={developedProjects.length + i + 1} {...project} />)}
      </div>
    </section>
  )
}

export default Projects