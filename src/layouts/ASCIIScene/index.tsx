'use client';
import { Canvas } from "@react-three/fiber";

import { OrbitControls, AsciiRenderer } from '@react-three/drei'

import Lights from "./Lights";
import Sphere from "./Sphere";
import { Suspense } from "react";



interface ASCIISceneProps {

}

export default function ASCIIScene({ }: ASCIISceneProps) {
  return (
    <Suspense fallback={null}>
      <Canvas data-scroll data-scroll-speed="3" data-scroll-offset="-50%, -100%" gl={{ antialias: false }} camera={{ position: [0, 0, 18], fov: 20, near: 0.01, far: 1000 }}>
        <Lights />
        <Sphere />
        <color attach="background" args={["black"]} />
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[20]} /> */}
        <AsciiRenderer fgColor="white" bgColor="transparent" />
      </Canvas>
    </Suspense>

  )
}