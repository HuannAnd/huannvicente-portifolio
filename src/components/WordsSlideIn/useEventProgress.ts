import { useEffect, useState } from "react"

export default function useEventProgress(eventProgressName: string) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function menageScrolling(e: Event) {
      setProgress((e as any).detail.progress)
      console.log(`${eventProgressName} has fired `)
    }

    window.addEventListener(eventProgressName, menageScrolling)

    return () => {
      window.removeEventListener(eventProgressName, menageScrolling)
    }
  }, [eventProgressName])

  return progress
}