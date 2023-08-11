'use client';

import React, { useEffect } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';


interface FollowerRootProps {
  children: React.ReactNode
}

const springConfig = {
  type: "spring",
  damping: 30,
  stiffness: 150,
  restDelta: 0.001
}

export default function FollowerRoot({ children }: FollowerRootProps) {
  const [x, y] = useFollowerCoordinates()

  return (
    <motion.div
      className="pointer-events-none fixed lg:visible md:invisible sm:invisible select-none z-[202] mix-blend-difference w-[102px] aspect-square grid place-content-center m-0 left-0 top-0"
      initial={{ opacity: 0, x: 50, y: -200 }}
      animate={{ opacity: 1, transition: { duration: .7 } }}
      exit={{ opacity: 0 }}
      layout
      style={{ x, y }}
    >
      {children}
    </motion.div>
  )
}

function useFollowerCoordinates() {
  const left = useMotionValue(0)
  const top = useMotionValue(0)

  const x = useSpring(left, springConfig)
  const y = useSpring(top, springConfig)

  useEffect(() => {
    function handleMouseMove(e: PointerEvent) {
      const newLeft = e.clientX - 50;
      const newTop = e.clientY - 50;

      left.set(newLeft)
      top.set(newTop)
    }

    window.addEventListener("pointermove", handleMouseMove)

    return () => {
      window.removeEventListener("pointermove", handleMouseMove)
    }
  },
    []
  )

  return [x, y]
}