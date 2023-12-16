'use client';

import { useState, useRef, useEffect } from "react"

import { AnimatePresence } from "framer-motion"

import useSetCursor from "@/hooks/useSetCursor"

import { width, height } from "./anim"
import useWindowEventListenerEffect from "@/hooks/useWindowEventListener";

import Options from "./Options"
import Circle from "./Circle"


interface Props { }

export default function Hamburger({ }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const setCursor = useSetCursor()

  useWindowEventListenerEffect("click", () => {
    if (!isOpen) return
    setIsOpen(false)

  })

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    })
  })



  function handleOnClick(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation()
    setIsOpen(isOpen => !isOpen)
  }

  const setCursorToInvisible = () => setCursor({ mode: "invisible" })
  const setCursorToNormal = () => setCursor({ mode: "normal" })

  return (
    <div
      aria-label="hamburger"
      ref={ref}
      onMouseEnter={setCursorToInvisible}
      onMouseLeave={setCursorToNormal}
      id="#hamburger"
      className="w-auto mix-blend-difference rounded-full z-[200] fixed group/hamburger cursor-pointer pointer-events-auto gap-2 flex justify-center flex-col text-black text-center top-[3vw] right-[3vw] aspect-square"
    >
      <svg onClick={handleOnClick} width={width} height={height} className="grid place-content-center" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          {Array.from({ length: 3 }, (_, i) => <Circle key={`Circle_${i}`} index={i} isHamburgerOpen={isOpen} />)}
        </g>
      </svg>
      <AnimatePresence>
        {isOpen ? <Options /> : null}
      </AnimatePresence>
    </div>
  )
}

