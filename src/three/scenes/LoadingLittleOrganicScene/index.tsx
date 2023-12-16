"use client";

import dynamic from 'next/dynamic'

import { Suspense, useRef, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei';

const OrganicFluid = dynamic(() => import("./OrganicFluid"), { ssr: true })
const SlowOrganicFluid = dynamic(() => import("./SlowOrganicFluid"), { ssr: false })

import Camera from './Camera'

import "@/three/shaders"

export default function LoadingLittleOrganicScene({ depth = 30 }) {
  const [dpr, setDpr] = useState(.5)
  const ref = useRef<HTMLCanvasElement>(null!)

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          className='top-0 left-0'
          dpr={.7}
          style={{ height: "100dvh", zIndex: -1, width: "100vw", position: "fixed", userSelect: "none", pointerEvents: "none" }}
          ref={ref}
          gl={{ antialias: true }}
          camera={{ position: [0, 0, 300], fov: 20, near: 0.01, far: depth + 300 }}
        >
          <Suspense fallback={<SlowOrganicFluid />}>
            <OrganicFluid />
          </Suspense>
          {/* <PerformanceMonitor onDecline={() => setDpr(Math.min(dpr - .1, .1))} onIncline={() => setDpr(Math.min(dpr + .05, 1.5))} /> */}
          <color attach="background" args={["#050505"]} />
          <Camera />
        </Canvas>
      </Suspense>
      <img id="arc" style={{ animation: "spinOrganicFluid 1.5s linear infinite", transformOrigin: "-50%" }} className='fixed left-1/2 w-[50vw] @mobileAndTablet:[scale:_0.3] top-1/2' src="/OrangeArc.png" alt="" />
    </>
  )
}