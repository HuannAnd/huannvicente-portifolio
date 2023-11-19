'use client';

import { CameraControls, useHelper } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useFrame, useThree } from "@react-three/fiber";


interface CameraProps {

}

export default function Camera({ }: CameraProps) {
  const ref = useRef<CameraControls>(null!)
  const { camera } = useThree()
  // useHelper(ref, THREE.Camera, {})

  const depth = 125

  useEffect(() => {
    if (!ref.current) return

    camera.lookAt(0, 0, 0)
    ref.current.setPosition(0, 0, depth - 75, false)
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl
      .from(camera.position, {
        x: 0,
        y: 0,
        z: depth + 25,
      })
      .to(camera.position, {
        x: -30,
        y: 0,
        z: depth - 25,
        scrollTrigger: {
          trigger: "#heroInitial",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })
      .from(camera.position, {
        x: -30,
        y: 0,
        z: depth - 25
      })
      .to(camera.position, {
        x: 30,
        y: 0,
        z: depth - 25,
        scrollTrigger: {
          trigger: "#heroEnd",
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      })
      .from(camera.position, {
        x: 30,
        y: 0,
        z: depth - 25,
      })
      .to(camera.position, {
        x: 0,
        y: 0,
        z: depth,
        scrollTrigger: {
          trigger: "#heroEnd",
          start: "bottom top",
          end: `+=${3 * window.innerHeight} top`,
          // markers: true,
          scrub: true
        }
      })


    return () => {
      tl.kill()
    }
  },
    [camera, ref]
  )


  return <CameraControls enabled={false} makeDefault args={[camera]} ref={ref} />
}