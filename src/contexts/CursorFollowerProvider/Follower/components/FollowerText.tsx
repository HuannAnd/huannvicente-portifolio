'use client';

import { motion } from "framer-motion";

import useTitle from "../hooks/useTitle";
import useLoading from "../hooks/useLoading";

interface FollowerTextProps {
  // title: string | null,
  // isLoading: boolean
  // children: React.ReactNode
}

export default function FollowerText({ }: FollowerTextProps) {
  const title = useTitle()
  const isLoading = useLoading()

  return (
    <motion.span
      className='font-normal text-[16px] absolute w-full text-center text-white/60 mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      animate={{ opacity: !title ? 0 : 1, transition: { duration: .5 } }}
    >{!isLoading && title}</motion.span>
  )
}