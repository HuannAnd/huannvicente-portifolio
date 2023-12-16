'use client';

import { useLayoutEffect } from "react";


import Polygon from "@/components/Polygon";
import LettersSlideInOnView from "@/components/LettersSlideInOnView";

import Project from "./Project";

import { IProjectData } from "@/services/projects/type";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Props {
  projects: IProjectData[]
}

export default function ClientProjects({ projects }: Props) {
  const quantityOfProjects = projects.length

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const projects = document.querySelectorAll("#projects [data-project]")

    const projectTimelineStaggeringContext = gsap.context(() => {
      const onProjectAppear = gsap.timeline()

      const onAppear = {
        stagger: .1,
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
          start: "-=20px center",
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
    <section
      id="projects"
      className="w-screen @desktop:min-h-screen relative mx-auto h-auto gap-32 py-[9vw] px-@section text-white"
      data-name="Projects"
    >
      <LettersSlideInOnView trigger="#projects" threshold={20}>
        <h1 className="@mobileAndTablet:text-center z-50 col-span-full">
          Modern
          <br />
          And Prowled
        </h1>
      </LettersSlideInOnView>
      <div className="@mobileAndTablet:flex pt-@container @mobileAndTablet:flex-col gap-2 @desktop:grid @desktop:grid-cols-6">
        <h5 className="self-start mix-blend-difference w-max grow text-white uppercase">Works <span className="font-normal text-white/50 absolute translate-x-1/2 -translate-y-1/2">{quantityOfProjects <= 0 ? "" : quantityOfProjects}</span></h5>
        <Polygon trigger="#projects" vertexes={5} radius={400} data-scroll data-scroll-speed="0.4" className="absolute right-0 -z-10" />
        <div className="h-auto relative w-full @desktop:col-span-4 @desktop:col-end-[-1] @mobileAndTablet:col-span-5 flex flex-col gap-2">
          {projects.map((x, i) => <Project {...x} key={`Project_${i}`} hasDomain={x.has_domain} nTh={i + 1} />)}
        </div>
      </div>
    </section>
  )
}