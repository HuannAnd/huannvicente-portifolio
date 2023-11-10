import { useEffect, useState } from "react"

interface WindowViewport {
  height: number, width: number
}

export default function useWindowViewport() {
  const [windowViewport, setWindowViewport] = useState<WindowViewport>({} as WindowViewport)

  useEffect(() => {
    const handleWindowResizig = () => setWindowViewport({ width: window.innerWidth, height: window.innerHeight })

    window.addEventListener("resize", handleWindowResizig)

    return () => {
      window.removeEventListener("resize", handleWindowResizig)
    }
  },
    []
  )

  return windowViewport
}