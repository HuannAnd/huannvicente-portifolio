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
    color: new Color(color)

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