"use client";

import { motion } from "framer-motion";

import Project from "./Project";

import Polygon from "@/components/Polygon";
import WordsSlideIn from "@/components/WordsSlideIn";

import ProjectsService from "@/services/projects";
import { useLayoutEffect } from "react";
import LettersMapping from "@/components/LettersMapping";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


interface ProjectsProps { }

function Projects({ }: ProjectsProps) {
  const developedProjects = ProjectsService.getDevelopedProjects()
  const mainatanceProjects = ProjectsService.getProjectsInMainantance()
  const quantityOfProjects = developedProjects.length + mainatanceProjects.length

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const innerSpans = document.querySelectorAll("#projects h1 span > span")

    gsap.set(innerSpans, {
      y: "-100%",
      filter: "blur(10px)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#projects",
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
    })
  }, [])

  return (
    <section id="projects" className="w-screen mx-auto h-auto grid grid-cols-6 py-[9vw] px-4 text-white after:w-full after:absolute after:top-full">
      <h1 className="mb-32 z-50 text-[7rem] col-span-6">
        <LettersMapping>Modern</LettersMapping> <LettersMapping>Products</LettersMapping>
        <br />
        <LettersMapping>And</LettersMapping> <LettersMapping>Proudled</LettersMapping>
      </h1>
      <p data-scroll className="sticky top-[10vh] text-white uppercase font-semibold">Works <span className="font-normal text-white/50 text-[11px] absolute translate-x-1/2 -translate-y-1/2">{quantityOfProjects}</span></p>
      <div className="relative col-span-2 col-start-1">
        <Polygon trigger="#projects" vertexs={5} radius={400} data-scroll data-scroll-speed="0.4" className="-z-10" />
      </div>
      <div className="h-auto mt-16 relative min-h-[800px] px-[3vw] w-full col-span-4 col-start-3 flex flex-col gap-2">
        {developedProjects.map((project, i) => <Project key={i} nTh={i + 1} {...project} />)}
        {mainatanceProjects.map((project, i) => <Project key={i} nTh={developedProjects.length + i + 1} {...project} />)}
      </div>
    </section>
  )
}

export default Projects