'use client';

import { Children, cloneElement, useEffect, useRef, useState } from "react"

import SplitType from "split-type";

import gsap from "gsap";
import useIsHoveredContext from "./useIsHoveredContext";


interface Props
  extends React.PropsWithChildren { }


export default function Trigger({ children }: Props) {
  const isHovered = useIsHoveredContext()
  const timelineRef = useRef<gsap.core.Timeline>()
  const ref = useRef<HTMLElement>(null!)

  useEffect(() => {
    if (!ref.current) return
    new SplitType(ref.current, { split: "chars" })
    const letters = ref.current.querySelectorAll(".char")

    if (!isHovered) return
    timelineRef.current = gsap.timeline()

    timelineRef.current
      .from(letters, { y: "0%" })
      .to(letters, { y: "-100%", stagger: .01, duration: .3 })
      .to(letters, { y: "100%", duration: 0 })
      .to(letters, { y: "0%", stagger: .01, duration: .3 })

    return () => {
      timelineRef.current?.kill()
    }
  }, [isHovered])

  const childrenWithRef = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref })
  )

  return childrenWithRef
}