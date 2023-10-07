import { useLayoutEffect, useState } from "react"

export default function useDelayTime(delayTimeInMs = 3000) {
  const [isPending, setIsPending] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsPending(false)
    }, delayTimeInMs)
  }, [])

  return isPending
}