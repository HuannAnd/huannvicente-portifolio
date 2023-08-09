"use client"

import { useRef } from "react"

import useFollowerSetState from "@/hooks/useFollowerSetState"
import useLoad from "@/hooks/useLoad"

import { IImageContent } from "@/services/projects/type"

interface RowContentProps extends IImageContent {
  strategy: "mobile" | "desktop" | "mixed",
  index: number
}

export default function RowContent({
  strategy,
  title,
  isMP4,
  url,
  index,
  isMobile
}: RowContentProps) {
  const setCursorState = useFollowerSetState()

  const ref = useRef<HTMLImageElement>(null!)
  const { isLoaded, handleImageLoad } = useLoad(ref)

  const handles = {
    onMouseEnter: () => setCursorState("hovered"),
    onMouseLeave: () => setCursorState("normal")
  } as React.HTMLAttributes<HTMLDivElement>

  function orquestrator() {
    switch (strategy) {
      case "mobile":
        if (isMobile) return "grow my-auto basis-0 order-2 group/item"
        return "grow-[2] flex justify-center basis-0 items-center order-1 group/item"
      case "desktop":
      case "mixed":
        if (isMobile) return "grow order-2 basis-0 relative group/item"
        return "grow-[2] order-1 relative basis-0 group/item"
      default:
        return "min-h-[80vh]"
    }
  }

  const cn = orquestrator()

  return (
    <div
      className={`${cn} cursor-pointer group/snapshot`}
      data-scroll
      data-scroll-speed={index * 3}
      {...handles}
    >
      {isMP4 ? (
        <video
          className="my-auto block w-full cursor-pointer h-auto duration-500 ease-smooth"
          src={`/projects/${url}/video.mp4`}
          loop
          muted
          autoPlay
          playsInline
        ></video>
      ) : isMobile ? (
        <img
          className={`${isLoaded ? "" : "animate-pulse"}  object-contain w-full h-auto duration-300 ease-smooth`}
          ref={ref}
          src={`/projects/${url}/image.png`}
          loading="lazy"
          onLoad={handleImageLoad}
          alt="Warren image"
        />
      ) : (
        <div className="w-full pointer-events-none overflow-hidden">
          <img
            className={`${isLoaded ? "" : "animate-pulse"} object-contain  w-full h-auto group-hover/snapshot:scale-110 delay-300 group-hover/snapshot:saturate-100 saturate-0 duration-300 ease-smooth`}
            ref={ref}
            src={`/projects/${url}/image.png`}
            loading="lazy"
            onLoad={handleImageLoad}
            alt="Warren image"
          />
        </div>
      )}
      <div className="absolute">
        {/* <small className="text-[16px] font-light text-white">.00{nTh}</small> */}
        <p className="text-[20px] mx-auto group-hover/item:-tracking-tighter group-hover/item:text-white/50 ease-smooth duration-300 font-normal text-center text-white">{title}</p>
      </div>
    </div>
  )
}