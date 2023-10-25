'use client';

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

import { VariantProps, cva } from "class-variance-authority";

import cn from "@/utils/cn";



const lettersVariants = cva(
  "font-normal ",
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
  , VariantProps<typeof lettersVariants> { once?: boolean }


export default function WordsSlidein({ children, className, textColor, once = false, ...rest }: WordsSlideinProps) {
  const ref = useRef<HTMLParagraphElement>(null!)
  const isInView = useInView(ref, { once })

  const text = children
    ?.toString()
    ?.split(" ")


  return (
    <p {...rest} ref={ref} className={cn(lettersVariants({ className, textColor }))}>
      {text?.map((word, i) => <><span className="overflow-hidden"><motion.span initial={{ y: "-100%" }} transition={{ duration: i * .01 }} animate={isInView ? "0%" : "-100%"}>{word}</motion.span></span></>)}
    </p>
  )
}