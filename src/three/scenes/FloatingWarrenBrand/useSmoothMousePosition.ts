import useWindowEventListenerEffect from "@/hooks/useWindowEventListener"

import { useMotionValue, useSpring } from "framer-motion"

export default function useSmoothMousePosition() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  }

  useWindowEventListenerEffect("mousemove", (e: Event) => {
    const mouseXPosition = (e as MouseEvent).clientX
    const mouseYPosition = (e as MouseEvent).clientY

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const xPercentage = mouseXPosition / windowWidth
    const yPercentage = mouseYPosition / windowHeight

    mouse.x.set(xPercentage)
    mouse.y.set(yPercentage)
  })

  return smoothMouse
}