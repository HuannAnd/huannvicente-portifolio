'use client';

import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useThree } from "@react-three/fiber";

import { centerPosition, leftPosition, rightPosition } from "./Camera.animation";
import useWindowViewport from "@/hooks/useWindowViewport";

import installMediaQueryWatcher from "@/utils/media-query-watcher";


interface Props { }

export default function Camera({ }: Props) {
  const ref = useRef<CameraControls>(null!)
  const { camera } = useThree()
  const windowViewport = useWindowViewport()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const cameraContext = gsap.context(() => {
      gsap.set(camera.position, centerPosition)

      installMediaQueryWatcher("(max-width: 768px)", (matches) => {
        if (matches) {
          gsap.to(camera.position, centerPosition)
        } else {
          
        }
      })
    },)

    return () => {
      cameraContext.revert()
    }
  },
    [camera, ref, windowViewport]
  )


  return <CameraControls enabled={false} makeDefault args={[camera]} ref={ref} />
}