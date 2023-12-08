import { Children, cloneElement, useEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

interface Props
  extends React.PropsWithChildren {
  trigger: string,
  scrub?: number | boolean,
}


export default function SmoothScaleInOnView({ trigger, children, scrub = true }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          start: `top top`,
          markers: true,
          end: "bottom bottom",
          trigger,
          scrub
        }
      })

      timeline.to(ref.current, { scale: 1 })
    }, ref)

    return () => context.revert()
  }, [ref])

  const childrenWithRef = Children.map(children, child =>
    cloneElement(child as React.ReactElement, { ref })
  )

  return childrenWithRef
}