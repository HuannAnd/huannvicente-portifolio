"use client"

import { VariantProps, cva } from "class-variance-authority"

import ImageWithFallback from "@/components/ImageWithFallback"

import { IImageContent } from "@/services/projects/type"

import cn from "@/utils/cn"

const divContentVariants = cva(
  "relative w-full group/snapshot min-h-[80vh] flex flex-wrap justify-center items-center overflow-hidden",
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
    : (isMobile ? MobileSnapshot : Snapshot)

  return (
    <div className={cn(divContentVariants({ device, order }))}>
      <SnapshotPattern path={path} />
    </div>
  )
}

const fallbackSrc = '/projects/fallback.png'
function VideoSnapshot({ path }: { path: string }) {
  console.log("VideoSnapshot has choosed")
  return (
    <video
      className={cn(
        "my-auto block w-full h-auto duration-500 ease-smooth",
        "sm:my-auto"
      )}
      aria-label="Video"
      src={`/projects/${path}/video.mp4`}
      loop
      muted
      autoPlay
      playsInline
    ></video>
  )
}

function Snapshot({ path }: { path: string }) {
  const src = `/projects/${path}/image.png`
  console.log("Snapshot has choosed")

  return ( 
    <ImageWithFallback.Root
      className="w-auto pointer-events-none relative overflow-hidden"
      aria-label="Image"
    >
      <ImageWithFallback.Content
        className="w-full h-auto relative object-contain"
        style={{ objectFit: "contain" }}
        src={src}
        loading="lazy"
        alt="Desktop Snapshot about project image"
        quality={100}
        width={1024} height={768}
      />
      <ImageWithFallback.Fallback
        className="w-full h-auto object-contain z-10 absolute"
        src={fallbackSrc}
        alt="Desktop Fallback image"
        quality={10}
        width={1024} height={768}
      />
    </ImageWithFallback.Root>
  )
}

function MobileSnapshot({ path }: { path: string }) {
  // const ref = useRef<HTMLImageElement>(null!)
  // const { isLoaded, handleImageLoad } = useLoad(ref)
  const src = `/projects/${path}/image.png`
  console.log("MobileSnapshot has choosed")

  return (
    <ImageWithFallback.Root className="w-full h-auto relative">
      <ImageWithFallback.Content
        className="w-full h-auto object-contain min-h-[80vh] relative"
        style={{ objectFit: "contain" }}
        src={src}
        loading="lazy"
        quality={100}
        alt="Mobile Snapshot about project image"
        fill
      />
      <ImageWithFallback.Fallback
        className="w-full h-auto absolute z-10 object-scale-down"
        src={fallbackSrc}
        width={300} height={500}
        alt="Fallback image"
        quality={10}
        priority
      />
    </ImageWithFallback.Root>
  )
}