'use client';

import { motion } from "framer-motion";

interface SkillRootProps {
  children: React.ReactNode
}

export default function SkillRoot({ children }: SkillRootProps) {
  return (
    <article
      data-scroll
      className="w-full grid grid-cols-12 space-x-2 relative py-[3vw]"
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 bg-white z-10 -translate-y-full h-[4px] w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeIn" } }} />
    </article>
  )
}