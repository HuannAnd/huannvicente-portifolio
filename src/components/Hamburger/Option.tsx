'use client';

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import useSections from "./useSections"
import useSetCursor from "@/hooks/useSetCursor"

import { fades } from "./Option.animation";
import useLocomotiveScroll from "@/contexts/LocomotiveScrollProvider/useLocomotiveScroll";
import useRedirectWithPageTransition from "@/hooks/useRedirectWithPageTransition";

interface Props {
  index: number,
  path: string,
  alias: string,
  radius: number,
  amountOfVertexes: number
}

export default function Option({
  index,
  amountOfVertexes,
  path,
  radius,
  alias
}: Props) {
  let angleInRadians = amountOfVertexes <= 1
    ? Math.PI / 4
    : index * (Math.PI / (2 * (amountOfVertexes - 1)))
  const left = radius * (1 - Math.cos(angleInRadians))
  const bottom = radius * (1 - Math.sin(angleInRadians))
  const pageTransitionTo = useRedirectWithPageTransition()

  const setCursor = useSetCursor()
  const setCursorToHoverMode = () => setCursor({ mode: "hovered" })

  const transform = useMotionTemplate`translate(-50%, 50%)`

  const redirectToPage = () => {pageTransitionTo(path)}

  return (
    <motion.h5
      onClick={redirectToPage}
      onMouseEnter={setCursorToHoverMode}
      variants={fades}
      custom={{ left, bottom, index }}
      initial="initial"
      animate="fadeIn"
      exit="fadeOut"
      style={{ transform }}
      className="font-semibold w-max inline-block absolute text-white uppercase"
    >
      {alias}
    </motion.h5>
  )
}