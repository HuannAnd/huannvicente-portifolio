'use client';

import { Children, cloneElement, useEffect, useRef } from "react"

import SplitType from "split-type";

import gsap from "gsap";
import useTriggerRefContext from "./useTriggerRefContext";


interface Props
  extends React.PropsWithChildren { }


export default function Trigger({ children }: Props) {
  const triggerRef = useTriggerRefContext()
  const ref = useRef<HTMLElement>(null!)

  useEffect(() => {
    if (!ref.current) return
    let isAnimating = false
    new SplitType(ref.current, { split: "chars" })
    const letters = ref.current.querySelectorAll(".char")
    const timeline = gsap.timeline()

    const onMouseEnterInTheTrigger = async () => {
      if (isAnimating) return
      isAnimating = true

      await timeline
        ?.from(letters, { y: "0%" })
        .to(letters, { y: "-100%", stagger: .01, duration: .3 })
        .to(letters, { y: "100%", duration: 0 })
        .to(letters, { y: "0%", stagger: .01, duration: .3 })

      isAnimating = false
      return
    }

    triggerRef?.current?.addEventListener("mouseenter", onMouseEnterInTheTrigger)

    return () => {
      triggerRef?.current?.removeEventListener("mouseenter", onMouseEnterInTheTrigger)
    }
  }, [triggerRef, ref])

  const childrenWithRef = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref })
  )

  return childrenWithRef
}