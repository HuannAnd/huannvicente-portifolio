'use client';

import { useState, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { gsap } from "gsap";

import useSetCursor from "@/hooks/useSetCursor";

import { centerX, centerY, finalRadius, getCirclePosY, width, radius, height } from "./anim"
import useWindowEventListenerEffect from "@/hooks/useWindowEventListener";
import Options from "./Options";


interface HamburgerProps { }


export default function Hamburger({ }: HamburgerProps) {
  const burger = useRef<HTMLDivElement>(null)
  const timeline = gsap.timeline()

  const circle1 = useRef<SVGCircleElement | null>(null);
  const initialCircle1X = centerX;
  const initialCircle1Y = getCirclePosY(1);

  const circle2 = useRef<SVGCircleElement | null>(null);
  const initialCircle2X = initialCircle1X;
  const initialCircle2Y = getCirclePosY(2);

  const circle3 = useRef<SVGCircleElement | null>(null);
  const initialCircle3X = initialCircle1X;
  const initialCircle3Y = getCirclePosY(3);

  const [isOpen, setIsOpen] = useState(false)

  const setCursor = useSetCursor()

  useWindowEventListenerEffect("click", () => {
    if (!isOpen) return
    setIsOpen(false)
    animateHamburger()
  })

  const relocatesCirclesToCenter = () => {
    return timeline
      .to(
        [circle1.current, circle2.current, circle3.current],
        {
          attr: {
            cx: centerX,
            cy: centerY,
            r: finalRadius
          },
          duration: 1,
          ease: "power3.out",
          stagger: .1
        })
  }

  const moveCircleIndexToInitialPosition = (circle: React.MutableRefObject<SVGCircleElement | null>, index: number) => {
    if (!circle.current) return
    const initialCirclePositionX = centerX
    const initialCirclePositionY = getCirclePosY(index)

    return timeline
      .to(
        circle.current,
        {
          attr: {
            cx: initialCirclePositionX,
            cy: initialCirclePositionY,
            scale: 1,
            r: radius,
          },
          duration: 1,
          ease: "power3.out",
        }, 0)
  }

  const shrinkCirclesToInitialPosition = () => {
    moveCircleIndexToInitialPosition(circle1, 1)
    moveCircleIndexToInitialPosition(circle2, 2)
    moveCircleIndexToInitialPosition(circle3, 3)
  }
  function animateHamburger() {
    if (!isOpen) return relocatesCirclesToCenter()
    return shrinkCirclesToInitialPosition()
  }

  function onClick(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation()
    setIsOpen(isOpen => !isOpen)

    animateHamburger()
  }

  return (
    <div
      aria-label="hamburger"
      ref={burger}
      onMouseEnter={() => setCursor({ mode: "invisible" })}
      onMouseLeave={() => setCursor({ mode: "normal" })}
      id="#hamburger"
      className="w-auto mix-blend-difference rounded-full z-[200] fixed group/hamburger cursor-pointer pointer-events-auto gap-2 flex justify-center flex-col text-black text-center top-[3vw] right-[3vw] aspect-square"
    >
      <svg onClick={onClick} width={width} height={height} className="grid place-content-center" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goeyEffect">
            <feGaussianBlur
              stdDeviation={10}
              in="SourceGraphic"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -5"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        <g style={{ filter: "url(#goeyEffect)" }}>
          <circle ref={circle1} cx={initialCircle1X} cy={initialCircle1Y} r={radius} fill="#fff" />
          <circle ref={circle2} cx={initialCircle2X} cy={initialCircle2Y} r={radius} fill="#fff" />
          <circle ref={circle3} cx={initialCircle3X} cy={initialCircle3Y} r={radius} fill="#fff" />
        </g>
      </svg>
      <AnimatePresence>
        {isOpen && <Options />}
      </AnimatePresence>
    </div>
  )
}

