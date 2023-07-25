'use client';

import { renderToString } from 'react-dom/server'

import splittedText from "@/utils/splittedText";

import { motion } from "framer-motion";

interface SkillAsideProps {
  children: React.ReactNode

}

export default function SkillAside({ children }: SkillAsideProps) {
  const text = renderToString(children as any)

  return (
    <aside className="col-span-5 py-[9vw] pr-[3vw]" >
      {splittedText(text)
        .map((text, i) => <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: .3, delay: i * .2 } }} key={i} className="text-[20px] text-white even:text-white/50 mb-[3vw]">{text}</motion.p>)}
    </aside>
  )
}