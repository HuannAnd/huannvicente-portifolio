'use client';

import { useEffect } from "react"

import { motion, stagger, useAnimate, useInView } from "framer-motion"

import SplitType from "split-type"

import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading"
import useFollowerSetTitle from "@/hooks/useFollowerSetTitle"
import useFollowerSetState from "@/hooks/useFollowerSetState"
import useHamburguerContext from "@/hooks/useHamburguerContext"
import useFollowerSetCursorIcon from "@/hooks/useFollowerSetCursorIcon";

import wait from "@/utils/wait";

interface OverviewProps {
  name: string,
  description: string
  hasDomain: boolean
  domain_url: string | undefined
  repository_url: string
}

export default function Overview({
  name,
  description,
  hasDomain,
  domain_url,
  repository_url
}: OverviewProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  const showHamburguer = useHamburguerContext()

  useEffect(() => {
    if (isInView) {
      new SplitType("#text", { types: "words" });
      animate([
        [
          "h1",
          { opacity: 1 },
          { duration: 1 }
        ],
        [
          "#text .word",
          { y: [16, 0], opacity: [0, 1] },
          { duration: 0.45, times: [0, 1], delay: stagger(0.07), at: "-0.5" }
        ]
      ])
    }
    return
  }, [isInView])

  useEffect(() => {
    wait(3000).then(() => showHamburguer(true))
  }, [])

  const setTitle = useFollowerSetTitle()
  const setIsLoading = useFollowerSetIsLoading()
  const setCursorState = useFollowerSetState()
  const setCursorIcon = useFollowerSetCursorIcon()

  return (
    <section ref={scope} data-scroll-section data-scroll className="w-full text-[#bbb] grid place-content-center text-center h-screen">
      <div className="relative px-[9vw]">
        <motion.h1
          data-scroll
          initial={{ opacity: 0 }}
          className="text-[clamp(48px,_5vw,_140px)] mb-8 text-center duration-300 ease-fast text-white font-bold tracking-tighter">{name}</motion.h1>
        <motion.q
          id="text"
          className="text-[clamp(25px,_3vw,_48px)] mb-[9vw] px-[9vw] duration-300 ease-fast block text-center text-white/60 font-normal">{description}</motion.q>
        <div className="flex flex-row justify-between items-center w-full h-auto gap-4">
          {hasDomain && (
            <a
              className="text-white grow basis-0 py-[3vw] min-w-[18vw] block cursor-pointer font-regular border-t-2 border-t-[#222]"
              onMouseEnter={() => { setCursorState("hovered"); setTitle(null); setCursorIcon("externalLink") }}
              onMouseLeave={() => { setCursorState("normal"); setTitle(null); setCursorIcon(null) }}
              href={domain_url}>On live</a>
          )}
          <a
            className="text-white py-[3vw] basis-0 grow w-full min-w-[9vw] block cursor-pointer font-regular border-t-2 border-t-[#222]"
            onMouseEnter={() => { setCursorState("hovered"); setTitle(null); setIsLoading(false); setCursorIcon("externalLink") }}
            onMouseLeave={() => { setCursorState("normal"); setTitle(null); setCursorIcon(null) }}
            href={repository_url}>Repository</a>
        </div>
      </div>
    </section>
  )
} 