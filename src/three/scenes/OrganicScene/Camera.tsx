'use client';

import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useThree } from "@react-three/fiber";

import useWindowEventListenerEffect from "@/hooks/useWindowEventListener";
import { Vector3 } from "three";


interface CameraProps { }
gsap.registerPlugin(ScrollTrigger)
export default function Camera({ }: CameraProps) {
  const ref = useRef<CameraControls>(null!)
  const { camera } = useThree()

  const depth = 125

 

  useEffect(() => {
    const cameraContext = gsap.context(() => {
      const centerPosition = {
        x: 0,
        y: 0,
        z: depth + 25
      }
      const rightPosition = {
        x: -30,
        y: 0,
        z: depth - 25,
      }
      const leftPosition = {
        x: 30,
        y: 0,
        z: depth - 25,
      }

      gsap.set(camera.position, centerPosition)

      const timelineMovementsOnHero = gsap.timeline({
        scrollTrigger: {
          trigger: "#heroInitial",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      timelineMovementsOnHero.fromTo(camera.position, centerPosition, rightPosition)

      const timelineMovementsOnHeroMiddle = gsap.timeline({
        scrollTrigger: {
          trigger: "#heroMiddle",
          start: "bottom top",
          end: "bottom bottom",
          scrub: 1
        }
      })

      timelineMovementsOnHeroMiddle.fromTo(camera.position, rightPosition, leftPosition)

      const timelineMovementsOnHeroEnd = gsap.timeline({
        scrollTrigger: {
          trigger: "#heroEnd",
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: 1
        }
      })

      timelineMovementsOnHeroEnd.fromTo(camera.position, leftPosition, centerPosition)
    })

    return () => {
      cameraContext.revert()
    }
  },
    [camera, ref]
  )


  return <CameraControls enabled={false} makeDefault args={[camera]} ref={ref} />
}