"use client"

import { useFollowerContext } from "@/hooks/useFollowerContext"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Loading() {
  const path = usePathname()
  const { setIsLoading, updateEvent } = useFollowerContext()
  // camera
  const depth = 30

  // spotLight
  const color = "white";
  const intensity = 1;
  const distance = 20;
  const angle = 120;
  const penumbra = 1;
  const decay = 1.5;

  updateEvent({ type: "normal" })
  setIsLoading(true)

  return (
    <div className="absolute cursor-wait w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Suspense fallback={null}>
        <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, depth + 8], fov: 20, near: 0.01, far: depth + 15 }}>
          <color attach="background" args={["#000"]} />
          <OrbitControls />
          {/* <axesHelper args={[20]} /> */}
          {/* <mesh castShadow position={[0, -2, 0]}>
            <meshPhongMaterial color="blue" />
            <sphereGeometry args={[3, 15, 15]} />
          </mesh>
          <mesh castShadow position={[4, -3, -5]}>
            <meshPhongMaterial color="red" />
            <sphereGeometry args={[2, 15, 15]} />
          </mesh>
          <mesh castShadow position={[-4, -4, -6]}>
            <meshPhongMaterial color="green" />
            <sphereGeometry args={[1, 15, 15]} />
          </mesh> */}
          <spotLight position={[0, 10, 0]} args={[color, intensity, distance, angle, penumbra, decay]} />
          <mesh castShadow position={[0, -5, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
            <planeGeometry args={[30, 30]} />
            <meshLambertMaterial args={[{ color: 0x777777, side: 2 }]} />
          </mesh>
        </Canvas>
      </Suspense>
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 bg-blend-hard-light">
        <AnimatePresence>
          <motion.h1
            className="text-[clamp(120px,_10vw,_200px)] text-white font-bold"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
          >Redirecting</motion.h1>
          <div className="absolute w-full px-[9vw] top-1/2 -translate-y-1/2">
            <motion.p
              className="text-white text-center tracking-tighter text-[30px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, mass: 2, duration: 1 }}
            >{path}</motion.p>
            {/* <small className="text-white w-full block font-light text-center"></small> */}
          </div>
        </AnimatePresence>
        <p className="absolute py-[3vw] text-center text-[12px] font-light">Please don't close screen</p>
      </div>
    </div>
  )
}