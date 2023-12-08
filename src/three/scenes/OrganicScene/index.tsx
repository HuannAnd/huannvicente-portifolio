"use client";

import dynamic from 'next/dynamic'

import { Suspense, useRef } from 'react'

import { Canvas } from '@react-three/fiber'

const OrganicFluid = dynamic(() => import("./OrganicFluid"), { ssr: false })

import Lights from './Lights'
import Camera from './Camera'

import "@/three/shaders"


export default function OrganicFluidFloatingScene({ depth = 30 }) {
  const ref = useRef<HTMLCanvasElement>(null!)


  return (
    <Suspense fallback={null}>
      <Canvas className='top-0 left-0 right-0 bottom-0' style={{ height: "100vh", zIndex: -1, width: "100vw", position: "fixed" }} ref={ref} gl={{ antialias: true }} camera={{ position: [0, 0, 140], fov: 20, near: 0.01, far: depth + 300 }}>
        <OrganicFluid z={10} />
        <color attach="background" args={["#050505"]} />
        {/* <Lights /> */}
        <Camera />
      </Canvas>
    </Suspense>
  )
}