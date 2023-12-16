'use client';

import { ElementType, useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import removeSpecialCharacters from "@/utils/remove-special-characters"
import { time } from "console";

interface Props {
  title: string,
  description: string
}

export default function Hero({ title, description }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const titleWithoutSpecialCharacters = removeSpecialCharacters(title)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia(ref)

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions!

        const timeline = gsap.timeline()

        if (isDesktop) {
          timeline.set(
            "li",
            {
              opacity: 0
            }
          )

          timeline.to(
            ref.current,
            {
              y: "0%",
              duration: 1,
              ease: "power3.out",
              delay: .8
            })
          timeline.to(
            "li",
            {
              opacity: 1,
              stagger: 0.03,
              duration: .8
            }
          )
          timeline.to(
            "img",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: .8,
              ease: "expo.out"
            }
          )
        } else if (isMobile) {
          timeline.set(
            "li",
            {
              opacity: 0
            }
          )

          timeline.to(
            "img",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.2,
              delay: 1,
              ease: "power4.out"
            })
          timeline.to(
            "li",
            {
              opacity: 1,
              duration: 0.8,
              stagger: 0.05
            }
          )
        }

      })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="projectHero"
      className="w-screen @desktop:translate-y-full min-h-screen pb-[9vw] grid @desktop:grid-cols-6 @mobileAndTablet:col-span-4 relative mx-auto clip-around"
    >
      <ul className="@desktop:col-span-1 @mobileAndTablet:order-2 @mobileAndTablet:col-span-full bg-[#050505] pt-@container px-@gap text-white">
        <li className="pt-@gap">
          <h5 className="text-[#aaa] font-bold font-syne uppercase">Title</h5>
          <p className="capitalize">{titleWithoutSpecialCharacters}</p>
        </li>
        <li className="pt-@gap">
          <h5 className="text-[#aaa] font-bold font-syne uppercase">Design/Development</h5>
          <p>HuannAND</p>
        </li>
        <li className="pt-@gap">
          <h5 className="text-[#aaa] font-bold font-syne uppercase">Created</h5>
          <p>2023, 22 of January</p>
        </li>
      </ul>
      <div className="w-full @desktop:col-span-5 [contain:_paint]">
        <img
          data-scroll
          data-scroll-speed="-0.3"
          className="col-span-5 z-10 @mobileAndTablet:[clip-path:_polygon(0_0,_100%_0,_100%_0,_0_0)] @desktop:[clip-path:_polygon(0_0,_0_0,_0_100%,_0_100%)] @mobileAndTablet:order-1 @mobileAndTablet:col-span-full h-[calc(100%_+_100px)] @desktop:min-h-screen object-cover"
          src="/projects/599657419/poster.png"
          alt=""
        />
      </div>
    </section >
  )
}