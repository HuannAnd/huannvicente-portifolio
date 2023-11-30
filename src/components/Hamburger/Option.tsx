'use client';

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import useSections from "./useSections"
import useSetCursor from "@/hooks/useSetCursor"

import { fades } from "./Option.animation";
import useLocomotiveScroll from "@/contexts/LocomotiveScrollProvider/useLocomotiveScroll";

interface Props {
  index: number,
  name: string,
  id: string,
  amountOfVertexes: number
}

export default function Option({
  index,
  amountOfVertexes,
  name,
  id
}: Props) {
  const radius = 250
  let angleInRadians = index * (Math.PI / (2 * (amountOfVertexes - 1)))
  const left = radius * (1 - Math.cos(angleInRadians))
  const bottom = radius * (1 - Math.sin(angleInRadians))
  const locomotiveScroll = useLocomotiveScroll()

  const setCursor = useSetCursor()
  const setCursorToHoverMode = () => setCursor({ mode: "hovered" })

  const transform = useMotionTemplate`translate(-50%, 50%)`

  const scrollTo = () => locomotiveScroll?.scrollTo(`#${id}`)

  console.log("Id value: ", id)

  return (
    <motion.span
      onClick={scrollTo}
      onMouseEnter={setCursorToHoverMode}
      variants={fades}
      custom={{ left, bottom, index }}
      initial="initial"
      animate="fadeIn"
      exit="fadeOut"
      style={{ transform }}
      className="font-semibold inline-block absolute w-auto text-white uppercase"
    >
      {name}
    </motion.span>
  )
}