'use client';

import { motion } from "framer-motion";

interface LetterMappingProps
  extends React.PropsWithChildren {

}

export default function LetterMapping({ children }: LetterMappingProps) {
  const text = children
    ?.toString()
    .split("")!

  return (
    <>
      {text.map(x => <span className="overflow-hidden inline-block relative"><motion.span className="relative block">{x}</motion.span></span>)}
    </>
  )
}