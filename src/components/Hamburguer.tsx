'use client';

import { useEffect, useState, useLayoutEffect, useRef } from "react";

import { Variants } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useAsideContext from "@/hooks/useAsideContext";
import useSetCursor from "@/hooks/useSetCursor";
import { usePathname } from "next/navigation";
import useLocomotiveScrollRef from "../contexts/LocomotiveScrollProvider/useLocomotiveScrollRef";


interface HamburguerProps {
  canBeShow: boolean
}

const variants = {
  pressed: { opacity: 1, scale: 1, borderRadius: "999px" },
  normal: { opacity: 1, scale: 1, borderRadius: "0px" },
  closed: { opacity: 0, scale: 0, transition: { duration: .3 } }
} as Variants


export default function Hamburguer({ }: HamburguerProps) {
  const burger = useRef(null!)
  const height = 50
  const width = height
  const offsetY = 5

  const radius = (height - 4 * offsetY) / 6
  const finalRadius = radius * Math.sqrt(3) * 1.5

  const centerX = width / 2
  const centerY = height / 2

  const getCirclePosY = (nthChild: number) => radius * (2 * nthChild - 1) + (nthChild * offsetY)

  const circle1 = useRef<SVGCircleElement>(null!)
  const initialCircle1PosX = centerX
  const initialCircle1PosY = getCirclePosY(1)

  const circle2 = useRef<SVGCircleElement>(null!)
  const initialCircle2PosX = initialCircle1PosX
  const initialCircle2PosY = getCirclePosY(2)

  const circle3 = useRef<SVGCircleElement>(null!)
  const initialCircle3PosX = initialCircle1PosX
  const initialCircle3PosY = getCirclePosY(3)

  const [isOpen, setIsOpen] = useState(false)

  const canBeShow = true

  const setCursor = useSetCursor()
  const pathname = usePathname()

  const handleAsideOpening = useAsideContext()

  useEffect(() => {
    handleAsideOpening({ type: "set", payload: false })

  }, [canBeShow])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(burger.current, {
      scrollTrigger: {
        start: 0,
        end: 3 * window.innerHeight,
        trigger: document.documentElement,
        onLeave: () => { gsap.to(burger.current, { opacity: 1, scaleX: 1, duration: .8, ease: "power3.out" }) },
        onLeaveBack: () => { gsap.to(burger.current, { opacity: 0, scaleX: .5, duration: .8, ease: "power3.out" }) }
      }
    })
  }, [pathname, burger])

  function onClick(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation()
    handleAsideOpening({ type: "toogle" })
    setIsOpen(isOpen => !isOpen)

    const tl = gsap.timeline()

    if (!isOpen) {
      tl
        .to(
          [circle1.current, circle2.current, circle3.current],
          {
            attr: {
              cx: centerX,
              cy: centerY,
              r: finalRadius
            },
            duration: 1,
            ease: "power3.out",
            stagger: .1
          })
        .to(burger.current, {
          scale: .8
        }, 0)
        .to("#sidebar path", {
          attr: {
            d: `M0 0 Q0 ${window.innerHeight / 2}, 0 ${window.innerHeight} Z`
          },
          ease: "power3.out",
          duration: 1
        }, 0)
      return
    }
    tl
      .to(
        circle1.current,
        {
          attr: {
            cx: initialCircle1PosX,
            cy: initialCircle1PosY,
            scale: 1,
            r: radius,
          },
          duration: 1,
          ease: "power3.out",
        })
      .to(
        circle2.current,
        {
          attr: {
            cx: initialCircle2PosX,
            cy: initialCircle2PosY,
            r: radius,
          },
          duration: 1,
          ease: "power3.out",

        }, "0")
      .to(
        circle3.current,
        {
          attr: {
            cx: initialCircle3PosX,
            cy: initialCircle3PosY,
            r: radius,
          },
          duration: 1,
          ease: "power3.out",
        }, "0")
      .to(burger.current, { scale: 1 }, 0)
      .to("#sidebar path", {
        attr: {
          d: `M0 0 Q128 ${window.innerHeight / 2}, 0 ${window.innerHeight} Z`
        },
        duration: .8,
        ease: "power3.out",
      }, 0)
  }

  return (
    <div
      aria-label="hamburguer"
      ref={burger}
      onClick={onClick}
      onMouseLeave={() => setCursor({ state: "normal" })}
      id="#hamburguer"
      className="w-auto p-5 mix-blend-difference rounded-full z-[200] fixed group/hamburguer cursor-pointer pointer-events-auto gap-2 flex justify-center flex-col text-black text-center top-[3vw] right-[3vw] aspect-square"
    >
      <svg width={width} height={height} className="grid place-content-center" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="displacementFilter">
            <feGaussianBlur
              stdDeviation={100}
              result="blur"
            />
            <feTurbulence
              type="fractalNoise"
              in="blur"
              in2="blur"
              // baseFrequency={0.0005}
              color="black"
              result="turbulance"
              numOctaves="10"
            >
              <animate attributeName="baseFrequency" values="0;0.003;0" begin={0} dur={5} repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate attributeName="scale" values="1;50;2" begin={0} dur={5} repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
          <filter id="gooyEffet2">
            <feGaussianBlur
              stdDeviation={10}
              in="SourceGraphic"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -5"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        <g style={{ filter: "url(#gooyEffet2)" }}>
          <circle ref={circle1} cx={initialCircle1PosX} cy={initialCircle1PosY} r={radius} fill="#fff" />
          <circle ref={circle2} cx={initialCircle2PosX} cy={initialCircle2PosY} r={radius} fill="#fff" />
          <circle ref={circle3} cx={initialCircle3PosX} cy={initialCircle3PosY} r={radius} fill="#fff" />
        </g>
      </svg>
    </div>
  )
}

