"use client";

import dynamic from 'next/dynamic'

import { Suspense, useRef, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei';

const OrganicFluid = dynamic(() => import("./OrganicFluid"), { ssr: false })
const SlowOrganicFluid = dynamic(() => import("./SlowOrganicFluid"), { ssr: false })

import Camera from './Camera'

import "@/three/shaders"

import isMobileDevice from '@/utils/is-mobile-device';
import useWindowViewport from '@/hooks/useWindowViewport';

export default function OrganicFluidFloatingScene({ depth = 30 }) {
  const [dpr, setDpr] = useState(1)
  const ref = useRef<HTMLCanvasElement>(null!)
  const windowViewport = useWindowViewport()
  const position = windowViewport.width < 768 ? "absolute" : "fixed"
  console.log("position value: ", position)

  return (
    <Canvas
      className='top-0 left-0'
      dpr={dpr}
      style={{ height: "100vh", zIndex: -1, width: "100vw", position }}
      ref={ref}
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 140], fov: 20, near: 0.01, far: depth + 300 }}
    >
      {windowViewport.width <= 768 ? <SlowOrganicFluid /> : <OrganicFluid />}
      <PerformanceMonitor onDecline={() => setDpr(Math.min(dpr - .1, .1))} onIncline={() => setDpr(Math.min(dpr + .05, 1.5))} />
      <color attach="background" args={["#050505"]} />
      <Camera />
    </Canvas>
  )
}