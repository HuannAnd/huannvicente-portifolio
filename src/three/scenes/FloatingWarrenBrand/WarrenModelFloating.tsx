import React, { useRef } from "react";

import { useGLTF, Float } from "@react-three/drei";

import Skeleton3D from "@/components/Skeleton3D";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d"

import useSmoothMousePosition from "./useSmoothMousePosition";

export default function Model({ }) {
  const group = useRef<any>(null)
  const centerY = -2.5

  const { nodes } = useGLTF("/models/warren.gltf") as GLTF & { nodes: any };
  console.log("Nodes value: ", nodes)

  const mouse = useSmoothMousePosition()

  const modelYAngleRangeInRadians = Math.PI / 10
  const modelXAngleRangeInRadians = Math.PI / 10

  const rotationY = useTransform(mouse.x, [0, 1], [-modelYAngleRangeInRadians, modelYAngleRangeInRadians])
  const rotationX = useTransform(mouse.y, [0, 1], [-modelXAngleRangeInRadians, modelXAngleRangeInRadians])
  const positionY = useTransform(mouse.y, [0, 1], [centerY + 1, centerY - 1])
  const positionX = useTransform(mouse.x, [0, 1], [-2, 2])

  return (
    <Float>
      <motion.group
        ref={group}
        rotation-y={rotationX}
        rotation-x={rotationY}
        position-x={positionX}
        position-y={positionY}
        dispose={null}
      >
        <Mesh node={nodes.WarrenBound001} />
        <Mesh node={nodes.Cube004} />
        <Mesh node={nodes.Cube005} />
        <Mesh node={nodes.Cube006} />
      </motion.group>
    </Float>
  );
}

interface MeshProps {
  node: any,
}

function Mesh({ node }: MeshProps) {
  return (
    <motion.mesh
      castShadow
      receiveShadow
      {...node}
    />
  )
}

useGLTF.preload("/models/warren.gltf");