'use client';

import Image from "next/image";

import { motion } from "framer-motion";

interface SnapShotProps {
  id: number
  nTh: number
  title: string
  isMobile: boolean
}

export default function SnapShot({ nTh, title, id, isMobile }: SnapShotProps) {
  const speed = 3

  return (
    <motion.article
      data-scroll
      data-scroll-speed={nTh * speed}
      className={`${isMobile ? "col-span-2" : ""} relative select-none group/item w-full grow`}
    >
      <Image
        className="object-contain"
        src={`/projects/${id}/${nTh}/image.png`}
        loading="lazy"
        blurDataURL={`/projects/${id}/${nTh}/fallback.png`}
        fill
        alt="Warren image"
      />
      <div className="absolute bottom-0 translate-y-full">
        <small className="text-[16px] font-light text-white">.00{nTh}</small>
        <p className="text-[20px] ml-[3vw] font-normal inline text-center text-white">{title}</p>
      </div>
    </motion.article>
  )
}