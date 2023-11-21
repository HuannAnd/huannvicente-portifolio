import { useState } from "react"

import useWindowEventListenerEffect from "./useWindowEventListener"

interface WindowViewport {
  height: number,
  width: number
}

export default function useWindowViewport() {
  const [windowViewport, setWindowViewport] = useState<WindowViewport>({} as WindowViewport)

  useWindowEventListenerEffect("resize", () => {
    setWindowViewport({ width: window.innerWidth, height: window.innerHeight })
  })

  return windowViewport
}