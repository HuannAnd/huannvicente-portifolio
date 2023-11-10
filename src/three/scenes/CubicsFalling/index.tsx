"use client";

import { Suspense, useState } from 'react';

import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Plane from './Plane';
import Cube from './Cube';
import Lights from './Lights';
import Sphere from "@/three/geometry/Sphere"

import useMobileEffect from '@/hooks/useMobileEffect';

import "@/three/shaders"

export default function CubicsFalling({ speed = 5, depth = 30, size = 1, easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  console.log("CubicsFalling was render")
  const [count, setCount] = useState(5)

  useMobileEffect(() => {
    setCount(1)
    console.log("The counted has changed", count)

  })

  console.log("CubicsFalling count: ", count)

  // const isPending = useDelayTime();

  // if (isPending) return null

  return (
    <Suspense fallback={null}>

      <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 30 }}>
        <color attach="background" args={["#000"]} />
        <OrbitControls />
        {/* {Array.from({ length: count }, (_, i) => <Cube count={count} z={Math.round(easing(i / count) * depth)} size={size} maxSpeed={speed} index={i} key={i} />)} */}
        <Sphere count={count} index={10} />
        {/* {Array.from({ length: count }, (_, i) => <Sphere count={count} index={i} key={`sphere_${i}`} />)} */}
        {/* <Cube /> */}
        {/* <waveShaderMaterial /> */}
        {/* <axesHelper args={[20]} /> */}
        <Lights />
        <Plane />
      </Canvas>
    </Suspense>
  )
}