'use client';

import { forwardRef } from "react";

import { AnimationScope, motion } from "framer-motion";

import useLoading from "./hooks/useLoading";

interface FollowerCircleProps {
  // isLoading: boolean
}

function FollowerCircle({ }: FollowerCircleProps, ref: React.ForwardedRef<AnimationScope<SVGSVGElement>>) {
  console.log("FollowerCircle has render")
  const isLoading = useLoading()

  // console.log("IsLoading inside FollowerCircle: ", isLoading)

  return (
    <motion.svg
      className="w-[102px] aspect-square"
      ref={ref as any}
    >
      <circle
        style={{ opacity: isLoading ? 0 : 1 }}
        className="pointer-events-none"
        cx="51" cy="51" r="40"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </motion.svg>
  )
}

export default forwardRef(FollowerCircle)