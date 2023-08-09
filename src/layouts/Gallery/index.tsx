"use client"

import { useEffect } from "react";

import RowContent from "./RowContent"
import RowRoot from "./RowRoot"

import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading";

import { IProjectData } from "@/services/projects/type";


type GalleryProps = {
  photos: IProjectData["gallery"]
}

export default function Gallery({ photos }: GalleryProps) {
  const setIsLoading = useFollowerSetIsLoading()

  useEffect(() => setIsLoading(false), [])

  return (
    <section
      data-scroll-section
      data-scroll
      className="w-full h-auto px-[3vw] py-[9vw] min-h-[200vh] overflow-hidden gap-x-2 gap-y-[3vw] flex flex-col gap-[3vw]"
    >
      {photos.map((x, i) => (
        <RowRoot key={i} nTh={i + 1} strategy={x.strategy}>
          {x.content.map((v, j) => <RowContent key={j} index={j} strategy={x.strategy} {...v} />)}
        </RowRoot>
      ))}
    </section>
  )
}