'use client';

import { useEffect } from "react";
import useProgressContext from "./useProgressContext";

import { motion } from "framer-motion";


interface WordsSlideInContentProps
  extends React.PropsWithChildren { }

export default function WordsSlideInContent({ children }: WordsSlideInContentProps) {
  const progress = useProgressContext()!
  const scaleYRange = 3

  const text = children!
    .toString()
    .split("")

  const calulateLetterScaling = (index: number) => (-4 * scaleYRange / Math.pow(text.length, 2)) * index * (index - text.length)

  return (
    <>
      {text?.map((word, i) =>
        <>
          <span className="overflow-hidden inline-block relative">
            <motion.span
              className="relative block"
              key={`WordsSlideIn_innerWord_${i}`}
              style={{
                // y: `${Math.max(1 - progress, 0) * progress * 100}%`,
                opacity: Math.max(progress * (i % text.length), .05),
                // scaleY: Math.max(calulateLetterScaling(i) * progress, .2),
                // rotateX:  Math.PI * progress,
                // scale: 1 - progress * 2
              }}
            >{word}</motion.span>
          </span >
        </>)
      }
    </>
  )
}

// 