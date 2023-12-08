import { type ImageProps } from "next/image";

import cn from "@/utils/cn";
import isVideo from "@/utils/is-video";

import StaticImageWithFallback from "@/app/(repository)/repository/[id]/StaticImageWithFallback";

function getVariantBytIndex(index: number) {
  const restOfDivisionBySeven = index % 7

  switch (restOfDivisionBySeven) {
    case 1:
      return "@desktop:col-span-3 @desktop:col-start-4"
    case 2:
      return "@desktop:col-span-4 @desktop:col-start-2"
    case 3:
      return "@desktop:col-span-3 @desktop:col-start-1"
    case 4:
      return "@desktop:col-span-4 @desktop:col-start-3"
    case 5:
      return "@desktop:col-span-3 @desktop:col-start-1"
    case 6:
      return "@desktop:col-span-4 @desktop:col-start-2"
    case 7:
      return "@desktop:col-span-3 @desktop:col-start-3"
    case 0:
    default:
      return "@desktop:col-span-4 @desktop:col-start-1"
  }
}

interface SnapshotProps extends Omit<ImageProps, "src"> {
  src: string,
  index: number,
  alt: string
}

export default async function Snapshot({ index, src, alt, blurDataURL, ...rest }: SnapshotProps) {
  const variant = getVariantBytIndex(index)
  const scrollSpeed = .1
  const baseConfig = {
    className: cn("object-contain relative w-full @mobileAndTablet:col-span-full h-full row-span-1 min-h-[75vmin] max-h-[100dvh] rounded-2xl", variant),
    src,
  }

  if (isVideo(src)) return <video data-scroll data-scroll-speed={scrollSpeed} {...baseConfig} loop muted autoPlay />
  return (
    <picture data-scroll data-scroll-speed={scrollSpeed} className={baseConfig.className}>
      <StaticImageWithFallback
        {...baseConfig}
        style={{
          objectPosition: "center",
          objectFit: "contain",
          borderRadius: "15px"
        }}
        alt="Content about that project"
      />
    </picture>
  )

}