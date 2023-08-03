"use client";

import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';

import Plane from './Plane';
import Cube from './Cube';
import Lights from './Lights';


export default function CubicsFalling({ speed = 5, count = 40, depth = 30, size = 1, easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  console.log("CubicsFalling was render")


  return (
    <Suspense fallback={null}>
      <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 15 }}>
        <color attach="background" args={["#000"]} />
        {/* <OrbitControls /> */}
        {Array.from({ length: count }, (_, i) => <Cube count={count} z={Math.round(easing(i / count) * depth)} size={size} speed={speed} index={i} key={i} />)}
        {/* <axesHelper args={[20]} /> */}
        <Lights />
        <Plane />
      </Canvas>
    </Suspense>

  )
}