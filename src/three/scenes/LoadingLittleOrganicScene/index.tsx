"use client";

import dynamic from 'next/dynamic'

import { Suspense, useRef } from 'react'

import { Canvas } from '@react-three/fiber'

const OrganicFluid = dynamic(() => import("./OrganicFluid"), { ssr: true })

import "@/three/shaders"

export default function LoadingLittleOrganicScene({ depth = 30 }) {
  const ref = useRef<HTMLCanvasElement>(null!)

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          className='top-0 left-0'
          dpr={1}
          style={{ height: "100dvh", zIndex: -1, width: "100vw", position: "fixed", userSelect: "none", pointerEvents: "none" }}
          ref={ref}
          gl={{ antialias: true }}
          camera={{ position: [0, 0, 250], fov: 15, near: 0.01, far: depth + 300 }}
        >
          <OrganicFluid />
          <color attach="background" args={["#050505"]} />
        </Canvas>
      </Suspense>
    </>
  )
}