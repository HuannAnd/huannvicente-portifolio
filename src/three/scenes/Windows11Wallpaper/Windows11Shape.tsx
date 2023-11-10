'use client';

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import * as THREE from 'three'

import { ThreeElements, useFrame } from '@react-three/fiber'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

interface Windows11ShapeProps { z: number }

export default function Windows11Shape({ }: Windows11ShapeProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useRef<ThreeElements["sphereGeometry"]>(null!)
  const shader = useRef<ThreeElements["noiseShaderMaterial"]>(null!)

  const [data] = useState({
    color: new THREE.Color(`rgba(21,98,254,255)`),
    bump: .5,
  })

  console.log("Geometry: ", geometry.current)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl
      .to(mesh.current.position, {
        x: 40,
        y: 0,
        z: -80,
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top top",
          markers: true,
          scrub: true
        }
      })
      .from(mesh.current.position, {
        x: 40,
        y: 0,
        z: -80,
      })
      .to(mesh.current.position, {
        x: -40,
        y: 0,
        z: -60,
        scrollTrigger: {
          trigger: "#projects",
          start: "top bottom",
          end: "top top",
          markers: true,
          scrub: true
        }
      })

    return () => {
      tl.kill()
    }
  }, [])

  useFrame(({ clock }, dt) => {
    shader.current.uTime = clock.getElapsedTime() / 2

    mesh.current.rotation.x += dt
    mesh.current.rotation.y += dt
  })


  return (
    <mesh ref={mesh} receiveShadow castShadow position={[0, -3, 0]}>
      <sphereGeometry ref={geometry as any} args={[5, 1000, 1000]} />
      {/* <coneGeometry ref={geometry as any} args={[3, 1, 300, 300, false, 0, 100]} /> */}
      <noiseShaderMaterial
        uBump={data.bump}
        uColor={"#188bfe"}
        // uColor={"#089e08"}
        // uColor={"#73079e"}
        // uColor="#893a1b"
        ref={shader as any} />
    </mesh>
  )
}