'use client';

import { motion } from "framer-motion";


type SnapShotProps = {
  strategy: "mobile" | "desktop" | "mixed",
  nTh: number,
  children: React.ReactNode
}

export default function RowRoot({ nTh, strategy, children }: SnapShotProps) {
  const speed = 3

  function orquestrator() {
    switch (strategy) {
      case "mixed":
        return "grid grid-cols-[2fr_1fr] gap-[3vw] h-auto"
      case "mobile":
      case "desktop":
      default:
        return "flex lg:flex-row md:flex-row sm:flex-col justify-center gap-[3vw] px-[3vw] items-center min-h-[80vh]"
    }
  }

  const cn = orquestrator()

  return (
    <motion.article
      data-scroll
      data-scroll-speed={nTh * speed}
      className={`${cn} relative flex-wrap select-none min-h-[80vh] flex flex-row justify-center items-center w-full grow`}
    >
      {children}
    </motion.article>
  )
}