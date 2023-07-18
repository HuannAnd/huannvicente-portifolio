"use client";

import { useRef } from "react";

import { SpringOptions, motion, useInView, useScroll, useTransform } from 'framer-motion';

import evalWithPercentage from "@/utils/evalWithPercentage";
import splittedText from "@/utils/splittedText";
import Loading from "@/app/loading";
import Load from "@/components/Follower/Load";


export default function About() {
  const ref = useRef<HTMLDivElement>(null!)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const springConfig = {
    damping: 20,
    stiffness: 100,
  } as SpringOptions


  const y = useTransform(scrollYProgress, [0, 1], ["-150%", "0%"], { clamp: false })

  const pY = useTransform(
    y,
    (value) => {
      const percentageResult = evalWithPercentage(value);
      const newValue = `${percentageResult}%`;
      // console.log(newValue);

      return newValue;
    }
  )

  const text = "I'm Frontend developer. My favorite framework is Next.js and for CSS is Tailwind. works since 2018, I like RPG games like Minecraft, Terraria and Gmod. My Hobbies are Gym, programming, and solve Math problems"

  return (
    <section
      data-scroll
      data-scroll-section
      ref={ref}
      className="w-full min-h- h-screen max-h-[1200px] overflow-y-hidden text-darkPrimary relative pt-[3vw]
      before:absolute before:w-full before:z-10 before:pointer-events-none before:content-[''] before:-translate-y-1/2 before:h-[5vw] before:top-0 before:left-0 before:rotate-180 before:bg-gradient-to-t before:from-black before:via-black before:to-transparent
      "
    >
      <motion.div className="absolute top-0 pointer-events-none left-0 bg-white z-10 -translate-y-full h-[4px] w-full" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeIn" } }}></motion.div>
      <motion.div
        data-scroll
        data-scroll-speed="-1"
        data-scroll-offset="-100%,0%"
        initial={{ y: "-100%" }}
        className="clip-around w-full h-full bg-primaryColor bg-darkPrimary flex flex-col"
      >
        <div className="border-b-2 border-b-white/50 z-10 bg-darkPrimary">
          <h1 className="font-semibold  block text-[clamp(140px,_10vw,200px)] col-span-12 text-left relative pl-[3vw]">
            ABOUT
            {/* <span className="absolute text-[.66em] ease-fast z-50 uppercase text-white/30 translate-y-1/2">me</span> */}
          </h1>
        </div>
        <article data-scroll-class="about-me-scroll" id="about-me" className="grow grid align-baseline grid-cols-12 font-light pr-[3vw] z-20 col-start-6">
          <div className="col-span-7 pt-[3vw] pb-[3vw] [grid-column-end:_-1] ">
            {splittedText(text)
              .map(
                (text, key) => <motion.span key={key} className="mb-[3vw] text-white even:text-white/50">{text}{". "}</motion.span>
              )
            }
          </div>
        </article>
      </motion.div>
    </section>
  )
}