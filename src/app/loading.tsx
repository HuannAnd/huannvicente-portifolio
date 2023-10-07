"use client"

import { Suspense, memo, useRef, useState } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import * as THREE from 'three'

import { motion, AnimatePresence } from "framer-motion"

import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading"
import useFollowerSetState from "@/hooks/useFollowerSetState"

import CustomLoading from "@/animations/scenes/Loading"

interface ThingProps {
  size: number
  speed: number
  color: string
}

function Thing({ size, speed, color }: ThingProps) {
  console.log("The world has choosed Thing as Strategy")
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

  useFrame(() => {
    const sphere = ref.current!

    sphere.position.y = Math.abs(Math.sin(sphere.position.y += .01))
  })
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

export default function Loading() {
  console.log("Loading was render")
  const setCursorState = useFollowerSetState()
  const setIsLoading = useFollowerSetIsLoading()

  const minDeg = 30
  const maxDeg = 360

  const [data] = useState({
    color: `hsl(${THREE.MathUtils.randInt(minDeg, maxDeg)}, 100%, 75%)`,
    strategy: ["sphereBouncing", "squareRotating"]
  })

  const depth = 30

  setCursorState("normal")
  setIsLoading(true)

  const randStrategy = Math.floor(data.strategy.length * Math.random())
  const Component = data.strategy[1] === "sphereBouncing" ? Thing : Sphere

  return CustomLoading
}