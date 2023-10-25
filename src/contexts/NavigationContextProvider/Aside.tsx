'use client';

import { memo, useEffect } from "react";

import { Variants, motion } from "framer-motion";

import useAsideContext from "@/hooks/useAsideContext";

import generatePyramidArray from "@/utils/generatedPyramidArray";
import useSetCursor from "@/hooks/useSetCursor";

interface AsideProps {
  canBeShow: boolean
  navigation: { title: string, onClick: () => void }[]
}

const BASE_MIDIA = [
  { title: "Instagram", href: "https://www.instagram.com/huann_vt/" },
  { title: "Discord", href: "#" }
]
function Aside({ canBeShow, navigation }: AsideProps) {
  const setCursor = useSetCursor()

  const handleAsideStates = useAsideContext()

  useEffect(() => {
    const handleWindowClick = () => handleAsideStates({ type: "set", payload: false })

    window.addEventListener("click", handleWindowClick)
    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  },
    []
  )

  const pyrimadDelay = generatePyramidArray(navigation.length)

  return (
    <motion.aside
      className="h-[100dvh] bg-[#080808] pl-[9vw] pr-[3vw] pointer-events-auto backdrop-blur-sm flex flex-col justify-between items-center gap-[3vw] px-[9vw] fixed z-20 left-0 top-0 "
      animate={canBeShow ? "open" : "close"}
      onMouseEnter={() => setCursor({ state: "normal", icon: "arrow", title: null })}
      onMouseLeave={() => setCursor({ state: "normal", icon: null, title: null })
      }
      initial={{ x: "-100%" }}
      transition={{ ease: "easeIn" }}
      variants={variants}
    >
      <div className="w-full pt-[3vw]">
        <small className="text-[calc(100vw*0.00625)] font-normal text-white/50 pb-[1.75vw] block">NAVIGATION</small>
        <hr />
      </div>
      <motion.ul transition={{ delayChildren: 3 }} className="w-full overflow-hidden">
        {navigation
          .map(({ title, onClick }, i) => (
            <li key={i} className="border-t-2 border-y-[#222] lg:py-[1.75vh] sm:py-[3vh]">
              <motion.h3
                drag="x"
                initial={{ x: 0 }}
                whileHover={{ x: "1vw", color: "rgba(255,255,255,.5)", transition: { duration: .3, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: .3 }}
                key={i}
                animate={canBeShow ? "open" : "closed"}
                onMouseEnter={() => setCursor({ state: "hovered", title: null })}
                onMouseLeave={() => setCursor({ state: "normal", title: null })}
                onClick={onClick}
                custom={pyrimadDelay[i]}
                variants={linksVariants}
                className="relative block my-auto text-left w-full uppercase cursor-pointer text-white"
              >{title}</motion.h3>
            </li>
          ))
        }
      </motion.ul>
      <footer className="flex bottom-0 lg:flex-row md:flex-row sm:flex-col justify-between w-full pt-[3vw]">
        <div className="sm:pb-[3vw] w-full">
          <small className="lg:text-[calc(100vw*0.00625)] md:text-[clamp(11px,_4vw,_1em)] sm:text-[1vh] font-normal block text-white/50">SOCIALS</small>
          <ul className="flex justify-between sm:gap-x-[3vw]">
            {BASE_MIDIA
              .map((x, i) => <li key={i} onMouseEnter={() => setCursor({ state: "hovered" })} onMouseLeave={() => setCursor({ state: "normal" })} className="mb-4 text-white text-[clamp(11px,_4vw,_1em)] hover:text-white/50 duration-300 ease-smooth cursor-pointer sm:text-[clamp(11px,_4vw,_1em)] inline first:mx-0 last:mx-0 mx-[.3em] mix-blend-difference"><a target="_blank" href={x.href}>{x.title}</a></li>)
            }
          </ul>
        </div>
      </footer>
    </motion.aside >
  )
}

const linksVariants = {
  open: (i: number) => ({
    x: "0%",
    color: "rgba(255,255,255)",
    opacity: 1,
    transition: { delay: i * -0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }
  }),
  closed: (i: number) => ({
    x: "-100%",
    color: "rgba(255,255,255)",
    opacity: 0,
    transition: { delay: i * -0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }
  })
} as Variants

const variants = {
  close: { x: "-100%", transition: { duration: .5 } },
  open: { x: "0%", transition: { duration: .5, ease: "easeOut" } }
} as Variants

export default memo(Aside)