"use client"

import { Suspense } from "react";
import RowContent from "./RowContent"

import ProjectsService from "@/services/projects";

import useProjectId from "@/app/repository/[id]/hooks/useProjectId";
import Skeleton from "./Skeleton";


interface Props { }
export default function Gallery({ }: Props) {
  const id = useProjectId()
  const photos = ProjectsService.getProjectPhotosById(id)

  return (
    <Suspense fallback={<Skeleton />}>
      <section className="max-w-@content mx-auto h-auto py-[9vw] min-h-[200vh] overflow-hidden gap-x-2 gap-y-[3vw] flex flex-col gap-[3vw]">
        <div className="w-full px-[3vw] flex flex-wrap justify-center items-start">
          {photos.map((photo, index) => <RowContent {...photo} device={photo.isMobile ? "mobile" : "desktop"} key={`snapshot_${index}`} />)}
        </div>
      </section>
    </Suspense>

  )
}