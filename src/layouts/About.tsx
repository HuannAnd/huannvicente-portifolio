"use client";

import { useEffect, useRef, useState } from "react";

import { motion, stagger, useInView } from 'framer-motion';

import splittedText from "@/utils/splittedText";
import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading";
// import useHamburguerContext from "@/hooks/useNavigationContext";


export default function About() {
  console.log("About was render")

  const ref = useRef<HTMLDivElement>(null!)
  const text = "I'm Frontend developer. My favorite framework is Next.js and for CSS is Tailwind. works since 2018, I like RPG games like Minecraft, Terraria and Gmod. My Hobbies are Gym, programming, and solve Math problems"

  const setIsLoading = useFollowerSetIsLoading()

  useEffect(() => setIsLoading(false))

  return (
    <section
      data-scroll
      data-scroll-section
      ref={ref}
      className="w-full min-h- h-screen max-h-[1200px] overflow-y-hidden text-darkPrimary relative pt-[3vw]
      before:absolute before:w-full before:z-10 before:pointer-events-none before:content-[''] before:-translate-y-1/2 before:h-[5vw] before:top-0 before:left-0 before:rotate-180 before:bg-gradient-to-t before:from-black before:via-black before:to-transparent
      "
    >
      <motion.div
        className="absolute top-0 pointer-events-none left-0 bg-white z-10 -translate-y-full h-[4px] w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeIn" } }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        data-scroll
        data-scroll-speed="-1"
        data-scroll-offset="-100%,0%"
        initial={{ y: "-100%" }}
        className="clip-around w-full h-full bg-primaryColor bg-darkPrimary flex flex-col"
      >
        <div aria-label="About-me" className="border-b-2 border-b-white/50 z-10 bg-darkPrimary">
          <h1 className="font-semibold  block text-[clamp(100px,_10vw,200px)] col-span-12 text-left relative pl-[3vw]">
            ABOUT
          </h1>
        </div>
        <article data-scroll-class="about-me-scroll" id="about-me" className="grow grid align-baseline grid-cols-12 font-light pr-[3vw] pb-[9vw] z-20 col-start-6">
          <div className="col-span-5">
            {/* <ASCIIScene /> */}
          </div>
          <div className="col-span-7 pt-[3vw] pb-[3vw] [grid-column-end:_-1]">
            {splittedText(text)
              .map(
                (text, key) => <motion.span key={key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delayChildren: 1 }} className="mb-[3vw] text-white even:text-white/50">{text}{". "}</motion.span>
              )
            }
          </div>
        </article>
      </motion.div>
    </section>
  )
}