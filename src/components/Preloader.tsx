'use client';

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { usePathname, useRouter } from 'next/navigation';


interface Props {
  requestPage: string | null
}

export default function Preloader({ requestPage }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
const pathname = usePathname()
  const timeline = gsap.timeline()

  useEffect(() => {
    let isUnMounting = false;

    if (isUnMounting) return
    (async () => {
      if (typeof requestPage !== "string") return
      await slideIn()
      router.push(requestPage as string)
    })()

    return () => {
      isUnMounting = true
    }
  }, [requestPage])

  useEffect(() => {
    const time = setTimeout(async () => {
      await slideOut()
    }, 300)

    return () => {
      clearTimeout(time)
    }
  }, [pathname])

  const slideIn = async () => {
    await timeline
      .fromTo(ref.current, { scaleY: 0 }, { scaleY: 1 })
  }

  const slideOut = async () => {
    await timeline
      .fromTo(ref.current, { scaleY: 1 }, { scaleY: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className="w-screen h-screen fixed z-[100] top-0 bg-black"
      initial={{ scaleY: 1 }}
      style={{ transformOrigin: "top" }}
      transition={{ duration: .8, ease: [0.25, 1, 0.5, 1] }}
    />
  )
}