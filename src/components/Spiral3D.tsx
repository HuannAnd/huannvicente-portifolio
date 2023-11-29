'use client';

import { useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface Props { }

type GLTFResult = GLTF & {
  nodes: {
    Spiral: THREE.Mesh;
  };
  materials: {};
};

export default function Spiral3D({ }: Props) {
  const mesh = useRef<THREE.Mesh>(null)
  const { nodes } = useGLTF("/models/spiral.gltf") as GLTFResult

  useFrame(({ clock }, dt) => {
    if (!mesh.current) return
    const elapsedTime = clock.getElapsedTime()
    mesh.current.rotation.z += (1 + Math.abs(Math.sin(elapsedTime / 10))) * dt
  })

  return (
    <mesh
      ref={mesh}
      castShadow
      receiveShadow
      position={[-15, -5, -5]}
      rotation-x={Math.PI / 3}
      rotation-y={-Math.PI / 4}
      geometry={nodes.Spiral.geometry}
    >
      <meshStandardMaterial opacity={0} wireframe color={"#ffffff"} />
    </mesh>
  )
}

useGLTF.preload("/models/spiral.gltf")