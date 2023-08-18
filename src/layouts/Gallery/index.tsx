"use client"

import { useEffect } from "react";

import RowContent from "./RowContent"

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
      <div
        className="w-full px-[3vw] flex flex-wrap justify-center items-start"
        data-scroll
        data-scroll-speed=".3"
      >
        {photos.map((photo, index) => <RowContent {...photo} device={photo.isMobile ? "mobile" : "desktop"}  key={`snapshot_${index}`} />)}
      </div>
    </section>
  )
}