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

export default function LettersSlideInOnView({ children, trigger, threshold = 20, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null!)

  useEffect(() => {
    if (!ref.current) return
    gsap.registerPlugin(ScrollTrigger)
    new SplitType(ref.current, { types: "chars" })
    const letters = ref.current.querySelectorAll(".char")

    const timeline = gsap.timeline()

    timeline
      .set(letters, {
        y: "-100%",
        filter: "blur(10px)",
        opacity: 0,
      })
      .to(letters, {
        scrollTrigger: {
          trigger,
          start: `-=${threshold}px top`,
          once: true,
          onEnter: () => {
            gsap.to(letters, {
              y: "0%",
              delay,
              filter: "blur(0px)",
              opacity: 1,
              ease: "power4.out",
              duration: .8,
              stagger: .02
            })
          }
        },
      })

    return () => {
      timeline.kill()
    }
  },
    []
  )

  const childrenWithRef = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref })
  )


  return childrenWithRef
}