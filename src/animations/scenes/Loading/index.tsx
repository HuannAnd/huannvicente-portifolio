import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading"
import useFollowerSetState from "@/hooks/useFollowerSetState"

import * as THREE from 'three'

import { Suspense, useState } from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { AnimatePresence } from "framer-motion"

import Lights from "./Lights"
import Sphere from "./Sphere"
import Plane from "./Plane"
import Cube from "./Cube"


export default function Loading() {
  console.log("Loading was render")
  const setCursorState = useFollowerSetState()
  const setIsLoading = useFollowerSetIsLoading()

  const minDeg = 30
  const maxDeg = 360

  const [data] = useState({
    color: `hsl(${THREE.MathUtils.randInt(minDeg, maxDeg)}, 100%, 75%)`,
    strategy: ["sphereBouncing", "squareRotating"]
  })

  const depth = 30

  setCursorState("normal")
  setIsLoading(true)

  const randStrategy = Math.floor(data.strategy.length * Math.random())
  const Component = data.strategy[1] === "sphereBouncing" ? Cube : Sphere

  return (
    <div className="absolute cursor-wait w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Suspense fallback={null}>
        <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 15 }}>
          <color attach="background" args={["#000"]} />
          <OrbitControls />
          {/* <axesHelper args={[20]} /> */}
          {/* <MemoizedThing color={data.color} speed={2} size={4} /> */}
          {/* <Component color={data.color} speed={2} size={4} /> */}
          <Sphere color={data.color} speed={2} size={4} />
          <Lights />
          <Plane />
        </Canvas>
      </Suspense>
      {/* <div className="absolute w-full h-full top-0 left-0 bg-black/50 bg-blend-hard-light">
        <AnimatePresence initial={false}>
          <div className="absolute w-full px-[9vw] top-1/2 -translate-y-1/2">
            <motion.h5
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-white text-center w-full">Please dont close window, wait a little bit</motion.h5>
          </div>
        </AnimatePresence>
      </div> */}
    </div>
  )
}