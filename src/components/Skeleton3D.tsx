'use client';
import { Mesh } from "three";

interface Props {

}

export default function Skeleton3D({ }: Props) {
  return (
    <mesh>
      <boxGeometry args={[6, 6, 6, 12, 12, 12]} />
      <meshStandardMaterial wireframe />
    </mesh>
  )
}