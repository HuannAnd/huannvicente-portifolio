'use client';

import { Variants, motion } from "framer-motion";

import useLocomotiveScroll from "@/contexts/LocomotiveScrollProvider/useLocomotiveScroll";
import useSetCursor from "@/hooks/useSetCursor";

import useSections from "./useSections";

import Option from "./Option";

interface Props { }

const fades: Variants = {
  initial: { opacity: 0 },
  fadeOut: (index: number) => ({ opacity: 0, transition: { delay: index * .1 } }),
  fadeIn: (index: number) => ({ opacity: 1, transition: { delay: index * .1 } })
}

export default function Options({ }: Props) {
  const sections = useSections()
  const amountOfOptions = sections.length

  const sectionsInAscendingCharsOrder = sections.sort((a, b) => a.name.length - b.name.length)

  return (
    <div className="absolute top-0 -left-[10px] -translate-x-full aspect-square w-[250px]">
      {sectionsInAscendingCharsOrder.map((x, i) => <Option {...x} key={`Option_${i}`} amountOfVertexes={amountOfOptions} index={i} />)}
    </div>
  )
}