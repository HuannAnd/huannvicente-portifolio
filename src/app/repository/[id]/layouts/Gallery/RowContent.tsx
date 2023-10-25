"use client"

import { useRef } from "react"

import { VariantProps, cva } from "class-variance-authority"

import useLoad from "@/hooks/useLoad"

import { IImageContent } from "@/services/projects/type"

import cn from "@/utils/cn"

const divContentVariants = cva(
  "relative group/snapshot min-h-[80vh] flex flex-wrap justify-center items-center overflow-hidden",
  {
    variants: {
      device: {
        mobile: "my-auto relative group/item flex-col",
        desktop: "sm:flex-col"
      },
      order: {
        first: "order-1 grow",
        second: "order-2 flex justify-center items-center grow-[2]",
        normal: ""
      },
      size: {
        desktop: "sm:h-auto"
      },
    },
    defaultVariants: {
      device: "desktop",
      order: "normal",
      size: "desktop"
    }
  }
)

interface RowContentProps
  extends IImageContent,
  VariantProps<typeof divContentVariants> { }

export default function RowContent({
  isVideo,
  device,
  order,
  path,
  isMobile
}: RowContentProps) {
  const SnapshotPattern = isVideo
    ? VideoSnapshot
    : isMobile
      ? MobileSnapshot
      : Snapshot

  return (
    <div className={cn(divContentVariants({ device, order }))}>
      <SnapshotPattern path={path} />
    </div>
  )
}

function VideoSnapshot({ path }: { path: string }) {
  const src = `/projects/${path}/video.mp4`
  return (
    <video
      className={cn(
        "my-auto block w-full h-auto duration-500 ease-smooth",
        "sm:my-auto"
      )}
      aria-label="Video"
      src={src}
      loop
      muted
      autoPlay
      playsInline
    ></video>
  )
}

function Snapshot({ path }: { path: string }) {
  const ref = useRef<HTMLImageElement>(null!)
  const { isLoaded, handleImageLoad } = useLoad(ref)
  const src = `/projects/${path}/image.png`

  return (
    <div
      className="w-full pointer-events-none overflow-hidden"
      aria-label="Image"
    >
      <img
        className={cn(
          "object-contain w-full h-auto delay-300 duration-300 ease-smooth",
          "sm:my-auto",
          isLoaded ? "" : "animate-pulse"
        )}
        ref={ref}
        src={src}
        loading="lazy"
        onLoad={handleImageLoad}
        alt="Warren image"
      />
    </div>
  )
}

function MobileSnapshot({ path }: { path: string }) {
  const ref = useRef<HTMLImageElement>(null!)
  const { isLoaded, handleImageLoad } = useLoad(ref)
  const src = `/projects/${path}/image.png`

  return (
    <img
      className={cn(
        "object-contain w-full h-auto duration-300 ease-smooth",
        isLoaded ? "" : "animate-pulse")
      }
      aria-label="Mobile Image"
      ref={ref}
      src={src}
      loading="lazy"
      onLoad={handleImageLoad}
      alt="Warren image"
    />
  )
}