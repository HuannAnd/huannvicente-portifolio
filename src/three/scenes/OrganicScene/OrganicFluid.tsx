'use client';

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import * as THREE from 'three'

import { ThreeElements, useFrame } from '@react-three/fiber'
import useWindowViewport from "@/hooks/useWindowViewport";
import installMediaQueryWatcher from "@/utils/media-query-watcher";

import gsap from "gsap";
import useLocomotiveScroll from "@/contexts/LocomotiveScrollProvider/useLocomotiveScroll";


interface Props { }

export default function OrganicFluid({ }: Props) {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useRef<THREE.SphereGeometry>(null!)
  const shader = useRef<ThreeElements["noiseShaderMaterial"]>(null!)
  const locomotiveScroll = useLocomotiveScroll()

  const [data] = useState({
    radius: 5,
    color: new THREE.Color(`rgba(21,98,254,255)`),
    bump: .3,
    z: 0
  })

  useLayoutEffect(() => {
    if (!mesh.current) return

    let mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)"
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions!

        if (isDesktop) {
          gsap.to(mesh.current.position, { y: 0, duration: 3, ease: "power4.inOut" })
        } else if (isMobile) {
          gsap.to(mesh.current.position, { y: 0, duration: 0 })
        }
      }
    )

    return () => {
      mm.revert()
      locomotiveScroll?.destroy()
    }
  }, [locomotiveScroll])

  useFrame((state, dt) => {
    shader.current.uTime = state.clock.getElapsedTime() / 5

    mesh.current.rotation.x += dt
    mesh.current.rotation.y += dt
  })

  return (
    <mesh ref={mesh} position={[0, -100, -20]}>
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