'use client';

import { Variants, motion, cubicBezier } from "framer-motion";

import { useLocomotiveScroll } from "react-locomotive-scroll";

import useFollowerSetState from "@/hooks/useFollowerSetState";
import useFollowerSetTitle from "@/hooks/useFollowerSetTitle";
import useAsideContext from "@/hooks/useAsideContext";

import generatePyramidArray from "@/utils/generatedPyramidArray";
import useFollowerSetCursorIcon from "@/hooks/useFollowerSetCursorIcon";

interface AsideProps {
  canBeShow: boolean
}

export default function Aside({ canBeShow }: AsideProps) {
  const setCursorState = useFollowerSetState()
  const setCursorTitle = useFollowerSetTitle()
  const setCursorIcon = useFollowerSetCursorIcon()

  console.log("Aside has render")

  const handleAsideStates = useAsideContext()

  const { scroll } = useLocomotiveScroll()
  // console.log("Scroll locomotive:", scroll)

  const variants = {
    close: { x: "-100%", transition: { duration: .5 } },
    open: { x: "0%", transition: { duration: .5, ease: "easeOut" } }
  } as Variants

  function handleOnMouseEnter() {
    setCursorState("normal")
    setCursorIcon("arrow")
    setCursorTitle(null)
  }
  function handleOnMouseLeave() {
    setCursorState("normal")
    setCursorIcon(null)
    setCursorTitle(null)
  }

  const navigationPattern = {
    onMouseEnter: () => {
      setCursorState("hovered")
      setCursorTitle(null)
    },
    onMouseLeave: () => {
      setCursorState("normal")
      setCursorTitle(null)
    }
  } as any

  function handleOnClick(section: string) {
    scroll.scrollTo(section)
    handleAsideStates({ type: "set", payload: false })
  }

  const links = [
    { title: "About", value: "#about" },
    { title: "Projects", value: "#projects" },
    { title: "Skills", value: "#skills" },
    { title: "Contact", value: "#contact" },
  ]

  const pyrimadDelay = generatePyramidArray(links.length)
  // console.log("PyramidDELAY: ", pyrimadDelay)

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

  return (
    <motion.aside
      className="h-screen bg-[#080808] pl-[9vw] pr-[3vw] pointer-events-auto backdrop-blur-sm flex flex-col justify-between items-center gap-[3vw] px-[9vw] fixed z-20 left-0 top-0 "
      animate={canBeShow ? "open" : "close"}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      initial={{ x: "-100%" }}
      transition={{ ease: "easeIn" }}
      variants={variants}
    >
      <div className="w-full pt-[3vw]">
        <small className="text-[calc(100vw*0.00625)] font-normal text-white/50 pb-[1.75vw] block">NAVIGATION</small>
        <hr />
      </div>
      <motion.ul transition={{ delayChildren: 3 }} className="w-full overflow-hidden">
        {links
          .map(({ title, value }, i) => (
            <li key={i} className="border-t-2 border-y-[#222] lg:py-[1.75vh] sm:py-[3vh]">
              <motion.a
                drag="x"
                initial={{ x: 0 }}
                whileHover={{ x: "1vw", color: "rgba(255,255,255,.5)", transition: { duration: .3, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: .3 }}
                key={i}
                animate={canBeShow ? "open" : "closed"}
                {...navigationPattern}
                onClick={() => handleOnClick(value)}
                custom={pyrimadDelay[i]}
                variants={linksVariants}
                className="ease-smooth text-[clamp(25px,_5vw,_80px)] hover:text-white/50 relative block my-auto text-left w-full font-medium uppercase cursor-pointer text-white"
              >{title}</motion.a>
            </li>
          ))
        }
      </motion.ul>
      <footer className="flex bottom-0 lg:flex-row md:flex-row sm:flex-col justify-between w-full pt-[3vw]">
        <div className="sm:pb-[3vw] w-full">
          <small className="lg:text-[calc(100vw*0.00625)] md:text-[clamp(11px,_4vw,_1em)] sm:text-[1vh] font-normal block text-white/50">SOCIALS</small>
          <ul className="flex justify-between sm:gap-x-[3vw]">
            {["Instagram", "Discord", "Facebook"]
              .map((x, i) => <li key={i} className="mb-4 text-white text-[clamp(11px,_4vw,_1em)] sm:text-[clamp(11px,_4vw,_1em)] inline first:mx-0 last:mx-0 mx-[.3em] mix-blend-difference">{x}</li>)
            }
          </ul>
        </div>
      </footer>
    </motion.aside >
  )
}