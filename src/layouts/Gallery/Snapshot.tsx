'use client';

import Image from "next/image";

import { motion } from "framer-motion";

import { IImageContent, IProjectData } from '@/services/projects/type'
import { useFollowerContext } from "@/hooks/useFollowerContext";


interface ContentProps extends IImageContent {
  strategy: "mobile" | "desktop" | "mixed",
}

function RowContent({ strategy, title, isMP4, url, isMobile }: ContentProps) {
  const { updateEvent } = useFollowerContext()

  const handles = {
    onMouseEnter: () => updateEvent({ type: "hovered" }),
    onMouseLeave: () => updateEvent({ type: "normal" }),

  } as React.HTMLAttributes<HTMLDivElement>

  function orquestrator() {
    switch (strategy) {
      case "mobile":
        if (isMobile) return "grow  my-auto basis-0 order-2 group/item"
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
      className={`${cn} group/snapshot`}
      {...handles}
    >
      {isMP4 ? (
        <video
          className="my-auto block w-full h-auto duration-500 ease-smooth"
          src={`/projects/${url}/video.mp4`}
          loop
          muted
          autoPlay
          playsInline
        ></video>
      ) : isMobile ? (
        <img
          className="object-contain w-full h-auto duration-300 ease-smooth"
          src={`/projects/${url}/image.png`}
          loading="lazy"
          alt="Warren image"
        />
      ) : (
        <div className="w-full pointer-events-none overflow-hidden">
          <img
            className="object-contain w-full h-auto group-hover/snapshot:scale-110 group-hover/snapshot:saturate-100 saturate-0 duration-300 ease-smooth"
            src={`/projects/${url}/image.png`}
            loading="lazy"
            alt="Warren image"
          />
        </div>
      )}
      <div className="absolute bottom-0 translate-y-full">
        {/* <small className="text-[16px] font-light text-white">.00{nTh}</small> */}
        <p className="text-[20px] mx-auto group-hover/item:-tracking-tighter group-hover/item:text-white/50 ease-smooth duration-300 font-normal text-center text-white">{title}</p>
      </div>
    </div>
  )
}

type SnapShotProps = {
  strategy: "mobile" | "desktop" | "mixed",
  nTh: number,
  children: React.ReactNode
}

function RowRoot({ nTh, strategy, children }: SnapShotProps) {
  const speed = 3

  function orquestrator() {
    switch (strategy) {
      case "mixed":
        return "grid grid-cols-[2fr_1fr] gap-[3vw] h-auto"
      case "mobile":
      case "desktop":
      default:
        return "flex flex-row justify-center gap-[3vw] px-[3vw] items-center min-h-[80vh]"
    }
  }

  const cn = orquestrator()

  return (
    <motion.article
      data-scroll
      data-scroll-speed={nTh * speed}
      className={`${cn} relative select-none min-h-[80vh] flex flex-row justify-center items-center w-full grow`}
    >
      {children}
    </motion.article>
  )
}

export default {
  Root: RowRoot,
  Content: RowContent
}