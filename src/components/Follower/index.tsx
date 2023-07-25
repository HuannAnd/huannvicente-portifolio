"use client"

import React, { MutableRefObject, forwardRef, memo, useEffect, useRef } from 'react';

import { motion, useMotionValue, useSpring, AnimationScope } from 'framer-motion';
import Load from '../Load';


type FollowerProps = {
  title: string | null,
  isLoading: boolean
}

function Follower({ title, isLoading }: FollowerProps, ref: React.ForwardedRef<AnimationScope<SVGSVGElement>>) {
  const svg = useRef<SVGSVGElement>(null!)
  const springConfig = {
    type: "spring",
    damping: 30,
    stiffness: 100,
    restDelta: 0.001
  }

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const left = useSpring(x, springConfig)
  const top = useSpring(y, springConfig)

  // const [hue, sat, light] = useHSLAPositioner(ref as MutableRefObject<SVGSVGElement>)

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
    <>
      <motion.div
        className="pointer-events-none fixed select-none z-50 mix-blend-difference w-[102px] aspect-square grid place-content-center m-0 left-0 top-0"
        initial={{ opacity: 0, x: 50, y: -200 }}
        animate={{ opacity: 1, transition: { duration: .7 } }}
        exit={{ opacity: 0 }}
        layout
        style={{ x: left, y: top }}
      >
        <motion.span
          className='font-light text-[16px] absolute w-full text-center text-white/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          animate={{ opacity: !title ? 0 : 1, transition: { duration: .5 } }}
        >{!isLoading && title}</motion.span>
        <motion.svg
          className="w-[102px] aspect-square mix-blend-difference"
          ref={ref as React.Ref<SVGSVGElement>}
        >
          <circle style={{ opacity: isLoading ? 0 : 1 }} className="pointer-events-none" cx="51" cy="51" r="50" stroke="white" strokeWidth="2" fill="none" />
        </motion.svg>
        {isLoading && <Load className='scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />}
      </motion.div>
    </>
  );
}

export default memo(forwardRef(Follower))