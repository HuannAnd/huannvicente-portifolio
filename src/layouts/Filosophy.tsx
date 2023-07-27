'use client';

import splittedText from "@/utils/splittedText";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import SplitType from "split-type";

interface FilosophyProps {
  author: string,
  phrase: string
}

export default function Filosophy({ author, phrase }: FilosophyProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    new SplitType("filosophy", { types: "lines" })

    animate([
      ["#filosophy .line", {}]
    ])

  },
    [isInView]
  )

  return (
    <motion.section
      data-scroll-section
      data-scroll
      ref={scope}
      transition={{ duration: 1 }}
      className="w-full invert flex flex-col ab justify-center items-center clip-around shadow-[0_0_0_100vmax_#141414] h-auto p-[9vw] bg-[#141414]">
      <q
        id="filosophy"
        className="font-light w-full text-[20px] px-[9vw] text-[#bbb]">
        {splittedText(phrase)
          .map(
            (text, key) => <span className="text-[1.5em] text-[#bbb] even:text-[#888]" key={key}>{text}{". "}</span>
          )
        }
      </q>
      <small className="text-white block ml-auto text-right mt-8 font-light" title="">- {author}</small>
    </motion.section>
  )
}