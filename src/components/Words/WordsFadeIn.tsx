'use client';

import { cva } from 'class-variance-authority';

import { Variants, motion, useInView } from 'framer-motion'
import { VariantProps as CVA } from 'class-variance-authority'

import cn from '@/utils/cn';

const paragraphVariants = cva(
  "text-base ",
  {
    variants: {
      textColor: {
        primary: "text-white",
        secondary: "text-white/50",
        mixed: "text-white even:text-white/50"
      }
    },
    defaultVariants: {
      textColor: "primary"
    }
  }
)

type TSplitTypesValues = "points" | "letters"
interface WordsFadeInProps
  extends React.HTMLAttributes<HTMLParagraphElement>
  , CVA<typeof paragraphVariants> { isInView: boolean, splitType: TSplitTypesValues, delayInSeconds?: number }

const variants = {
  outVision: { opacity: 0 },
  appear: { opacity: 1 }
} as Variants

export default function WordsFadeIn({ children, textColor, className, isInView, splitType = "points" , delayInSeconds = 0, ...rest }: WordsFadeInProps) {
  const spliting = splitType === "letters"
    ? " "
    : splitType === "points"
      ? ". "
      : " "

  const splittedText = children
    ?.toString()
    ?.split(spliting)!

  return (
    <p {...rest} className={cn(paragraphVariants({ className, textColor }))}>
      {splittedText
        .map(
          (word, i) => <motion.span key={`word_filosophy_${i}`} variants={variants} initial="outVision" animate={isInView ? "appear" : "outVision"} transition={{ duration: 1, delay: i * (.03) + delayInSeconds }} className="mb-[3vw] text-white even:text-white/50">{word}{". "}</motion.span>
        )
      }
    </p>
  )
}