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
  y: "-100%",
  filter: "blur(5px)",
  opacity: 0,
}

const onView = {
  y: "0%",
  filter: "blur(0px)",
  opacity: 1,
  ease: "power4.out",
  duration: 1.2,
  stagger: 0.05
}

export default function LettersSlideInOnView({ children, trigger, threshold = 20, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null!)

  useLayoutEffect(() => {
    if (!ref.current) return
    gsap.registerPlugin(ScrollTrigger)
    new SplitType(ref.current, { types: "words" })
    const letters = ref.current.querySelectorAll(".word")

    const timeline = gsap.timeline()

    timeline
      .set(letters, offView)
      .to(letters, {
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