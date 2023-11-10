"use client"

import CustomLoading from "@/three/scenes/Loading"

import useSetCursor from "@/hooks/useSetCursor"


export default function Loading() {
  const setCursor = useSetCursor()

  setCursor({ isLoading: true })

  return <CustomLoading />
}