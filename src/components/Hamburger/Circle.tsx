'use client';

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { centerX, centerY, getCirclePosY, finalRadius, radius } from "./anim"

interface CircleProps {
  isHamburgerOpen: boolean,
  timeline: gsap.core.Timeline,
  index: number
}


export default function Circle({
  isHamburgerOpen,
  timeline,
  index

}: CircleProps) {
  const ref = useRef<SVGCircleElement>(null)
  const initialX = centerX
  const initialY = getCirclePosY(index)

  const realocateCircleToCenter = () => {
    return gsap
      .to(
        ref.current,
        {
          attr: {
            cx: centerX,
            cy: centerY,
            r: finalRadius
          },
          duration: 1,
          ease: "power3.out",
          delay: index * .1
        })
  }

  const moveCircleToInitalPosition = () => {
    return gsap
      .to(
        ref.current,
        {
          attr: {
            cx: initialX,
            cy: initialY,
            scale: 1,
            r: radius,
          },
          duration: 1,
          ease: "power3.out",
        })
  }

  useEffect(() => {
    if (isHamburgerOpen) realocateCircleToCenter()
    moveCircleToInitalPosition()
  }, [isHamburgerOpen])

  return (
    <circle ref={ref} cx={initialX} cy={initialY} r={radius} fill="#fff" />
  )
}