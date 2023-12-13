'use client';

import { useEffect, useRef, useState } from "react";

import * as THREE from 'three'

import { ThreeElements, useFrame } from '@react-three/fiber'
import useWindowViewport from "@/hooks/useWindowViewport";
import installMediaQueryWatcher from "@/utils/media-query-watcher";


interface Props { }

export default function OrganicFluid({ }: Props) {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useRef<THREE.SphereGeometry>(null!)
  const shader = useRef<ThreeElements["noiseShaderMaterial"]>(null!)

  const [data] = useState({
    radius: 5,
    color: new THREE.Color(`rgba(21,98,254,255)`),
    bump: .3,
    z: 0
  })

  useFrame((state, dt) => {
    shader.current.uTime = state.clock.getElapsedTime() / 5

    mesh.current.rotation.x += dt
    mesh.current.rotation.y += dt

    if(window.innerWidth <= 768) {
      state.performance.regress()
    }
  })

  console.log("OrganicFluid data: ", data)

  return (
    <mesh ref={mesh} position={[0, -3, 0]}>
      <sphereGeometry ref={geometry} args={[data.radius, 200, 200]} />
      <noiseShaderMaterial
        uBump={data.bump}
        // uColor={"#188bfe"}
        uColor={"#cc6804"}
        // uColor={"#089e08"}
        // uColor={"#73079e"}
        // uColor="#893a1b"
        ref={shader as any} />
    </mesh>
  )
}