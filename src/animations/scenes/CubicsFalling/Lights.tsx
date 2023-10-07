"use client"

import { useRef } from "react";

import * as THREE from "three";

import { useFrame } from "@react-three/fiber";

export default function Lights() {
  const ref = useRef<THREE.SpotLight>(null!);

  const color = "white";
  const intensity = 0;
  const distance = 20;
  const angle = 120;
  const penumbra = 1;
  const decay = 1.5;

  useFrame((state, dt) => {
    const elapesedTime = state.clock.getElapsedTime()

    if(elapesedTime < 3) return
    if(ref.current.intensity >= 1) return
    ref.current.intensity += dt * .2
  })


  return (
    <>
      <spotLight ref={ref} position={[0, 10, 0]} args={[color, intensity, distance, angle, penumbra, decay]} />
    </>
  )
}