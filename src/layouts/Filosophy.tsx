'use client';

import { useEffect } from "react";

import { motion, stagger, useAnimate, useInView } from "framer-motion";

import SplitType from "split-type";

import splittedText from "@/utils/splittedText";


interface FilosophyProps {
  author: string,
  phrase: string
}

export default function Filosophy({ author, phrase }: FilosophyProps) {
  const splittedText = phrase.split(" ")

  return (
    <motion.section
      data-scroll-section
      data-scroll

      transition={{ duration: 1 }}
      className="w-full flex flex-col ab justify-center items-center clip-around shadow-[0_0_0_100vmax_#141414] h-auto p-[9vw] bg-[#141414]">
      <q
        id="filosophy"
        className="font-light w-full flex-row flex h-auto flex-wrap gap-x-2 text-[20px] px-[9vw] text-[#999]">
        {splittedText
          .map(
            (text, key) => (
              <div
                className="overflow-hidden text-[#bbb] even:text-[#888] h-auto w-auto"
                key={key}
              >
                <motion.span className="text-[1.5em] block relative" initial={{ y: "-100%" }} viewport={{ once: true }} whileInView={{ y: "0%" }} transition={{ duration: 1, delay: key * .1 }}>{text}{" "}</motion.span>
              </div>
            )
          )
        }
      </q>
      <small className="text-white block ml-auto text-right mt-8 font-light" title="">- {author}</small>
    </motion.section>
  )
}