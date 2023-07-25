'use client';

import { useRef, useState } from "react";

import { useFrame } from '@react-three/fiber'

interface SphereProps {

}

export default function Sphere({ }: SphereProps) {
  const ref = useRef<THREE.Mesh>(null!)

  const [data] = useState({
    x: 0,
    y: 0,
    z: 0
  })

  return (
    <mesh
      ref={ref}
    >
      <sphereGeometry args={[2, 20, 10]} />
      <meshLambertMaterial color={"#aaa"} />
    </mesh>
  )
}