'use client';

import { useHelper } from "@react-three/drei";
import { useRef } from "react";

import { SpotLightHelper } from "three";

import { ThreeElements } from "@react-three/fiber";

interface LightsProps {

}

export default function Lights({ }: LightsProps) {
  const ref = useRef<ThreeElements["spotLight"]>(null!)
  // useHelper(ref as any, SpotLightHelper, "white")

  const color = "#fff";
  const intensity = 4;
  const distance = 20;
  const angle = 60;
  const penumbra = 0;
  const decay = 2.5;

  return (
    <>
      <spotLight ref={ref as any} position={[10, 10, 0]} args={[color, intensity, distance, angle, penumbra, decay]} />
      {/* <ambientLight intensity={1} color={"#fff"}/> */}
    </>
  )
}