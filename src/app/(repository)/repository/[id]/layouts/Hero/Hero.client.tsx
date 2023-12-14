'use client';

import { ElementType, useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import removeSpecialCharacters from "@/utils/remove-special-characters"

interface Props {
  title: string,
  description: string
  scene: ElementType
}

export default function Hero({ title, description, scene: Scene3DServer }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const titleWithoutSpecialCharacters = removeSpecialCharacters(title)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline()

      timeline.to("img", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: .8 })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="projectHero" className="w-screen min-h-screen pb-[9vw] grid @desktop:grid-cols-6 @mobileAndTablet:col-span-4 relative mx-auto clip-around">
      <ul className="@desktop:col-span-2 @mobileAndTablet:order-2 @mobileAndTablet:col-span-full bg-[#050505] pt-@container px-@gap text-white">
        <li className="pt-@gap">
          <h5 className="text-[#aaa] font-bold font-syne uppercase">Title</h5>
          <p>Warren Challenge</p>
        </li>
        <li className="pt-@gap">
          <h5 className="text-[#aaa] font-bold font-syne uppercase">Design/Development</h5>
          <p>HuannAnd</p>
        </li>
        <li className="pt-@gap">
          <h5 className="text-[#aaa] font-bold font-syne uppercase">Created</h5>
          <p>2023, 22 of January</p>
        </li>
      </ul>
      <img className="col-span-4 [clip-path:_polygon(0_0,_0_0,_0_100%,_0_100%)] @mobileAndTablet:order-1 @mobileAndTablet:col-span-full h-full @desktop:min-h-screen object-cover" src="/projects/599657419/poster.png" alt="" />
    </section >
  )
}