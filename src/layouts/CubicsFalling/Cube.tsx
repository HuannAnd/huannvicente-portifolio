"use client"

import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

import * as THREE from 'three'

type CubeProps = ThreeElements['mesh'] & {
  index: number,
  speed: number,
  size: number,
  z: number,
  count: number
}

export default function Cube({ speed, size, index, z, count, ...props }: CubeProps) {
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