"use client";


import LettersSlideInOnView from "@/components/LettersSlideInOnView";

import OrganicFluidScene from "@/three/scenes/OrganicScene";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import SplitType from "split-type";

interface Props { }

export default function Hero({ }: Props) {
  const ref = useRef<any>()

  useLayoutEffect(() => {
    SplitType.create("#hero h1", { types: "chars" })

    let mm = gsap.matchMedia(ref)

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)"
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions!

        if (isDesktop) {
          gsap.set(".char:nth-child(even)", { y: "100%" })
          gsap.set(".char:nth-child(odd)", { y: "-100%" })

          gsap.to(".char", { y: "0%", delay: 1, duration: 1, stagger: 0.01 })
        } else if (isMobile) {
          gsap.to(".char", { y: "0%", duration: 0 })
        }
      }
    )


    return () => mm.revert()
  }, [])

  return (
    <section ref={ref} id="hero" className="flex @desktop:overflow-clip @mobileAndTablet:justify-center @mobileAndTablet:relative min-h-screen p-@section justify-center @mobileAndTablet:items-center @desktop:items-end w-auto max-w-[100vw] mx-auto z-50 gap-x-2 text-black">
      <OrganicFluidScene />
      <LettersSlideInOnView delay={1} trigger="#hero" threshold={20}>
        <h1 data-scroll data-scroll-speed="0.2" className="text-left @desktop:text-[15rem] overflow-hidden relative leading-[1] mix-blend-difference text-white">
          Portfolio
          <span className="text-[1rem] [vertical-align:_text-top] p-2 self-start absolute top-0 right-0 text-white">&copy;</span>
        </h1>
      </LettersSlideInOnView>
    </section>
  )
}