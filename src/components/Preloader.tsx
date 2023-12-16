'use client';

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { usePathname, useRouter } from 'next/navigation';

import LoadingLittleOrganicScene from '@/three/scenes/LoadingLittleOrganicScene';

import useWindowViewport from '@/hooks/useWindowViewport';
import useLocomotiveScroll from '@/contexts/LocomotiveScrollProvider/useLocomotiveScroll';



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
      window.scrollTo(0, 0)
    }, 300)

    return () => {
      clearTimeout(time)
    }
  }, [pathname])

  const slideIn = async () => {
    timeline.set(ref.current, { transformOrigin: "top" })

    await timeline
      .fromTo(
        "#arc",
        { opacity: 0 },
        { opacity: 1, duration: .5 }
      )
      .fromTo(
        ref.current,
        { height: "0%" },
        { height: "100%", duration: .8, ease: "power3.out" }
      )
  }

  const slideOut = async () => {
    timeline.set(ref.current, { transformOrigin: "top" })

    await timeline.fromTo(
      "#arc",
      { opacity: 1 },
      { opacity: 0, duration: .5 }
    )
    await timeline.fromTo(
      ref.current,
      { height: "100%" },
      { height: "0%", duration: .8, ease: "power3.out" }
    )
  }

  return (
    <motion.div
      ref={ref}
      id='loading'
      className="w-screen h-screen [clip-path:_polygon(0_0,_100%_0,_100%_100%,_0%_100%)] pointer-events-none select-none fixed z-[999] top-0 bg-[#070707]"
      initial={{ opacity: 1 }}
      transition={{ duration: .8, ease: [0.76, 0, 0.24, 1] }}
    >
      <LoadingLittleOrganicScene />
    </motion.div>
  )
}