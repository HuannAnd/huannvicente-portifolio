'use client';

import { useGLTF } from "@react-three/drei";

interface Props {
  pathname: string
}

export default function GLTFObject({ pathname }: Props) {
  // const { nodes } = useGLTF(pathname)

  return (
    <group>

    </group>
  )
}

interface MeshProps {
  node: any,
}


function Mesh({ node }: MeshProps) {
  const { geometry, position, rotation, scale, material } = node
  return (
    <mesh
      castShadow
      receiveShadow
      {...node}
    />
  )
}