'use client';

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

// import WarrenModelFloating from './WarrenModelFloating'
import Spiral3D from "@/components/Spiral3D"

import Lights from "./Lights"
import { useGLTF } from "@react-three/drei"
import isMobileDevice from "@/utils/is-mobile-device";
import isServerRendering from "@/utils/is-server-rendering";

interface Props { }

export default function FloatingWarrenBrandScene({ }: Props) {
  const position = isMobileDevice ? "absolute" : "fixed"

  return (
    <Suspense fallback={null}>
      <Canvas
        className='top-0 bottom-0'
        orthographic
        style={{ height: "100vh", zIndex: -1, width: "100vw", position }}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 10], zoom: 70 }}
      >
        <color attach="background" args={["#050505"]} />
        {/* <WarrenModelFloating /> */}
        <Spiral3D />
        <Lights />
      </Canvas>
    </Suspense>
  )
}


useGLTF.preload("/models/spiral.gltf")