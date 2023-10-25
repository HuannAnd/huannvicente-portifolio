'use client';

import { useEffect, useRef, useState } from "react";

import { Variants, motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useAsideContext from "@/hooks/useAsideContext";
import useSetCursor from "@/hooks/useSetCursor";
import { usePathname } from "next/navigation";
import useLocomotiveScrollRef from "../LocomotiveScrollProvider/useLocomotiveScrollRef";


interface HamburguerProps {
  canBeShow: boolean
}

const variants = {
  pressed: { opacity: 1, scale: 1, borderRadius: "999px" },
  normal: { opacity: 1, scale: 1, borderRadius: "0px" },
  closed: { opacity: 0, scale: 0, transition: { duration: .3 } }
} as Variants


export default function Hamburguer({  }: HamburguerProps) {
  const burger = useRef(null!)
  const locomotiveScroll = useLocomotiveScrollRef()

  const canBeShow = true

  const setCursor = useSetCursor()
  const pathname = usePathname()

  const [isPressed, setisPressed] = useState(false)

  const handleAsideOpening = useAsideContext()

  useEffect(() => {
    handleAsideOpening({ type: "set", payload: false })
    setisPressed(false)
  }, [canBeShow])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(burger.current, {
      scrollTrigger: {
        start: 0,
        end: window.innerHeight,
        markers: true,
        trigger: document.documentElement,
        onLeave: () => { gsap.to(burger.current, { opacity: 1, scale: 1, duration: .3, ease: "power3.out" }); console.log("onLeave has fired")   },
        onLeaveBack: () => { gsap.to(burger.current, { opacity: 0, scale: 0, duration: .3, ease: "power3.out" }); console.log("onLeaveBack has fired") }
      }
    })
  }, [pathname])

  function handleOnClick(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation()
    handleAsideOpening({ type: "toogle" })
    setisPressed(isPressed => !isPressed)
  }

  return (
    <div
      aria-label="hamburguer"
      ref={burger}
      onClick={handleOnClick}
      onMouseEnter={() => setCursor({ state: "invisible", title: null })}
      onMouseLeave={() => setCursor({ state: "normal" })}
      className="rounded-none duration-300 ease-fast w-32 p-3 z-[101] fixed group/hamburguer cursor-pointer pointer-events-auto hover:bg-[#111] flex justify-evenly border-2 bg-[#111] border-[#111] flex-col text-black text-center top-[3vw] left-[3vw] aspect-square"
    >
      <motion.span
        initial={{ scaleX: 0 }}
        animate={canBeShow ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: .3 }}
        className="w-full h-2 bg-white duration-300 ease-smooth"
      ></motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={canBeShow ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: .6 }}
        className="w-full h-2 bg-white duration-300 ease-smooth"
      ></motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={canBeShow ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: .9 }}
        className="w-full h-2 bg-white duration-300 ease-smooth"
      ></motion.span>
    </div>
  )
}

