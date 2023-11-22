"use client"

import { motion } from "framer-motion"

import useSetCursor from "@/hooks/useSetCursor"
import { useEffect } from "react"


export default function Loading() {
  const setCursor = useSetCursor()

  useEffect(() => {
    setCursor({ isLoading: true })
    return () => {
      setCursor({ isLoading: false })
    }
  })

  return (
    // <motion.div
    //   className="w-screen h-screen fixed top-0 bg-white"
    //   initial={{ y: "-100%" }}
    //   animate={{ y: "0%" }}
    //   exit={{ y: "100%" }}
    // />
    <h1></h1>
  )
}