'use client';

import { Variants, motion } from "framer-motion";

import useLocomotiveScroll from "@/contexts/LocomotiveScrollProvider/useLocomotiveScroll";
import useSetCursor from "@/hooks/useSetCursor";

import useSections from "./useSections";

import Option from "./Option";
import isMobileDevice from "@/utils/is-mobile-device";

interface Props { }

const fades: Variants = {
  initial: { opacity: 0 },
  fadeOut: (index: number) => ({ opacity: 0, transition: { delay: index * .1 } }),
  fadeIn: (index: number) => ({ opacity: 1, transition: { delay: index * .1 } })
}

export default function Options({ }: Props) {
  const radius = isMobileDevice ? 150 : 250
  const sections = useSections()
  const amountOfOptions = sections.length


  const sectionsInAscendingCharsOrder = sections.sort((a, b) => a.name.length - b.name.length)

  return (
    <div
      style={{ width: `${radius}px` }}
      className="absolute top-0 -left-[10px] -translate-x-full aspect-square">
      {sectionsInAscendingCharsOrder.map((x, i) => <Option radius={radius} {...x} key={`Option_${i}`} amountOfVertexes={amountOfOptions} index={i} />)}
    </div>
  )
}