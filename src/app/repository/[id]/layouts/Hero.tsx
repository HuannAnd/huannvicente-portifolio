'use client';

import { useEffect } from "react"

import { stagger, useAnimate, useInView } from "framer-motion"

import SplitType from "split-type"

import ProjectsService from "@/services/projects";

import useSetCursor from "@/hooks/useSetCursor";
import useHamburguerContext from "@/hooks/useHamburguerContext"
import useProjectId from "./useProjectId";

interface HeroProps { title: string, description: string }

export default function Overview({ title, description }: HeroProps) {
  const projectId = useProjectId()

  const scope = useAnimationContext()
  const setCursor = useSetCursor()

  const hasDomain = ProjectsService.projectHasDomain(projectId)
  const repositoryURL = ProjectsService.getProjectUrls(projectId).github_repository_url
  const domainURL = ProjectsService.getProjectUrls(projectId).domain_url

  return (
    <section ref={scope} data-scroll-section data-scroll className="max-w-@content mx-auto text-[#bbb] grid place-content-center text-center h-screen">
      <div className="relative px-[9vw]">
        <h1
          data-scroll
          className="text-[clamp(48px,_5vw,_140px)] mb-8 text-center duration-300 ease-fast text-white font-bold tracking-tighter">{title}</h1>
        <q
          id="text"
          className="text-[clamp(25px,_3vw,_48px)] mb-4 duration-300 ease-fast block text-center text-white/50 font-normal">{description}</q>
        <div className="flex flex-row justify-between items-center w-full h-auto gap-4">
          {hasDomain && (
            <a
              className="text-white grow basis-0 py-[3vw] min-w-[18vw] block cursor-pointer font-regular border-t-2 border-t-[#222]"
              onMouseEnter={() => setCursor({ state: "hovered", title: null, icon: "externalLink" })}
              onMouseLeave={() => setCursor({ state: "normal", title: null, icon: "externalLink" })}
              href={domainURL}>On live</a>
          )}
          <a
            className="text-white py-[3vw] basis-0 grow w-full min-w-[9vw] block cursor-pointer font-regular border-t-2 border-t-[#222]"
            onMouseEnter={() => setCursor({ state: "hovered", title: null, isLoading: false, icon: "externalLink" })}
            onMouseLeave={() => setCursor({ state: "normal", title: null, icon: "none" })}
            href={repositoryURL}>Repository</a>
        </div>
      </div>
    </section>
  )
}

function useAnimationContext() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      new SplitType("#text", { types: "words" });
      animate([
        [
          "h1",
          { opacity: 1 },
          { duration: 1 }
        ],
        [
          "#text .word",
          { y: [16, 0], opacity: [0, 1] },
          { duration: 0.45, times: [0, 1], delay: stagger(0.07), at: "-0.5" }
        ]
      ])
    }
    return
  }, [isInView])

  return scope
}

