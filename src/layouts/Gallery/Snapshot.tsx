'use client';

import Image from "next/image";

import { motion } from "framer-motion";

import { IImageContent, IProjectData } from '@/services/projects/type'



interface ContentProps extends IImageContent {
  strategy: "mobile" | "desktop" | "mixed",
}

function RowContent({ strategy, title, isMP4, url, isMobile }: ContentProps) {
  function orquestrator() {
    switch (strategy) {
      case "mobile":
        if (isMobile) return "grow my-auto order-2"
        return "grow-[2] flex justify-center items-center order-1"
      case "desktop":
      case "mixed":
        if (isMobile) return "grow my-auto order-2"
        return "grow-[2] flex justify-center items-center order-1"
      default:
        return "min-h-[80vh]"
    }
  }

  const cn = orquestrator()

  return (
    <div className={cn}>
      {isMP4 ? (
        <video
          className="my-auto block w-full h-auto"
          src={`/projects/${url}/video.mp4`}
          loop
          muted
          autoPlay
          playsInline
        ></video>
      ) : (
        <Image
          className="object-contain w-full h-auto"
          src={`/projects/${url}/image.png`}
          loading="lazy"
          blurDataURL={`/projects/${url}/fallback.png`}
          fill
          alt="Warren image"
        />
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
        return "grid grid-cols-[2fr_1fr] gap-[3vw]"
      case "mobile":
      case "desktop":
      default:
        return "flex flex-row justify-center gap-[3vw] items-center min-h-[80vh]"
    }
  }

  const cn = orquestrator()

  return (
    <motion.article
      data-scroll
      data-scroll-speed={nTh * speed}
      className={`${cn} relative select-none min-h-[80vh] group/item flex flex-row justify-center items-center group/item w-full grow`}
    >
      {children}
    </motion.article>
  )
}

export default {
  Root: RowRoot,
  Content: RowContent
}