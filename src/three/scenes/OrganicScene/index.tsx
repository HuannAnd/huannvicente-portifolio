"use client";

import dynamic from 'next/dynamic'

import { Suspense, useRef, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei';

const OrganicFluid = dynamic(() => import("./OrganicFluid"), { ssr: false })
const SlowOrganicFluid = dynamic(() => import("./SlowOrganicFluid"), { ssr: false })

import Lights from './Lights'
import Camera from './Camera'

import "@/three/shaders"
import useWindowViewport from '@/hooks/useWindowViewport'

export default function OrganicFluidFloatingScene({ depth = 30 }) {
  const [dpr, setDpr] = useState(2)
  const ref = useRef<HTMLCanvasElement>(null!)
  const windowViewport = useWindowViewport()
  const isMobile = windowViewport.width <= 768

  return (
    <Suspense fallback={null}>
      <Canvas
        className='top-0 left-0 right-0 bottom-0'
        dpr={dpr}
        style={{ height: "100vh", zIndex: -1, width: "100vw", position: isMobile ? "absolute" : "fixed" }}
        ref={ref}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 140], fov: 20, near: 0.01, far: depth + 300 }}
      >
        {isMobile ? <SlowOrganicFluid z={10} /> : <OrganicFluid z={10} />}
        <PerformanceMonitor onDecline={() => setDpr(Math.min(dpr - .1, .1))} onIncline={() => setDpr(Math.min(dpr + .1, 2))} />
        <color attach="background" args={["#050505"]} />
        {/* <Lights /> */}
        <Camera />
      </Canvas>
    </Suspense>
  )
}