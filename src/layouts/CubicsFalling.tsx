"use client";

import * as THREE from 'three';
// import { createRoot } from 'react-dom/client'
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber';
import { PointLightHelper, DirectionalLightHelper } from 'three'
import { OrbitControls, useHelper } from '@react-three/drei'
import { url } from 'inspector';


type CubeProps = ThreeElements['mesh'] & {
  index: number,
  speed: number,
  size: number,
  z: number,
  count: number
}

function Lights() {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  const directionRef = useRef<THREE.DirectionalLight>(null!);
  const spotLightRef = useRef<THREE.SpotLight>(null!);

  useHelper(pointLightRef, PointLightHelper, 20, "white");
  useHelper(directionRef, DirectionalLightHelper, 1, "white");
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
      castShadow
      receiveShadow
    >
      <boxGeometry args={[size, size, size]} />
      <meshLambertMaterial args={[{ color: data.color, clipShadows: true }]} />
    </mesh>
  );
}


export default function CubicsFalling({ speed = 5, count = 40, depth = 30, size = 1, easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
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