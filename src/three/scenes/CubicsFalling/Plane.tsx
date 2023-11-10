import { ThreeElements, useFrame } from '@react-three/fiber'

import { useRef } from 'react';

export default function Plane() {
  // const shader = useRef<ThreeElements["waveShaderMaterial"]>(null!)

  // useFrame(({ clock }, dt) => {
  //   const deltaTime = clock.getElapsedTime() / 10;
  //   shader.current.uTime = deltaTime;
  // })

  return (
    <>
      <mesh castShadow position={[0, -5, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshLambertMaterial args={[{ color: 0x777777, side: 2 }]} />
        {/* <waveShaderMaterial ref={shader as any} uColor={"gray"} /> */}
        {/* <noise2dShaderMaterial  /> */}
      </mesh>
    </>
  );
}