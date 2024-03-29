'use client';

import { useLayoutEffect, useRef } from "react";
import useCursorProjectId from "@/components/Cursor/hooks/useCursorProjectId";

import gsap from "gsap";

import ProjectsService from '@/services/projects'
import useLoading from "@/components/Cursor/hooks/useLoading";

import FollowingMotion from "../Cursor/FollowingMotion";

interface Props {

}

export default function Slider({ }: Props) {
  const isLoading = useLoading()
  const projects = ProjectsService.getProjects()
  const ref = useRef<HTMLDivElement>(null)
  const timeline = useRef<gsap.core.Timeline>(gsap.timeline())

  const projectId = useCursorProjectId()

  useLayoutEffect(() => {
    let mm = gsap.matchMedia(ref)
    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        let { isMobile } = context.conditions!

        if (isMobile) return

        const count = projects.length
        const index = projects.findIndex(x => x.id === projectId)
        timeline.current.to(
          ".image-wrapper",
          {
            y: (index * 200) / (count * -1) + "%",
            ease: "power2.inOut",
            duration: .4
          }
        )

      }
    )

    // return () => mm.revert()
  }, [projectId, ref])

  if (isLoading) return null

  return (
    <FollowingMotion
      damping={10}
      stiffness={100}
      mass={.2}
      restDelta={0.001}
    >
      <div ref={ref} className="h-[35vh] -z-20 overflow-hidden rounded-lg aspect-square mix-blend-multiply bg-blend-multiply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute image-wrapper w-full h-full top-0 left-0">
          {projects.map((x, i) => <img key={`Slide_${i}`} src={`/projects/${x.id}/poster.png`} className="w-full brightness-100 relative aspect-square object-cover" />)}
        </div>
      </div>
    </FollowingMotion>
  )
}