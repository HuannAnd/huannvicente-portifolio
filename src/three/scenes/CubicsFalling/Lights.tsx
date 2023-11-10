"use client"

import { useRef } from "react";

import * as THREE from "three";

import { useFrame } from "@react-three/fiber";

const SPOTLIGHT_IN_TIME_SECONDS = 5

export default function Lights() {
  const ref = useRef<THREE.SpotLight>(null!);

  const color = "white";
  const intensity = 0;
  const distance = 20;
  const angle = 120;
  const penumbra = 1;
  const decay = 1.5;

  useFrame((state, _) => {
    const elapesedTime = state.clock.getElapsedTime()

    ref.current.intensity = Math.min(1, elapesedTime * (1 / SPOTLIGHT_IN_TIME_SECONDS))
  })


  return (
    <>
      <spotLight ref={ref} position={[0, 10, 0]} args={[color, intensity, distance, angle, penumbra, decay]} />
    </>
  )
}