"use client";

export default function Plane() {
  return (
    <mesh castShadow position={[0, -5, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshLambertMaterial args={[{ color: 0x777777, side: 2 }]} />
    </mesh>
  )
}