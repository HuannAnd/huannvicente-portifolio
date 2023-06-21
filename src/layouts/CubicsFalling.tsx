"use client";

import * as THREE from 'three';
// import { createRoot } from 'react-dom/client'
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber';


type CubeProps = ThreeElements['mesh'] & {
  index: number,
  speed: number,
  size: number,
  z: number,
  count: number
}

function Cube({ speed, size, index, z, count, ...props }: CubeProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const { viewport, camera } = useThree();

  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])

  const xMin = -(width - (2 * size * Math.sqrt(3))) / 2;
  const yMin = -(height - (2 * size * Math.sqrt(3))) / 2;

  const [data] = useState({
    size,
    x: xMin + (index / count) * (width - (2 * size * Math.sqrt(3))) + 2,
    y: THREE.MathUtils.randFloat(yMin, -yMin) * 2,
    z: Math.sin(index * (360 / count)),
    scale: THREE.MathUtils.randFloat(0, 3),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
    color: new THREE.Color(`hsl(${index * (360 / count)}, 100%, 75%)`)
  })

  let timer = 0;

  useFrame((_, dt) => {
    const cube = mesh.current;

    if (dt < 0.1) cube.position.set(data.x, data.y += dt * speed, data.z);
    cube.rotation.set(data.rX += dt, 1, data.rZ += dt);

    if (cube.position.y > height) {
      data.y = -height
    }

  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={data.scale}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={data.color} />
    </mesh>
  );
}


export default function CubicsFalling({ speed = 3, count = 100, depth = 30, size = 1, easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    <Suspense fallback={null}>
      <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth], fov: 20, near: 0.01, far: depth + 15 }}>
        <color attach="background" args={["#fff"]} />
        <pointLight intensity={.5} position={[10, 10, 10]} />
        {Array.from({ length: count }, (_, i) => <Cube count={count} z={Math.round(easing(i / count) * depth)} size={size} speed={speed} index={i} key={i} />)}
        <ambientLight args={["#ffffff", 0.5]} />
      </Canvas>
    </Suspense>

  )
}