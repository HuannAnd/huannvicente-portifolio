'use client';

import { useRef, useState } from "react";

import * as THREE from 'three'

import { ThreeElements, useFrame, useThree, } from '@react-three/fiber'



interface SphereProps {
  index: number,
  count: number
}

export default function Sphere({ index, count }: SphereProps) {
  const geometry = useRef<ThreeElements["sphereGeometry"]>(null!)
  const shader = useRef<ThreeElements["waveShaderMaterial"]>(null!)

  const { viewport } = useThree()
  const viewportDimensions = viewport.getCurrentViewport()

  const [data] = useState({
    x: viewportDimensions.width * Math.random(),
    color: new THREE.Color(`hsl(${index * (360 / count)}, 100%, 75%)`),
    bump: THREE.MathUtils.randFloat(2, 8),
    // z: 0 
  })

  console.log("Geometry: ", geometry.current)

  useFrame(({ clock }, dt) => {
    geometry.current
    shader.current.uTime = clock.getElapsedTime() / 8
  })


  return (
    <mesh  position={[0, -5, 0]}>
      <sphereGeometry ref={geometry as any} args={[3, 512, 256]} />
      {/* <coneGeometry ref={geometry as any} args={[3, 1, 300, 300, false, 0, 100]} /> */}
      <waveShaderMaterial uBump={data.bump} uColor={"blue"} ref={shader as any} />
    </mesh>
  )
}