"use client"

import RowContent from "./RowContent"

import ProjectsService from "@/services/projects";

import { useParams } from "next/navigation";



interface Params {
  id: number
}


type GalleryProps = {
  // photos: IProjectData["id"]
}
export default function Gallery({ }: GalleryProps) {
  const { id } = useParams()
  const photos = ProjectsService.getProjectPhotos(eval(id))

  return (
    <section
      data-scroll-section
      data-scroll
      className="max-w-@content mx-auto h-auto py-[9vw] min-h-[200vh] overflow-hidden gap-x-2 gap-y-[3vw] flex flex-col gap-[3vw]"
    >
      <div
        className="w-full px-[3vw] flex flex-wrap justify-center items-start"
        data-scroll
        data-scroll-speed=".3"
      >
        {photos.map((photo, index) => <RowContent {...photo} device={photo.isMobile ? "mobile" : "desktop"} key={`snapshot_${index}`} />)}
      </div>
    </section>
  )
}