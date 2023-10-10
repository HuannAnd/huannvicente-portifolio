"use client";

import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react"

import * as THREE from 'three'

const ANIMATION_DURATION_IN_SECONDS = 4

export default function Lights() {
  const ref = useRef<THREE.SpotLight>(null!)

  const [data] = useState({
    color: "white",
    intensity: 1,
    distance: 20,
    angle: 120,
    penumbra: 1,
    decay: 1.5,
  })

  useFrame((state, dt) => {
    ref.current.intensity = Math.min(1, state.clock.getElapsedTime() * 1 / ANIMATION_DURATION_IN_SECONDS)
  })

  return <spotLight ref={ref} position={[0, 10, 0]} args={[data.color, data.intensity, data.distance, data.angle, data.penumbra, data.decay]} />
}