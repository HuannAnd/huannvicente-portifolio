'use client';

import { Children, cloneElement, useEffect, useRef, useState } from "react"

import SplitType from "split-type";

import gsap from "gsap";


interface LettersSlideinOnHoverProps
  extends React.PropsWithChildren { }


export default function LettersSlideinOnHover({ children }: LettersSlideinOnHoverProps) {
  const [isHover, setIsHover] = useState(false)
  const ref = useRef<HTMLElement>(null!)

  const onMouseEnter = () => setIsHover(true)

  const onMouseLeave = () => setIsHover(false)

  useEffect(() => {
    if(!ref.current) return
    new SplitType(ref.current, { split: "chars" })
    const letters = ref.current.querySelectorAll(".char")

    const timeline = gsap.timeline()

    timeline
      .from(letters, { y: "0%" })
      .to(letters, { y: "-100%", stagger: .01, duration: .3 })
      .to(letters, { y: "100%", duration: 0 })
      .to(letters, { y: "0%", stagger: .01, duration: .3 })

    return () => {
      timeline.kill()
    }
  }, [isHover])

  const childrenWithRef = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref, onMouseEnter, onMouseLeave })
  )

  return childrenWithRef
}