"use client"

import { Suspense, memo, useRef, useState } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import * as THREE from 'three'

import { motion, AnimatePresence } from "framer-motion"

import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading"
import useFollowerSetState from "@/hooks/useFollowerSetState"
import useHamburguerContext from "@/hooks/useNavigationContext"

interface ThingProps {
  size: number
  speed: number
  color: string
}

function Thing({ size, speed, color }: ThingProps) {
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
}

const MemoizedThing = memo(Thing)

function Lights() {
  const [data] = useState({
    color: "white",
    intensity: 1,
    distance: 20,
    angle: 120,
    penumbra: 1,
    decay: 1.5,
  })

  return <spotLight position={[0, 10, 0]} args={[data.color, data.intensity, data.distance, data.angle, data.penumbra, data.decay]} />
}

function Plane() {
  return (
    <mesh castShadow position={[0, -5, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshLambertMaterial args={[{ color: 0x777777, side: 2 }]} />
    </mesh>
  )
}

interface SphereProps {
  size: number
  speed: number
  color: string
}

function Sphere({ size, color, speed }: SphereProps) {
  console.log("The world has choosed Sphere as Strategy")
  const ref = useRef<THREE.Mesh>()
  const [data] = useState({
    size: [size, size, size],
    color: new THREE.Color(color)

  })

  useFrame((state) => {
    const sphere = ref.current!
    sphere.rotation.x = sphere.rotation.y += 0.01 * speed
    sphere.position.y = -2 + 3 * Math.abs(Math.sin(speed * state.clock.getElapsedTime()))
  }
  )
  console.log("Selected color: ", data.color);

  return (
    <mesh
      ref={ref as any}
      position={[0, 0, 0]}
    >
      <sphereGeometry attach="geometry" args={[3, 20, 20]} />
      {/* <meshNormalMaterial attach="material" /> */}
      <meshLambertMaterial args={[{ color, clipShadows: false }]} attach="material" />
    </mesh>
  )
}

export default function Loading() {
  console.log("Loading was render")
  const setCursorState = useFollowerSetState()
  const setIsLoading = useFollowerSetIsLoading()
  const showHamburguer = useHamburguerContext()

  const minDeg = 30
  const maxDeg = 360

  showHamburguer(false)

  const [data] = useState({
    color: `hsl(${THREE.MathUtils.randInt(minDeg, maxDeg)}, 100%, 75%)`,
    strategy: ["sphereBouncing", "squareRotating"]
  })

  const randStrategy = Math.floor(data.strategy.length * Math.random())
  const Component = data.strategy[1] === "sphereBouncing" ? Thing : Sphere

  const depth = 30

  setCursorState("normal")
  setIsLoading(true)

  return (
    <div className="absolute cursor-wait w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Suspense fallback={null}>
        <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 15 }}>
          <color attach="background" args={["#000"]} />
          <OrbitControls />
          {/* <axesHelper args={[20]} /> */}
          <Component color={data.color} speed={2} size={4} />
          <Lights />
          <Plane />
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