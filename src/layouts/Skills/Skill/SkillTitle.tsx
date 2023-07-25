'use client';

import { motion } from "framer-motion";

interface SkillTitleProps {
  title: string,
  nTh: number
}

export default function SkillTitle({ title, nTh }: SkillTitleProps) {
  return (
    <div className="h-auto ml-[3vw]">
      <motion.small
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1, transition: { duration: .6 } }}

      >.00{nTh}</motion.small>
      <motion.p
        initial={{ x: "-50%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1, transition: { duration: .6, delay: .3 } }}
        className="text-[48px] truncate font-light"
      >{title}</motion.p>
    </div>
  )
}