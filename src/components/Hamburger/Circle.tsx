'use client';

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { centerX, centerY, getCirclePosY, finalRadius, radius } from "./anim"

interface CircleProps {
  isHamburgerOpen: boolean,
  index: number
}


export default function Circle({
  isHamburgerOpen,
  index

}: CircleProps) {
  const ref = useRef<SVGCircleElement>(null)
  const initialX = centerX
  const initialY = getCirclePosY(index + 1)
  const staggeredDelay = index * .01

  const relocateCircleToCenter = () => {
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
          delay: staggeredDelay
        })
  }

  const moveCircleToInitialPosition = () => {
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
    if (isHamburgerOpen) {
      relocateCircleToCenter()
    } else {
      moveCircleToInitialPosition()
    }
  }, [isHamburgerOpen])

  return (
    <circle ref={ref} fill="#fff" />
  )
}