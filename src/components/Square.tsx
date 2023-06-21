"use client";

import React, { SVGProps } from "react"

import { motion } from 'framer-motion'
import useIsVisible from "@/hooks/useIsVisible";


type SquareProps = SVGProps<SVGSVGElement> & {
  scale: number,
  color: string | undefined,
  start: boolean,
  delay: number
}

export default function Square({
  width,
  fill,
  className,
  scale,
  color,
  start,
  delay,
  ...props
}: SquareProps) {
  const height = width;

  return (
    <motion.svg
      className={`${className} absolute `}
      width="108" height="108" viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
        filter: "blur(10px)"
      }}
      animate={{
        opacity: start ? 1 : 0,
        filter: "blur(0px)"
      }}
      transition={{
        delay,
        duration: 1
      }}
    >
      <g filter="url(#filter0_d_5_224)">
        <rect x="4" width={width ? width : (scale * 100)} height={height ? height : (scale * 100)} fill={color ?? "#333"} />
      </g>
      <defs>
        <filter id="filter0_d_5_224" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_224" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_224" result="shape" />
        </filter>
      </defs>
    </motion.svg>
  )
}