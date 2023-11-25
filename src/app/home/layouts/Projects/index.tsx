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
  const maintenanceProjects = ProjectsService.getWorkInProgressProjects()
  const quantityOfProjects = developedProjects.length + maintenanceProjects.length

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const projects = document.querySelectorAll("#projects [data-project]")

    const projectTimelineStaggeringContext = gsap.context(() => {
      const onProjectAppear = gsap.timeline()

      const onAppear = {
        stagger: .2,
        duration: .8,
        transform: "scaleX(1)",
        ease: "expo.inOut",
        opacity: 1,
        filter: "blur(0px)"
      }

      onProjectAppear.set(projects, {
        y: "-100%",
        filter: "blur(10px)",
        opacity: 0,
        scrollTrigger: {
          trigger: "#projects",
          start: "-=20px top",
          onEnter: () => {
            onProjectAppear.to(projects, onAppear, 0)
          }
        },
      })
    })


    return () => projectTimelineStaggeringContext.revert()
  },
    []
  )

  return (
    <section id="projects" className="w-screen relative mx-auto h-auto grid grid-cols-6 py-[9vw] px-@section text-white">
      <LettersSlideInOnView trigger="#projects" threshold={20}>
        <h1 className="@desktop:mb-32 @mobileAndTablet:mb-4 @mobileAndTablet:text-center z-50 col-span-full">
          Modern Products
          <br />
          And Prowled
        </h1>
      </LettersSlideInOnView>
      <p data-scroll className="sticky self-start top-[10vh] text-white uppercase font-semibold">Works <span className="font-normal text-white/50 text-[11px] absolute translate-x-1/2 -translate-y-1/2">{quantityOfProjects}</span></p>
      {/* <div className="absolute @desktop:col-span-1"> */}
      <Polygon trigger="#projects" vertexes={5} radius={400} data-scroll data-scroll-speed="0.4" className="absolute right-0 -z-10" />
      {/* </div> */}
      <div className="h-auto mt-16 relative min-h-[800px] px-[3vw] w-full @desktop:col-span-4 @mobileAndTablet:col-span-5 @desktop:col-start-3 flex flex-col gap-2">
        {developedProjects.map((project, i) => <Project key={i} nTh={i + 1} {...project} />)}
        {maintenanceProjects.map((project, i) => <Project key={i} nTh={developedProjects.length + i + 1} {...project} />)}
      </div>
    </section>
  )
}

export default Projects