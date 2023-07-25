"use client"

import { useLayoutEffect } from "react";

import { useFollowerContext } from "@/hooks/useFollowerContext";

import Row from "./Snapshot";

import { IProjectData } from "@/services/projects/type";


type GalleryProps = {
  photos: IProjectData["gallery"]
}

export default function Gallery({ photos }: GalleryProps) {
  const { setIsLoading } = useFollowerContext()
  useLayoutEffect(() => setIsLoading(false), [])

  return (
    <section
      data-scroll-section
      data-scroll
      className="w-full h-auto px-[3vw] py-[9vw] min-h-[200vh] overflow-hidden gap-x-2 gap-y-[3vw] flex flex-col gap-[3vw]"
    >
      {photos.map((x, i) => (
        <Row.Root key={i} nTh={i + 1} strategy={x.strategy}>
          {x.content.map((v, j) => <Row.Content key={j} strategy={x.strategy} {...v} /> )}
        </Row.Root>
      ))}
    </section>
  )
}