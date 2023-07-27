"use client"

import { useFollowerContext } from "@/hooks/useFollowerContext"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { Suspense, memo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import * as THREE from 'three'

interface ThingProps {
  size: number
  speed: number
  color: string
}

const Thing = memo(function ({ size, speed, color }: ThingProps) {
  const ref = useRef<THREE.Mesh>()
  const [data] = useState({
    size: [size, size, size],
    color: new THREE.Color(color)

  })
  useFrame(() => ((ref.current!).rotation.x = (ref.current!).rotation.y += 0.01 * speed))
  console.log("Selected color: ", data.color);

  return (
    <mesh
      ref={ref as any}
      position={[0, 0, 0]}
    >
      <boxBufferGeometry attach="geometry" args={data.size} />
      {/* <meshNormalMaterial attach="material" /> */}
      <meshLambertMaterial args={[{ color, clipShadows: true }]} attach="material" />
    </mesh>
  )
})

export default function Loading() {
  const { setIsLoading, updateEvent } = useFollowerContext()

  const minDeg = 30
  const maxDeg = 360
  const randDeg = THREE.MathUtils.randInt(minDeg, maxDeg)
  const randColor = `hsl(${randDeg}, 100%, 75%)`

  const [data] = useState({
    color: randColor
  })

  // camera
  const depth = 30

  // spotLight
  const color = "white";
  const intensity = 1;
  const distance = 20;
  const angle = 120;
  const penumbra = 1;
  const decay = 1.5;

  updateEvent({ type: "normal" })
  setIsLoading(true)

  return (
    <div className="absolute cursor-wait w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Suspense fallback={null}>
        <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 15 }}>
          <color attach="background" args={["#000"]} />
          <OrbitControls />
          {/* <axesHelper args={[20]} /> */}
          <Thing color={data.color} speed={2} size={4} />
          <spotLight position={[0, 10, 0]} args={[color, intensity, distance, angle, penumbra, decay]} />
          <mesh castShadow position={[0, -5, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
            <planeGeometry args={[30, 30]} />
            <meshLambertMaterial args={[{ color: 0x777777, side: 2 }]} />
          </mesh>
        </Canvas>
      </Suspense>
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 bg-blend-hard-light">
        <AnimatePresence initial={false}>
          <div className="absolute w-full px-[9vw] top-1/2 -translate-y-1/2">
            <motion.h5
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-white text-center w-full">Please dont close window, wait a little bit</motion.h5>
          </div>
        </AnimatePresence>
        <p className="absolute py-[3vw] text-center text-[12px] font-light">Please don't close screen</p>
      </div>
    </div>
  )
}