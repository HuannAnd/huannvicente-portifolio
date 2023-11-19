'use client';

import useLocomotiveScroll from "@/contexts/LocomotiveScrollProvider/useLocomotiveScroll";
import useSetCursor from "@/hooks/useSetCursor";
import { Variants, motion } from "framer-motion";

interface OptionsProps {

}

const fades: Variants = {
  initial: { opacity: 0 },
  fadeOut: (index: number) => ({ opacity: 0, transition: { delay: index * .1 } }),
  fadeIn: (index: number) => ({ opacity: 1, transition: { delay: index * .1 } })
}

export default function Options({ }: OptionsProps) {
  const locomotiveScroll = useLocomotiveScroll()
  const setCursor = useSetCursor()
  function goToSection(sectionHTMLId: string) {
    locomotiveScroll?.scrollTo(sectionHTMLId)
  }

  return (
    <div className="absolute top-0 -left-[10px] -translate-x-full aspect-square w-[250px]">
      <motion.p
        onClick={() => goToSection("#about")}
        onMouseEnter={() => setCursor({ mode: "hovered" })}
        variants={fades}
        initial="initial"
        custom={1}
        animate="fadeIn"
        exit="fadeOut"
        className="top-0 left-0 font-semibold absolute text-white uppercase"
      >About</motion.p>
      <motion.p
        onClick={() => goToSection("#projects")}
        onMouseEnter={() => setCursor({ mode: "hovered" })}
        variants={fades}
        initial="initial"
        custom={2}
        animate="fadeIn"
        exit="fadeOut"
        className="top-1/2 left-1/2 font-semibold -translate-x-1/2 -translate-y-1/2 absolute text-white uppercase"
      >Projects</motion.p>
      <motion.p
        onClick={() => goToSection("#contact")}
        onMouseEnter={() => setCursor({ mode: "hovered" })}
        variants={fades}
        custom={3}
        initial="initial"
        animate="fadeIn"
        exit="fadeOut"
        className="bottom-0 right-0 font-semibold absolute text-white uppercase"
      >Contact</motion.p>
    </div>
  )
}