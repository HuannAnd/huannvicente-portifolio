"use client"

import { useRef, useState } from "react";
import { useFrame, ThreeElements, useThree } from "@react-three/fiber";

import * as THREE from 'three'


type CubeProps = ThreeElements['mesh'] & {
  index: number,
  maxSpeed: number,
  size: number,
  z: number,
  count: number
}


export default function Cube({ maxSpeed, size, index, z, count, ...props }: CubeProps) {
  const mesh = useRef<any>(null!)
  const shader = useRef<ThreeElements["waveShaderMaterial"]>(null!)
  const { viewport, camera } = useThree();

  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])

  const xMin = -(width - (2 * size * Math.sqrt(3))) / 2;
  const yMin = -(height - (2 * size * Math.sqrt(3))) / 2;

  const [data] = useState({
    size,
    x: xMin + (index / count) * (width - (2 * size * Math.sqrt(3))) + 2,
    y: THREE.MathUtils.randFloat(yMin, -yMin) * 2,
    z: Math.sin(index * (360 / count)),
    speed: THREE.MathUtils.randInt(1, maxSpeed),
    scale: THREE.MathUtils.randFloat(0, 3),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
    color: new THREE.Color(`hsl(${index * (360 / count)}, 100%, 75%)`)
  })

  useFrame(({ clock }, dt) => {
    const cube = mesh.current;
    shader.current.uTime = clock.getElapsedTime()

    if (dt < 0.1) cube.position.set(data.x, data.y += dt * data.speed, data.z);
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
      <waveShaderMaterial ref={shader as any}  uColor="hotpink" />
    </mesh>
  );
}