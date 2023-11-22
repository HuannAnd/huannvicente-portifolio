'use client';

import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface PolygonProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, "height" | "width" | "radius"> {
  isRegular?: boolean,
  vertexes: number,
  trigger: string;
  radius: number
}

export default function Polygon({
  radius = 200,
  trigger,
  isRegular = true,
  vertexes,
  ...rest
}: PolygonProps) {
  const svg = useRef<SVGSVGElement>(null!)
  const rect = useRef<SVGRectElement>(null!)

  const centerX = radius
  const centerY = centerX

  const width = 2 * radius
  const height = width

  const sides = vertexes

  const handleAllVertices = () => {
    const vertices = []

    for (let i = 0; i < sides; i++) {
      const angle = (i * (360 / sides) * Math.PI) / 180
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      vertices.push(`${x},${y}`)
    }

    return vertices.join(' ')
  };
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl
      .from(rect.current, {
        scale: .8,
      })
      .from(svg.current, {
        rotateZ: "0deg"
      })
      .to(rect.current, {
        scale: 1,
        rotateZ: "30deg",
        scrollTrigger: {
          start: "top top",
          end: "bottom top",
          trigger,
          scrub: true
        }
      })
      .to(svg.current, {
        rotateZ: "45deg",
        scrollTrigger: {
          start: "top top",
          end: "bottom top",
          trigger,
          scrub: true
        }
      })

    return () => {
      tl.kill()
    }

  }, [trigger])

  return (
    <svg
      {...rest}
      ref={svg}
      style={{ transformOrigin: "center" }}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        className="mix-blend-difference bg-blend-difference"
        points={handleAllVertices()}
        fill="none"
        stroke="#ccc"
        strokeWidth=".5"
      />
    </svg>
  )
}