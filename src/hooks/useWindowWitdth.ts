import { useEffect, useState } from "react"

export default function useWindowWidth() {
  const [widht, setWidth] = useState(1440)

  useEffect(() => {
    function handleWindowResizig() {
      setWidth(window.innerWidth)
      console.log("Window Resized")
      console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResizig)

    return () => {
      window.removeEventListener("resize", handleWindowResizig)
    }
  },
    []
  )

  return widht
}