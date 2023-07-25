"use client"

import { useHelper } from "@react-three/drei";
import { useRef } from "react";

import * as THREE from "three";

export default function Lights() {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  const directionRef = useRef<THREE.DirectionalLight>(null!);
  const spotLightRef = useRef<THREE.SpotLight>(null!);

  useHelper(pointLightRef, THREE.PointLightHelper, 20, "white");
  useHelper(directionRef, THREE.DirectionalLightHelper, 1, "white");
  useHelper(spotLightRef, THREE.SpotLightHelper, "white");

  const color = "white";
  const intensity = 1;
  const distance = 20;
  const angle = 120;
  const penumbra = 1;
  const decay = 1.5;


  return (
    <>
      <spotLight position={[0, 10, 0]} args={[color, intensity, distance, angle, penumbra, decay]} />
      {/* <pointLight ref={pointLightRef} intensity={1} args={["#fff", 0.25, 0.5]} position={[10, 10, 10]} /> */}
      {/* <ambientLight args={["#ffffff", 0.1]} /> */}
      {/* <directionalLight position={[-10, -10, 0]} args={["white", 1]} ref={directionRef} /> */}
    </>
  )
}