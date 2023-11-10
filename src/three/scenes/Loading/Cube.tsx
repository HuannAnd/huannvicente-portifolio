"use client";

import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh, Color } from 'three'


interface CubeProps {
  size: number
  speed: number
  color: string
}
export default function Cube({ size, speed, color }: CubeProps) {
  console.log("The world has choosed Thing as Strategy")
  const ref = useRef<Mesh>()
  const [data] = useState({
    size: [size, size, size],
    color: new Color(color)
    
  })

  useFrame(() => ((ref.current!).rotation.x = (ref.current!).rotation.y += 0.01 * speed))

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