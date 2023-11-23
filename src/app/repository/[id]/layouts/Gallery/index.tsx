"use client"

import { Suspense } from "react";

import Skeleton from "./Skeleton";

import Snapshot from "./Snapshot";


interface Props {
  photos: { src: string, fallbackSrc: string }[]
}
export default function Gallery({ photos }: Props) {
  return (
    <section className="w-screen px-4 gap-x-4 relative -gap-y-2 h-auto py-[9vw] bg-white grid grid-cols-6">
      {photos.map((photo, index) => <Snapshot index={index} isVideo={false} alt="Some Image" {...photo} blurDataURL={photo.fallbackSrc} />)}
      {/* <video data-scroll data-scroll-speed="0.1" loop muted autoPlay className="col-span-4 w-full object-cover shadow-[_0_0_20px_0_rgba(0,_0,_0,_0.50)] rounded-2xl" src="/projects/599657419/video-loading.mp4" />
      <img data-scroll data-scroll-speed="0.3" className="col-span-3 object-cover shadow-[_0_0_20px_0_rgba(0,_0,_0,_0.50)] col-start-4 rounded-2xl" src="/warren-poster4.png" />
      <img data-scroll data-scroll-speed="0.5" className="col-span-4 col-start-2 object-cover shadow-[_0_0_20px_0_rgba(0,_0,_0,_0.50)] rounded-2xl" src="/warren-poster3.png" /> */}
    </section>
  )
}