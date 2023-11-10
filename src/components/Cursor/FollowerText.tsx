'use client';

import { motion } from "framer-motion";

import useTitle from "./hooks/useTitle";
import useLoading from "./hooks/useLoading";

interface FollowerTextProps { }

export default function FollowerText({ }: FollowerTextProps) {
  console.log("FollowerText has render")
  const title = useTitle()
  // console.log("title inside FollowerText: ", title)

  const isLoading = useLoading()
  // console.log("IsLoading inside FollowerText: ", isLoading)



  return (
    <motion.span
      className='font-normal text-[16px] absolute w-full text-center text-white/60 mix-blend-difference top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      animate={{ opacity: !title ? 0 : 1, transition: { duration: .5 } }}
    >{!isLoading && title}</motion.span>
  )
}