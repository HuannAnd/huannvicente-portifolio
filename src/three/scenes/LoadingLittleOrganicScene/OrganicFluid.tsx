'use client';

import { useLayoutEffect, useRef, useState } from "react";

import * as THREE from 'three'

import { ThreeElements, useFrame } from '@react-three/fiber'

import gsap from "gsap";


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

  useLayoutEffect(() => {
    if (!mesh.current) return

    let mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)"
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions!

      }
    )

    return () => mm.revert()
  }, [])

  useFrame((state, dt) => {
    shader.current.uTime = state.clock.getElapsedTime()

    mesh.current.rotation.z -= dt
    // mesh.current.rotation.y += dt
  })

  return (
    <mesh ref={mesh} scale={0.05} position={[0, 0, -20]}>
      <sphereGeometry ref={geometry} args={[data.radius, 25, 25]} />
      <noiseShaderMaterial
        uBump={data.bump}
        // uColor={"#188bfe"}
        uColor={"#cc6804"}
        // uColor={"#619304"}
        // uColor={"#73079e"}
        // uColor="#893a1b"
        ref={shader as any} />
    </mesh>
  )
}