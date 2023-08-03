'use client';

import { motion } from "framer-motion";

import useFollowerSetState from "@/hooks/useFollowerSetState";
import useFollowerSetTitle from "@/hooks/useFollowerSetTitle";
import useNavigationContext from "@/hooks/useNavigationContext";
import { useState } from "react";


interface HamburguerProps {
  canBeShow: boolean
}

export default function Hamburguer({ canBeShow }: HamburguerProps) {
  const setCursorState = useFollowerSetState()
  const setCursorTitle = useFollowerSetTitle()
  const [isOpen, setIsOpen] = useState(false)

  const showNavigationBar = useNavigationContext()

  const handles = {
    onMouseEnter: () => {
      setCursorState("invisible")
      setCursorTitle(null)
    },
    onMouseLeave: () => {
      setCursorState("normal")
    }
  }

  console.log("Hamburguer was render")
  console.log("canBeShow Hamburguer: ", canBeShow)

  return (
    <motion.div
      aria-label="hamburguer"
      // animate={controls}
      onClick={() => showNavigationBar(!canBeShow)}
      animate={canBeShow ? isOpen ? { opacity: 1, scale: 1, borderRadius: "999px" } : { opacity: 1, scale: 1, borderRadius: "0px" } : { opacity: 0, scale: 0 }}
      whileHover={{ rotate: "45deg" }}
      transition={{ duration: .3 }}
      // variants={variants}
      {...handles}
      className="rounded-none duration-300 ease-fast w-[10vh] z-[101] p-[1vw] fixed group/hamburguer cursor-pointer pointer-events-auto hover:bg-[#111] flex justify-evenly border-2 bg-black border-[#111] flex-col text-black text-center top-[3vw] right-[3vw] aspect-square"
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