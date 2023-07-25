'use client';

import { useEffect } from "react";

import { motion, stagger, useAnimate, useInView } from "framer-motion";

import SplitType from "split-type";

import { useFollowerContext } from "@/hooks/useFollowerContext";


interface OverviewProps {
  name: string,
  description: string
}

export default function Overview({ name, description }: OverviewProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

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
  }, [isInView]);

  const { updateEvent, setTitle } = useFollowerContext()

  return (
    <section ref={scope} data-scroll-section data-scroll className="w-full text-[#bbb] grid place-content-center text-center h-screen">
      <div className="relative">
        <motion.h1
          data-scroll
          initial={{ opacity: 0 }}
          className="text-[clamp(48px,_5vw,_140px)] mb-8 text-center duration-300 ease-fast text-white font-bold tracking-tighter">{name}</motion.h1>
        <motion.q
          id="text"
          className="text-[clamp(25px,_3vw,_48px)] px-[9vw] duration-300 ease-fast block text-center text-white/60 font-normal">{description}</motion.q>
        <div className="grid grid-cols-2 w-full h-auto gap-4">
          <a
            className="text-white py-[3vw] translate-y-full block font-regular border-t-2 border-t-[#222]"
            onMouseEnter={() => { updateEvent({ type: "hovered" }); setTitle("See") }}
            onMouseLeave={() => { updateEvent({ type: "normal" }); setTitle(null) }}
            href="#">Live at</a>
          <a
            className="text-white py-[3vw] translate-y-full block font-regular border-t-2 border-t-[#222]"
            onMouseEnter={() => { updateEvent({ type: "hovered" }); setTitle("See") }}
            onMouseLeave={() => { updateEvent({ type: "normal" }); setTitle(null) }}
            href="#">See Repo</a>
        </div>

      </div>
    </section>
  )
} 