"use client";

import * as THREE from 'three'

import { useState } from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import Lights from "./Lights"
import Sphere from "./Sphere"
import Plane from "./Plane"
import Cube from "./Cube"


export default function Loading() {
  const minDeg = 30
  const maxDeg = 360
  const depth = 30

  const [data] = useState({
    color: `hsl(${THREE.MathUtils.randInt(minDeg, maxDeg)}, 100%, 75%)`,
    strategy: ["sphereBouncing", "squareRotating"]
  })

  const Component = data.strategy[1] === "sphereBouncing" ? Cube : Sphere

  return (
    <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 15 }}>
      <color attach="background" args={["#000"]} />
      {/* <OrbitControls /> */}
      <Component color={data.color} speed={2} size={4} />
      <Lights />
      <Plane />
    </Canvas>
  )
}