"use client"

import splittedText from "@/utils/splittedText";

import { motion, stagger } from "framer-motion";

import { useEffect, useId, useRef } from "react";

interface SkillProps {
  text: string
  title: string,
  nTh: number
}

export default function Skill({ title, text, nTh }: SkillProps) {
  const id = useId();

  return (
    <article
      data-scroll
      className="w-full grid grid-cols-12 space-x-2 relative py-[3vw]"
    >
      <div
        data-scroll
        className="col-span-7 border-t-2 border-t-white/50 relative flex flex-col"
      >
        <div
          data-scroll
          data-scroll-sticky
          data-scrol-target={`#${id}`}
          id={id}
          className="h-auto ml-[3vw]"
        >
          <motion.small
            initial={{ x: "-50%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1, transition: { duration: .6 } }}

          >.00{nTh}</motion.small>
          <motion.p
            initial={{ x: "-50%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1, transition: { duration: .6, delay: .3 } }}
            className="text-[48px] truncate font-light"
          >{title}</motion.p>
        </div>
        <div className="ml-[3vw] py-[3vw]"></div>
      </div>
      <aside className="col-span-5 py-[9vw] pr-[3vw]" >
        {splittedText(text)
          .map((text, i) => <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: .3, delay: i * .2  } }} key={i} className="text-[20px] text-white even:text-white/50 mb-[3vw]">{text}</motion.p>)}
      </aside>
      <motion.div
        className="absolute bottom-0 left-0 bg-white z-10 -translate-y-full h-[4px] w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeIn" } }} />
    </article>
  );
}