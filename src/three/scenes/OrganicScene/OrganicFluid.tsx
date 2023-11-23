'use client';

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { motion } from 'framer-motion-3d'

import * as THREE from 'three'

import { ThreeElements, useFrame } from '@react-three/fiber'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import useWindowEventListenerEffect from "@/hooks/useWindowEventListener";
import { useMotionValue } from "framer-motion";

interface Windows11ShapeProps { z: number }

export default function Windows11Shape({ }: Windows11ShapeProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useRef<THREE.SphereGeometry>(null!)
  const shader = useRef<ThreeElements["noiseShaderMaterial"]>(null!)

  const [data] = useState({
    radius: 5,
    color: new THREE.Color(`rgba(21,98,254,255)`),
    bump: .3,
  })

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)

  //   let organicFluidMovementsContext = gsap.context(() => {
  //     const movementsOnAbout = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#about",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: true
  //       }
  //     })

  //     movementsOnAbout
  //       .fromTo(
  //         mesh.current.position,
  //         {
  //           x: 0,
  //           y: -1,
  //           z: -0,
  //         },
  //         {
  //           x: 40,
  //           y: 0,
  //           z: -80,
  //         })
  //       .fromTo(
  //         mesh.current.position,
  //         {
  //           x: 40,
  //           y: 0,
  //           z: -80,
  //         },
  //         {
  //           x: -40,
  //           y: 0,
  //           z: -60,
  //           scrollTrigger: {
  //             trigger: "#projects",
  //             start: "top bottom",
  //             end: "top top",
  //             scrub: 1
  //           }
  //         }
  //       )
  //   })

  //   return () => {
  //     organicFluidContext.revert()
  //   }
  // }, [])

  useFrame(({ clock }, dt) => {
    shader.current.uTime = clock.getElapsedTime() / 4

    mesh.current.rotation.x += dt
    mesh.current.rotation.y += dt
  })


  return (
    <mesh ref={mesh} receiveShadow castShadow position={[0, -3, 0]}>
      <sphereGeometry ref={geometry} args={[data.radius, 200, 200]} />
      <noiseShaderMaterial
        uBump={data.bump}
        // uColor={"#188bfe"}
        uColor={"#cc6804"}
        // uColor={"#089e08"}
        // uColor={"#73079e"}
        // uColor="#893a1b"
        ref={shader as any} />
    </mesh>
  )
}