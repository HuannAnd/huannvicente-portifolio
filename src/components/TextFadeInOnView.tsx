'use client';

import { Children, cloneElement, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Props
  extends React.HTMLAttributes<HTMLDivElement> {
  threshold?: number,
  trigger: string,
  delayInSeconds?: number
}

export default function TextFadeInOnView({ children, threshold = 20, trigger, delayInSeconds = 0, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)"
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions!

        if (isDesktop) {
          gsap.set(ref.current, {
            opacity: 0,
            y: "-10%",
            scrollTrigger: {
              start: `-=${threshold}px center`,
              once: true,
              markers: false,
              onEnter: () => { gsap.to(ref.current, { opacity: 1, y: "0%", duration: 1.2, delay: delayInSeconds }) },
              trigger
            }
          })
        } else if (isMobile) {
          gsap.set(ref.current, {
            opacity: 0,
            y: "-5%",
            scrollTrigger: {
              start: `-=${threshold}px center`,
              once: true,
              markers: false,
              onEnter: () => { gsap.to(ref.current, { opacity: 1, y: "0%", duration: 1.2, delay: delayInSeconds }) },
              trigger
            }
          })
        }

      }
    )

    return () => mm.revert()
  },
    []
  )

  const childrenWithRef = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement, { ref })
  )

  return childrenWithRef
}