'use client';

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { lineWithFullHeight, initialLineState } from "./Line.animation";

interface Props { }

export default function Line({ }: Props) {
  const ref = useRef<SVGSVGElement>(null)

  return (
    <svg ref={ref} className="h-full absolute left-[2px]" width={2}>
      <line
        stroke="#111"
        strokeWidth={3}
        x1={0}
        y1={0}
        x2={0}
        y2="100%"
      />
    </svg>
  )
}