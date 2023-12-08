'use client';

import { useEffect, useRef, useState } from "react";

import * as THREE from 'three'

import { ThreeElements, useFrame } from '@react-three/fiber'
import useWindowViewport from "@/hooks/useWindowViewport";
import installMediaQueryWatcher from "@/utils/media-query-watcher";


interface Props { z: number }

export default function OrganicFluid({ }: Props) {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useRef<THREE.SphereGeometry>(null!)
  const shader = useRef<ThreeElements["noiseShaderMaterial"]>(null!)
  const windowViewport = useWindowViewport()

  useEffect(() => {
    installMediaQueryWatcher("(max-width: 768px)", (matches) => {
      if(!mesh.current) return
      matches
        ? mesh.current.position.z = -125
        : mesh.current.position.z = 0

    })
  }, [windowViewport])

  const [data] = useState({
    radius: 5,
    color: new THREE.Color(`rgba(21,98,254,255)`),
    bump: .3,
    z: 0
  })

  useFrame(({ clock }, dt) => {
    shader.current.uTime = clock.getElapsedTime() / 4

    mesh.current.rotation.x += dt
    mesh.current.rotation.y += dt
  })

  console.log("OrganicFluid data: ", data)

  return (
    <mesh ref={mesh} receiveShadow castShadow position={[0, -3, 0]}>
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