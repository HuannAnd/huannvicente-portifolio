"use client"

import React, { forwardRef, memo, useEffect, useRef } from 'react';

import { motion, useMotionValue, useSpring, AnimationScope } from 'framer-motion';

import Load from '@/components/Load';


type FollowerProps = {
  title: string | null,
  isLoading: boolean
}

const springConfig = {
  type: "spring",
  damping: 30,
  stiffness: 100,
  restDelta: 0.001
}

function Follower({ title, isLoading }: FollowerProps, ref: React.ForwardedRef<AnimationScope<SVGSVGElement>>) {
  const svg = useRef<SVGSVGElement>(null!)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const left = useSpring(x, springConfig)
  const top = useSpring(y, springConfig)


  useEffect(() => {
    function handleMouseMove(e: PointerEvent) {
      const size = svg.current;

      const newLeft = e.clientX - 50;
      const newTop = e.clientY - 50;

      x.set(newLeft)
      y.set(newTop)
    }

    window.addEventListener("pointermove", handleMouseMove)

    return () => {
      window.removeEventListener("pointermove", handleMouseMove)
    }
  },
    []
  )

  return (
    <motion.div
      className="pointer-events-none fixed lg:visible md:invisible sm:invisible select-none z-[202] mix-blend-difference w-[102px] aspect-square grid place-content-center m-0 left-0 top-0"
      initial={{ opacity: 0, x: 50, y: -200 }}
      animate={{ opacity: 1, transition: { duration: .7 } }}
      exit={{ opacity: 0 }}
      layout
      style={{ x: left, y: top }}
    >
      <motion.span
        className='font-normal text-[16px] absolute w-full text-center text-white/60 mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        animate={{ opacity: !title ? 0 : 1, transition: { duration: .5 } }}
      >{!isLoading && title}</motion.span>
      {!title && !isLoading && (
        <svg
          className="absolute z-[104] mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" width="24" height="24">
          <path d="M20 11l-9-9-1.41 1.41L16.17 11l-6.59 6.59L11 20l9-9z" fill="white" />
        </svg>
      )
      }
      <motion.svg
        className="w-[102px] aspect-square mix-blend-difference"
        ref={ref as React.Ref<SVGSVGElement>}
      >
        <circle style={{ opacity: isLoading ? 0 : 1 }} className="pointer-events-none" cx="51" cy="51" r="50" stroke="white" strokeWidth="2" fill="none" />
      </motion.svg>
      {isLoading && <Load className='scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />}
    </motion.div>
  );
}

export default memo(forwardRef(Follower))