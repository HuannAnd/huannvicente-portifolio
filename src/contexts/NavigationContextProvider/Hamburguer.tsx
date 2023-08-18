'use client';

import { useEffect, useRef, useState } from "react";

import { Variants, motion } from "framer-motion";

import useFollowerSetState from "@/hooks/useFollowerSetState";
import useFollowerSetTitle from "@/hooks/useFollowerSetTitle";
import useAsideContext from "@/hooks/useAsideContext";


interface HamburguerProps {
  canBeShow: boolean
}

const variants = {
  pressed: { opacity: 1, scale: 1, borderRadius: "999px" },
  normal: { opacity: 1, scale: 1, borderRadius: "0px" },
  closed: { opacity: 0, scale: 0, transition: { duration: .3 } }
} as Variants


export default function Hamburguer({ canBeShow }: HamburguerProps) {
  const burger = useRef(null!)
  const setCursorState = useFollowerSetState()
  const setCursorTitle = useFollowerSetTitle()
  const [isPressed, setisPressed] = useState(false)

  const handleAsideOpening = useAsideContext()

  const handles = {
    onMouseEnter: () => {
      setCursorState("invisible")
      setCursorTitle(null)
    },
    onMouseLeave: () => {
      setCursorState("normal")
    }
  }

  useEffect(() => {
    handleAsideOpening({ type: "set", payload: false })
    setisPressed(false)
  }, [canBeShow])

  function handleOnClick(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation()
    handleAsideOpening({ type: "toogle" })
    setisPressed(isPressed => !isPressed)
  }

  return (
    <motion.div
      aria-label="hamburguer"
      ref={burger}
      onClick={handleOnClick}
      initial="closed"
      animate={canBeShow ? (isPressed ? "pressed" : "normal") : "closed"}
      transition={{ duration: .3 }}
      variants={variants}
      {...handles}
      className="rounded-none duration-300 ease-fast w-[10vh] sm:p-[2vh] lg:p-[1vw] md:[1.75vw] z-[101] fixed group/hamburguer cursor-pointer pointer-events-auto hover:bg-[#111] flex justify-evenly border-2 bg-black border-[#111] flex-col text-black text-center top-[3vw] left-[3vw] aspect-square"
    >
      <motion.span
        initial={{ scaleX: 0 }}
        animate={canBeShow ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: .3 }}
        className="w-full h-[3px] bg-white duration-300 ease-smooth"
      ></motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={canBeShow ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: .6 }}
        className="w-full h-[3px] bg-white duration-300 ease-smooth"
      ></motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={canBeShow ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: .9 }}
        className="w-full h-[3px] bg-white duration-300 ease-smooth"
      ></motion.span>
    </motion.div>
  )
}

