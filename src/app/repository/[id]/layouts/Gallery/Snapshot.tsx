'use client';

import cn from "@/utils/cn";
import Image, { type ImageProps } from "next/image";

function getVariantBytIndex(index: number) {
  const restOfDivisionBySeven = index % 7

  switch (restOfDivisionBySeven) {
    case 1:
      return "col-span-3 col-start-4"
    case 2:
      return "col-span-4 col-start-2"
    case 3:
      return "col-span-3 col-start-1"
    case 4:
      return "col-span-4 col-start-3"
    case 5:
      return "col-span-3 col-start-1"
    case 6:
      return "col-span-4 col-start-2"
    case 7:
      return "col-span-3 col-start-3"
    case 0:
    default:
      return "col-span-4 col-start-1"
  }
}

interface SnapshotProps extends Omit<ImageProps, "src"> {
  src: string,
  index: number,
  isVideo: boolean,
  alt: string
}

export default function Snapshot({ index, src, alt, isVideo, blurDataURL, ...rest }: SnapshotProps) {
  const variant = getVariantBytIndex(index)
  const scrollSpeed = -(index % 3) * 0.1 - 0.1
  const baseConfig = {
    className: cn("object-contain w-full max-h-[100dvh] rounded-2xl", variant),
    "data-scroll": true,
    "data-scroll-speed": scrollSpeed,
    src,
  }


  if (isVideo) return <video {...baseConfig} loop muted autoPlay />
  return <img {...baseConfig} width={400} height={300} loading="lazy" alt="Content about that project" />

}