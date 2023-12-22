"use client";

import dynamic from 'next/dynamic'

import { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei';

import isServerRendering from '@/utils/is-server-rendering';

const OrganicFluid = dynamic(() => import("./OrganicFluid"), { ssr: false })
const SlowOrganicFluid = dynamic(() => import("./SlowOrganicFluid"), { ssr: false })

import Camera from './Camera'
import gsap from 'gsap';

import "@/three/shaders"

import useWindowViewport from '@/hooks/useWindowViewport';
import useWindowEventListenerEffect from '@/hooks/useWindowEventListener';

export default function OrganicFluidFloatingScene({ depth = 30 }) {
  const [dpr, setDpr] = useState(1)
  const ref = useRef<HTMLCanvasElement>(null!)
  const windowViewport = useWindowViewport()

  useLayoutEffect(() => {
    let mm = gsap.matchMedia(ref)
    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions!

        if (isDesktop) {
          gsap.set(ref.current, { position: "fixed" })
        } else if (isMobile) {
          gsap.set(ref.current, { position: "absolute" })
        }
      }
    )

    return () => mm.revert()
  }, [])


  return (
    <Canvas
      className='top-0 left-0 absolute'
      dpr={dpr}
      style={{ height: "100vh", zIndex: -2, width: "100vw", position: "absolute" }}
      ref={ref}
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 140], fov: 20, near: 0.01, far: depth + 300 }}
    >
      {windowViewport.width <= 768 ? <SlowOrganicFluid /> : <OrganicFluid />}
      <PerformanceMonitor onDecline={() => setDpr(Math.min(windowViewport.width <= 768 ? .5 : dpr - .1, .1))} onIncline={() => setDpr(Math.min(dpr + .05, 1.5))} />
      <color attach="background" args={["#050505"]} />
      <Camera />
    </Canvas>
  )
}