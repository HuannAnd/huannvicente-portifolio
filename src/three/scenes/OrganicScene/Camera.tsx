'use client';

import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

import { centerPosition } from "./Camera.animation";
import useWindowViewport from "@/hooks/useWindowViewport";


interface Props { }

export default function Camera({ }: Props) {
  const ref = useRef<CameraControls>(null!)
  const { camera } = useThree()
  const windowViewport = useWindowViewport()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let mm = gsap.matchMedia()
    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768  px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions!

        if (isDesktop || isMobile) {
          gsap.set(camera.position, centerPosition)
        }
      }
    )

    return () => {
      mm.revert()
    }
  },
    [camera, ref, windowViewport]
  )


  return <CameraControls enabled={false} makeDefault args={[camera]} ref={ref} />
}