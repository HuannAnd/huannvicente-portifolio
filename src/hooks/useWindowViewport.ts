import { useState } from "react"

import useWindowEventListenerEffect from "./useWindowEventListener"

import isServerRendering from "@/utils/is-server-rendering"

interface WindowViewport {
  height: number,
  width: number
}



export default function useWindowViewport() {
  let initialViewportValues = { width: 1000, height: 1000 }
  if (isServerRendering) { initialViewportValues = { width: 1000, height: 1000 } }
  else { initialViewportValues = { width: window.innerWidth, height: window.innerHeight } }

  const [windowViewport, setWindowViewport] = useState<WindowViewport>(initialViewportValues)

  useWindowEventListenerEffect("resize", () => {
    setWindowViewport({ width: window.innerWidth, height: window.innerHeight })
  })

  return windowViewport
}