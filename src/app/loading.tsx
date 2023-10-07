"use client"

import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading"
import useFollowerSetState from "@/hooks/useFollowerSetState"

import CustomLoading from "@/animations/scenes/Loading"


export default function Loading() {
  const setCursorState = useFollowerSetState()
  const setIsLoading = useFollowerSetIsLoading()

  setCursorState("normal")
  setIsLoading(true)

  return CustomLoading
}