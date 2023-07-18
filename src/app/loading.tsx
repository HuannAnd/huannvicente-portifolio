"use client"

import { useFollowerContext } from "@/hooks/useFollowerContext"

export default function Loading() {
  const { setIsLoading, updateEvent } = useFollowerContext()

  updateEvent({ type: "normal" })
  setIsLoading(true)

  return (
    <div className="absolute cursor-wait w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="aspect-square mx-auto w-[10vw] border-2 border-white duration-1000 animate-spin"></div>
    </div>
  )
}