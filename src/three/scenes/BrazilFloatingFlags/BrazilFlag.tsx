'use client';

import { WaveShaderMaterialProps } from "@/three/shaders/WaveShaderMaterial/global";

import { ThreeElements, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Float } from '@react-three/drei'
import * as THREE from 'three'

import { forwardRef, useRef, useState } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";

interface FlagProps {
  mouse: {
    x: MotionValue<number>
    y: MotionValue<number>
  }
}

function BrazilFlag({ mouse }: FlagProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const mesh = useRef<THREE.Mesh>(null!)
  const shader = useRef<WaveShaderMaterialProps>(null!)

  const [image] = useLoader(THREE.TextureLoader, [
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png"
  ])

  const [data] = useState({
    rotationX: THREE.MathUtils.randInt(-30, 30) * (Math.PI / 180)
  })

  useFrame(({ clock }, dt) => {
    const flag = mesh.current;
    const timeStamp = clock.getElapsedTime()
    if (!flag) return

    shader.current.uTime = timeStamp
    flag.rotation!.x = (mouse.y.get() - .5) * (Math.PI / 3);
    flag.rotation!.y = (mouse.x.get() - .5) * (Math.PI / 3);

    const newZPosition = flag.position!.z * (mouse.x.get() - .5) * (mouse.y.get() - .5)
    flag.position!.z = newZPosition
  })

  return (
    <Float>
      <mesh
        ref={mesh as any}
        position={[-0, -0, 500]}
      >
        <planeBufferGeometry args={[25, 15, 8, 8]} />
        <waveShaderMaterial ref={shader} uTexture={image} uScreenWidth={109} uColor={"green"} />
      </mesh>
    </Float>
  )
}

export default forwardRef(BrazilFlag)