'use client';

import { memo, useEffect } from "react";

import { Variants, motion } from "framer-motion";

import useAsideContext from "@/hooks/useAsideContext";

import generatePyramidArray from "@/utils/generatedPyramidArray";
import useSetCursor from "@/hooks/useSetCursor";
import useWindowViewport from "@/hooks/useWindowViewport";

interface SideBarProps {
  canBeShow: boolean
  navigation: { title: string, onClick: () => void }[]
}

const BASE_MIDIA = [
  { title: "Instagram", href: "https://www.instagram.com/huann_vt/" },
  { title: "Discord", href: "#" }
]
function SideBar({ canBeShow, navigation }: SideBarProps) {
  const setCursor = useSetCursor()
  const windowViewport = useWindowViewport()

  const handleAsideStates = useAsideContext()

  useEffect(() => {
    const handleWindowClick = () => {

      handleAsideStates({ type: "set", payload: false })
    }

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
      className="h-[100dvh] pl-[9vw] pr-[3vw] py-[3dvw] z-[1000] bg-[#080808] pointer-events-auto flex flex-col justify-between items-center gap-[3vw] fixed left-0 top-0 "
      style={{ filter: "url(#noisedPattern)" }}
      id="sidebar"
      animate={canBeShow ? "open" : "close"}
      onMouseEnter={() => setCursor({ state: "normal", icon: "arrow", title: null })}
      onMouseLeave={() => setCursor({ state: "normal", icon: null, title: null })}
      initial={{ x: "calc(-100% - 64px" }}
      variants={variants}
    >
      <svg className="h-full translate-x-full absolute top-0 bottom-0 right-0 w-16">
        <path fill="#080808" d={`M0 0 Q128 ${windowViewport.height / 2} 0 ${windowViewport.height}`} />
      </svg>
      <ul className="w-full overflow-hidden">
        <p className="font-semibold text-white py-[1.75vw] block">NAVIGATION <span className="font-normal text-white/50 text-[11px] absolute translate-x-1/2 -translate-y-1/2">{navigation.length}</span></p>
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
                className="relative block my-auto text-left w-full font-normal text-[2rem] uppercase cursor-pointer text-white"
              >{title}</motion.h3>
            </li>
          ))
        }
      </ul>
      <footer className="flex bottom-0 lg:flex-row md:flex-row sm:flex-col justify-between w-full pt-[3vw]">
        <div className="sm:pb-[3vw] w-full">
          <p className="font-semibold block text-white">SOCIALS<span className="font-normal text-white/50 text-[11px] absolute translate-x-1/2 -translate-y-1/2">{navigation.length}</span></p>
          <ul className="flex justify-between sm:gap-x-[3vw]">
            {BASE_MIDIA
              .map((x, i) => <li key={i} onMouseEnter={() => setCursor({ state: "hovered" })} onMouseLeave={() => setCursor({ state: "normal" })} className="text-white text-[11px] hover:text-white/50 duration-300 ease-smooth cursor-pointer inline first:mx-0 last:mx-0 mx-[.3em] mix-blend-difference"><a className="text-[11px]" target="_blank" href={x.href}>{x.title}</a></li>)
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
  close: { x: "calc(-100% - 64px)", transition: { duration: .8, ease: [0.76, 0, 0.24, 1] } },
  open: { x: "0%", transition: { duration: .8, ease: [0.76, 0, 0.24, 1] } }
} as Variants

export default memo(SideBar)