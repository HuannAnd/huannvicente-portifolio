"use client";

import WordsSlidein from "@/components/WordsSlideIn";
import LettersMapping from '@/components/LettersMapping'

import Windows11Scene from "@/three/scenes/Windows11Wallpaper";


import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Hero() {
  const firstTitle = useRef<HTMLHeadElement>(null)
  const secondTitle = useRef<HTMLHeadElement>(null)
  const thirdTitle = useRef<HTMLHeadElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const allSpans = document.querySelectorAll("#hero span > span")
    gsap.set(allSpans, {
      y: "-100%",
      filter: "blur(10px)",
      opacity: 0,
    })

    revealTitle("#heroInitial")

    gsap.set(secondTitle.current, {
      scrollTrigger: {
        trigger: "#heroMiddle",
        start: "top top",
        markers: true,
        once: true,
        onEnter: () => { revealTitle("#heroMiddle") }
      }
    })

    gsap.set(thirdTitle.current, {
      scrollTrigger: {
        trigger: "#heroEnd",
        start: "top top",
        once: true,
        onEnter: () => { revealTitle("#heroEnd") }
      }
    })
  }, [])

  function revealTitle(htmlElementId: string) {
    console.log("revealTitle has fired")
    const innerSpans = document.querySelectorAll(`${htmlElementId} span > span`)

    gsap.to(innerSpans, {
      y: "0%",
      delay: htmlElementId === "#heroInitial" ? 2 : 0,
      filter: "blur(0px)",
      opacity: 1,
      ease: "power4.out",
      duration: .8,
      stagger: .02
    })
  }



  return (
    <section
      className="min-h-[300vh] grid grid-rows-4 w-screen mx-auto z-50 gap-x-2 text-black"
      id="hero"
    >
      <Windows11Scene />
      <article data-scroll className="w-full grid place-content-center h-screen text-center">
        <h1 ref={firstTitle as any} id="heroInitial" className="text-center ml-16 py-[9vw] text-white leading-[80%] uppercase text-[7rem]">
          <LettersMapping>Huann</LettersMapping> <LettersMapping>Vicente</LettersMapping>
        </h1>
      </article>
      <article data-scroll-call={() => revealTitle("#heroMiddle")} className="w-full flex h-[200dvh] justify-start items-baseline">
        <h1 id="heroMiddle" className="text-left sticky top-0 ml-16 py-[9vw] text-white leading-[80%] uppercase text-[7rem]">
          <LettersMapping>Explore</LettersMapping>
          <br />
          <LettersMapping>Enjoy</LettersMapping>
          <br />
          <LettersMapping>The Worldwide Web</LettersMapping>
        </h1>
      </article>
      <article data-scroll-call={() => revealTitle("#heroMiddle")} className="w-full flex h-[200dvh] justify-end items-center">
        <h1 id="heroEnd" className="text-left sticky top-0 mr-16 py-[9vw] text-white leading-[80%] uppercase text-[7rem]">
          <LettersMapping>Dont</LettersMapping> <LettersMapping>Forget</LettersMapping>
          <br />
          <LettersMapping>Me</LettersMapping>
        </h1>
      </article>
    </section>
  )
}