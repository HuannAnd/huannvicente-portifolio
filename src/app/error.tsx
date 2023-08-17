'use client' // Error components must be Client Components

import { Suspense, useEffect } from 'react'

import { useHelper } from "@react-three/drei";
import { useRef } from "react";

import * as THREE from "three";
import { Canvas } from '@react-three/fiber';

function Lights() {
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
function Plane() {
  return (
    <>
      <mesh castShadow position={[0, -5, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshLambertMaterial args={[{ color: 0x777777, side: 2 }]} />
      </mesh>
    </>
  );
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="absolute cursor-wait w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Suspense fallback={null}>
        <Canvas className='w-full h-full' gl={{ antialias: false }} camera={{ position: [0, 0, 38], fov: 20, near: 0.01, far: 45 }}>
          <color attach="background" args={["#000"]} />
          <Lights />
          <Plane />
        </Canvas>
      </Suspense>
    </div>
  )
}