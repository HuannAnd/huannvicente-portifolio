"use client"

import { Suspense } from "react";

import ProjectsService from "@/services/projects";

import useProjectId from "@/app/repository/[id]/hooks/useProjectId";
import Skeleton from "./Skeleton";


interface Props { }
export default function Gallery({ }: Props) {
  const id = useProjectId()
  const photos = ProjectsService.getProjectPhotosById(id)

  return (
    <Suspense fallback={<Skeleton />}>
      <section className="w-screen px-4 gap-x-4 -gap-y-2 h-auto py-[9vw] bg-white grid grid-cols-6">
        <video data-scroll data-scroll-speed="0.1" loop muted autoPlay className="col-span-4 w-full object-cover shadow-[_0_0_20px_0_rgba(0,_0,_0,_0.50)] rounded-2xl" src="/projects/599657419/3/video.mp4" />
        <img data-scroll data-scroll-speed="0.3" className="col-span-3 object-cover shadow-[_0_0_20px_0_rgba(0,_0,_0,_0.50)] col-start-4 rounded-2xl" src="/warren-poster4.png" />
        <img data-scroll data-scroll-speed="0.5" className="col-span-4 col-start-2 object-cover shadow-[_0_0_20px_0_rgba(0,_0,_0,_0.50)] rounded-2xl" src="/warren-poster3.png" />
      </section>
    </Suspense>
  )
}