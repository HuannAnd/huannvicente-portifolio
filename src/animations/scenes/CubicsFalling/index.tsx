"use client";

import { Suspense, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import Plane from './Plane';
import Cube from './Cube';
import Lights from './Lights';

import useMobileEffect from '@/hooks/useMobileEffect';


export default function CubicsFalling({ speed = 5, depth = 30, size = 1, easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  console.log("CubicsFalling was render")
  const [count, setCount] = useState(40)

  useMobileEffect(() => {
    setCount(1)
    console.log("The counted has changed", count)

  })

  console.log("CubicsFalling count: ", count)

  return (
    <Suspense fallback={null}>
      <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 15 }}>
        <color attach="background" args={["#000"]} />
        {/* <OrbitControls /> */}
        {Array.from({ length: count }, (_, i) => <Cube count={count} z={Math.round(easing(i / count) * depth)} size={size} maxSpeed={speed} index={i} key={i} />)}
        {/* <axesHelper args={[20]} /> */}
        <Lights />
        <Plane />
      </Canvas>
    </Suspense>

  )
}