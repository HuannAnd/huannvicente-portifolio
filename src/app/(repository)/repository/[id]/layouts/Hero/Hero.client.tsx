'use client';

import { ElementType, useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import removeSpecialCharacters from "@/utils/remove-special-characters"
import { time } from "console";

interface Props {
  title: string,
  description: string,
  posterSrc: string
}

export default function Hero({ title, description, posterSrc }: Props) {
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
          timeline.set(
              "#image",
              {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
            }       
          )

          timeline.to(
            "li",
            {
              opacity: 1,
              stagger: 0.03,
              duration: .8,
              delay: 1.2,
            }
          )
          timeline.to(
            "#image",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
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
          timeline.set(
            "#image",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
            }
          )


          timeline.to(
            "#image",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.2,
              delay: 1,
              ease: "power4.out"
            })
            .to(
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
      className="w-screen min-h-screen pb-[9vw] grid @desktop:grid-cols-6 @mobileAndTablet:col-span-4 relative mx-auto clip-around"
    >
      <ul className="@desktop:col-span-2 @mobileAndTablet:order-2 @mobileAndTablet:col-span-full bg-[#050505] @mobileAndTablet:pt-@container @desktop:pt-[calc(3vw_+_50px)] px-@section text-white">
        <li>
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
      <div id="image" className="w-full @desktop:col-span-4 overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-0.3"
          className="col-span-5 z-10 @mobileAndTablet:order-1 w-full @mobileAndTablet:col-span-full h-[calc(100%_+_100px)] @desktop:min-h-screen object-cover"
          src={posterSrc}
          alt="Project Poster Image"
        />
      </div>
    </section >
  )
}