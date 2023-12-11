'use client';

import { Children, MutableRefObject, cloneElement, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Props
  extends React.HTMLAttributes<HTMLDivElement> {
  threshold?: number,
  trigger: string,
  delayInSeconds?: number
}

export default function TextFadeInOnView({ children, threshold = 20, trigger, delayInSeconds = 0, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    gsap.registerPlugin(ScrollTrigger)
    const children = ref.current.childNodes
    console.log("children: ", children)

    gsap.set(children, {
      opacity: 0,
      y: "-10%",
      scrollTrigger: {
        start: `-=${threshold}px top`,
        once: true,
        markers: false,
        onEnter: () => { gsap.to(children, { opacity: 1, y: "0%", duration: 1, delay: delayInSeconds }) },
        trigger
      }
    })
  },
    []
  )

  const childrenWithRef = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref })
  )

  return childrenWithRef
}