'use client';

import React, { useEffect } from 'react';

import { motion, useMotionValue, useSpring, SpringOptions } from 'framer-motion';


interface FollowerRootProps
  extends React.PropsWithChildren,
  SpringOptions { }

// const springConfig = {
//   type: "spring",
//   damping: 10,
//   stiffness: 150,
//   mass: .2,
//   restDelta: 0.001
// }

const isServer = typeof window === "undefined"

export default function FollowerRoot({ children, ...restSpringConfig }: FollowerRootProps) {
  const [x, y] = useFollowerCoordinates(restSpringConfig)
  const cursorWidth = 102
  const cursorHeight = cursorWidth

  const initialXPosition = isServer ? 50 : window.innerWidth / 2 - cursorWidth / 2
  const initialYPosition = isServer ? -200 : window.innerHeight / 2 - cursorHeight / 2

  return (
    <motion.div
      className="pointer-events-none fixed @mobileAndTablet:invisible select-none z-[202] w-[102px] aspect-square grid place-content-center m-0 left-0 top-0"
      initial={{ opacity: 0, x: initialXPosition, y: initialYPosition }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      layout
      style={{ x, y }}
    >
      {children}
    </motion.div>
  )
}

function useFollowerCoordinates(springConfig: SpringOptions) {
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