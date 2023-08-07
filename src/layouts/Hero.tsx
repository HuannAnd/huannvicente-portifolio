"use client";

import { useEffect } from "react";

import { stagger, useAnimate, useInView, motion } from "framer-motion";

import SplitType from "split-type";
import useHamburguerContext from "@/hooks/useHamburguerContext";
import wait from "@/utils/wait";


export default function Hero() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const showHamburguer = useHamburguerContext()

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
          "#text",
          { visibility: "visible" },
          { at: "-1" }
        ],
        [
          "#text .word",
          { y: [16, 0], opacity: [0, 1] },
          { duration: 0.45, times: [0, 1], delay: stagger(0.07), at: "+1" }
        ],
        [
          "button",
          { y: [32, 0], opacity: [0, 1] },
          { duration: 0.45, at: "-0.5" }
        ]
      ])
    }

    return
  }, [isInView]);

  useEffect(() => {
    wait(3000).then(() => showHamburguer(true))
  }, [])


  return (
    <section
      className="h-full grid grid-cols-12 z-10 justify-between gap-x-2 mx-auto clip-around shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] bg-black/50 bg-blend-hard-light items-center top-0 absolute text-black"
      id="hero" 
      ref={scope}
    >
      <div className="h-full col-span-6 mx-auto col-start-4 flex text-white items-center">
        <div className="w-full h-auto my-auto text-center">
          <h1 className="font-bold selection:bg-green-200 selection:text-lightPrimary tracking-tighter leading-none text-white duration-300 ease-fast text-[clamp(48px,_5vw,_140px)] w-auto mb-8 opacity-0">
            Huann Vicente
          </h1>
          <motion.div
            id="text"
            className="w-full italic text-center text-[clamp(25px,_3vw,_48px)] text-white/60 selection:bg-green-200 selection:text-lightPrimary"
            initial={{ visibility: "hidden" }}
          >
            <span className="text-[clamp(25px,_3vw,_48px)]">Web Developer</span>{" & "}
            <span className="text-[clamp(25px,_3vw,_48px)]">Full Stack Designer</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}