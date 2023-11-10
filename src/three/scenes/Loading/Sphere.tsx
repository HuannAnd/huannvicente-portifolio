"use client";

import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

import { Color } from 'three'

interface SphereProps {
  size: number
  speed: number
  color: string
}

export default function Sphere({ size, color, speed }: SphereProps) {
  console.log("The world has choosed Sphere as Strategy")
  const ref = useRef<THREE.Mesh>()
  const [data] = useState({
    size: [size, size, size],
    color: new Color(color),
    x: 0,
    y: 0,
    z: 0
  })

  useFrame((state) => {
    const sphere = ref.current!
    sphere.rotation.x = sphere.rotation.y += 0.01 * speed
    sphere.position.y = -2 + 3 * Math.abs(Math.sin(speed * state.clock.getElapsedTime()))
  }
  )

  return (
    <mesh
      ref={ref as any}
      position={[0, 0, 0]}
      castShadow
      receiveShadow
    >
      <sphereGeometry attach="geometry" args={[3, 20, 20]} />
      {/* <meshNormalMaterial attach="material" /> */}
      <meshLambertMaterial args={[{ color, clipShadows: true }]} attach="material" />
    </mesh>
  )
}