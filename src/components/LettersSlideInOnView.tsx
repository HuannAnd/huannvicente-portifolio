'use client';

import { Children, cloneElement, useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface Props
  extends React.PropsWithChildren,
  Required<Pick<ScrollTrigger.Vars, "trigger">> {
  threshold?: number,
  delay?: number
}

const offView = {
  y: "100%",
  opacity: 0,
  overflow: "hidden",
  contain: "paint"
}

const onView = {
  y: "0%",
  opacity: 1,
  ease: "power4.inOut",
  duration: 0.8,
  stagger: 0.03
}

export default function LettersSlideInOnView({ children, trigger, threshold = 20, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null!)

  useLayoutEffect(() => {
    if (!ref.current) return
    gsap.registerPlugin(ScrollTrigger)
    new SplitType(ref.current, { types: "words" })
    const letters = ref.current.querySelectorAll(".word")

    const timeline = gsap.timeline()
    timeline.set(ref.current, { overflow: "hidden" })
    timeline.set(letters, offView)
    timeline.to(letters, {
      scrollTrigger: {
        trigger,
        start: `-=${threshold}px center`,
        once: true,
        onEnter: () => {
          gsap.to(letters, { ...onView, delay })
        }
      },
    })

    return () => {
      timeline.revert()
    }
  }, [])

  const childrenWithRef = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref })
  )


  return childrenWithRef
}