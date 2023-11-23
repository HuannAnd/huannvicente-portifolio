import { useState } from "react"

import useWindowEventListenerEffect from "./useWindowEventListener"

interface WindowViewport {
  height: number,
  width: number
}

const isServerRendering = typeof window === "undefined"

export default function useWindowViewport() {
  const [windowViewport, setWindowViewport] = useState<WindowViewport>({ width: 1000, height: 1000 } as WindowViewport)

  useWindowEventListenerEffect("resize", () => {
    if (isServerRendering) {
      setWindowViewport({ width: 1000, height: 1000 })
    } else {
      setWindowViewport({ width: window.innerWidth, height: window.innerHeight })
    }
  })

  return windowViewport
}