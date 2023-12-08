'use client';

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { usePathname, useRouter } from 'next/navigation';

import useWindowViewport from '@/hooks/useWindowViewport';



interface Props {
  requestPage: string | null
}

export default function Preloader({ requestPage }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const path = useRef<SVGPathElement>(null)
  const pathHeight = 120

  const router = useRouter()
  const pathname = usePathname()
  const timeline = gsap.timeline()
  const windowViewport = useWindowViewport()

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
      .fromTo(
        ref.current,
        { height: 0 },
        { height: window.innerHeight, duration: .8, ease: "power3.out" }
      )
      .fromTo(
        path.current,
        { attr: { d: `M0 0, Q${windowViewport.width / 2} ${pathHeight}, ${windowViewport.width} 0` } },
        { attr: { d: `M0 0, Q${windowViewport.width / 2} 0, ${windowViewport.width} 0` }, duration: .8, ease: "power3.out" },
        0
      )
  }

  const slideOut = async () => {
    await timeline
      .fromTo(
        ref.current,
        { height: window.innerHeight },
        { height: 0, duration: .8, ease: "power3.out" }
      )
      .fromTo(
        path.current,
        { attr: { d: `M0 0, Q${windowViewport.width / 2} ${pathHeight}, ${windowViewport.width} 0` } },
        { attr: { d: `M0 0, Q${windowViewport.width / 2} 0, ${windowViewport.width} 0` }, duration: .8, ease: "power3.out" },
        0
      )
  }

  return (
    <motion.div
      ref={ref}
      id='loading'
      className="w-screen h-screen fixed z-[999] top-0 bg-black"
      initial={{ scaleY: 1 }}
      style={{ transformOrigin: "top" }}
      transition={{ duration: .8, ease: [0.76, 0, 0.24, 1] }}
    >
      <svg
        className='w-full block h-full'
        height={windowViewport.height}
        width={windowViewport.width}
        viewBox={`0 0 ${windowViewport.width} ${windowViewport.height}`}
      >
        {/* <circle className='mix-blend-difference bg-blend-difference' stroke='#121212' fill='none' strokeWidth="1" r={windowViewport.height / 1.2} cx={0} cy={windowViewport.height} />
        <circle className='mix-blend-difference bg-blend-difference' stroke='#121212' fill='none' strokeWidth="1" r={windowViewport.height / 1.4} cx={windowViewport.width / 2} cy={windowViewport.height / 2} />
        <circle className='mix-blend-difference bg-blend-difference' stroke='#121212' fill='none' strokeWidth="1" r={windowViewport.height / 1.6} cx={windowViewport.width} cy={0} /> */}
      </svg>
      <svg className='absolute w-full pointer-events-none select-none left-0 right-0 bottom-0 translate-y-full'>
        <path ref={path} />
      </svg>
    </motion.div>
  )
}