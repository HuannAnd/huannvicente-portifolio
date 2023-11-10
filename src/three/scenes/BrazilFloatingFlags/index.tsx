'use client';

import { Suspense, useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei";

import BrazilFlag from "./BrazilFlag";
import Lights from "./Lights";
import PernambucoFlag from "./PernambucoFlag";

import "@/three/shaders"
import { useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";


interface BrazilFloatingFlagsProps { }

export default function BrazilFloatingFlags({ }: BrazilFloatingFlagsProps) {
  const depth = 1000
  const ref = useRef<HTMLCanvasElement>(null!)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end start", "start start"] })
  const cameraZPosition = useTransform(scrollYProgress, [0, 1], [100, 300])
  console.log("cameraZPosition: ", cameraZPosition)


  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x),
    y: useSpring(mouse.y)
  }

  const menageMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x)
    mouse.y.set(y)
  }

  useEffect(() => {
    window.addEventListener("mousemove", menageMouseMove)
    return () => window.removeEventListener("mousemove", menageMouseMove)
  },
    []
  )

  return (
    <Suspense fallback={null}>
      <Canvas
        data-scroll
        data-scroll-speed="-0.1"
        ref={ref}
        style={{ height: "100vh" }}
        gl={{ antialias: false, }}
        camera={{ position: [0, 0, cameraZPosition.get()], fov: 20, near: 0.01, far: depth + 500 }}
      >
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[10]} /> */}
        <Lights />
        {/* <Environment preset="studio" /> */}
        <Float>
          <BrazilFlag mouse={smoothMouse} />
          <PernambucoFlag mouse={smoothMouse} />
        </Float>
      </Canvas>
    </Suspense>
  )
}