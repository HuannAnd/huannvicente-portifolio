"use client"

import { useLayoutEffect } from "react";

import { useFollowerContext } from "@/hooks/useFollowerContext";

import SnapShot from "./Snapshot";


type GalleryProps = {
  photos: { title: string, id: number, }[]
}

export default function Gallery({ photos }: GalleryProps) {
  const { setIsLoading } = useFollowerContext()

  useLayoutEffect(() => setIsLoading(false))

  return (
    <section
      data-scroll-section
      data-scroll
      className="w-full h-[200vh] py-[9vw] min-h-[100vh] overflow-hidden gap-x-2 gap-y-[3vw] grid grid-cols-3 justify-center"
    >
      {photos.map((photo, i) => <SnapShot key={i} nTh={i + 1} isMobile={i === 1 || i === 2} {...photo} />)}
    </section>
  )
}