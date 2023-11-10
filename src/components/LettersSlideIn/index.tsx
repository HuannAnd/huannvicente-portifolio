'use client';

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { VariantProps, cva } from "class-variance-authority"

import cn from "@/utils/cn"


const lettersVariants = cva(
  "font-normal [line-height:_0]",
  {
    variants: {
      textColor: {
        primary: "text-white font-normal",
        secondary: "text-white/50",
        mixed: "text-white even:text-white/50"
      }
    },
    defaultVariants: {
      textColor: "primary"
    }
  }
)

interface WordsSlideinProps
  extends React.HTMLAttributes<HTMLParagraphElement>
  , VariantProps<typeof lettersVariants> { eventProgress: string }


export default function WordsSlidein({ children, className, textColor, eventProgress, ...rest }: WordsSlideinProps) {
  const ref = useRef<HTMLParagraphElement>(null!)
  const [progress, setProgress] = useState(0)

  const text = children
    ?.toString()
    ?.split("")

  useEffect(() => {
    function menageScrolling(e: Event) {
      setProgress((e as any).detail.progress)
    }

    window.addEventListener(eventProgress, menageScrolling)

    return () => {
      window.removeEventListener(eventProgress, menageScrolling)
    }
  }, [])


  return (
    <p {...rest} ref={ref} data-scroll data-scroll-speed="0.1" data-scroll-event-progress={eventProgress} className={cn(lettersVariants({ className, textColor }))}>
      {text?.map((word, i) =>
        <>
          <span className="overflow-hidden text-inherit font-[inherit] inline-block relative">
            <motion.span
              className="relative block text-inherit font-[inherit]"
              transition={{ duration: i * .01 }}
              style={{
                y: `${(i % 2 === 0 ? 1 : -1) * progress * 100}%`,
                opacity: 1 * (1 - progress * 2 / (text.length / i + 1))   
              }}
            >{word}</motion.span>
          </span>
          {" "}
        </>)}
    </p>
  )
}