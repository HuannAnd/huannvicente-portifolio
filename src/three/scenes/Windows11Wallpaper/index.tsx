"use client";

import { Suspense, useRef } from 'react';

import { Canvas } from '@react-three/fiber';

import Windows11Shape from './Windows11Shape';
import Lights from './Lights';
import Camera from './Camera';

import { useScroll, useTransform } from "framer-motion"

import "@/three/shaders"

export default function Windows11Scene({ depth = 30 }) {
  const ref = useRef<HTMLCanvasElement>(null!)


  return (
    <Suspense fallback={null}>
      <Canvas className='top-0 bottom-0' style={{ height: "100vh", zIndex: -1, width: "100vw", position: "fixed" }} ref={ref} gl={{ antialias: true }} camera={{ position: [0, 0, 140], fov: 20, near: 0.01, far: depth + 300 }}>
        <Windows11Shape z={10} />
        <color attach="background" args={["#050505"]} />
        <Lights />
        <Camera />
      </Canvas>
    </Suspense>
  )
}