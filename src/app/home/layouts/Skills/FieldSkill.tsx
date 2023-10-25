'use client';

import { motion } from "framer-motion";

interface FieldSkillProps
  extends React.PropsWithChildren { }

export default function FieldSkill({ children }: FieldSkillProps) {
  return (
    <div className="overflow-hidden">
      <motion.li
        className="py-2 w-full text-white text-[16px] font-normal"
        initial={{ opacity: 0, y: 48 }}
        transition={{ duration: .1 }}
      >{children}</motion.li>
    </div>
  )
}