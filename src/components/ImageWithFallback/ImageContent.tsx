"use client"

import Image, { ImageProps } from "next/image";

import useHandleSuccesfullyImage from "./useHandleSuccesfullyImage";

interface CustomImageProps
  extends ImageProps { }
export default function ImageContent({ src, ...rest }: CustomImageProps) {
  const setImageSucessfully = useHandleSuccesfullyImage()

  return (
    <Image
      src={src}
      onError={() => { setImageSucessfully(false) }}
      // placeholder="blur"
      // blurDataURL="/projects/fallback.png"
      onLoadingComplete={(result) => { setImageSucessfully(!(result?.naturalWidth === 0)) }}
      {...rest}
    />
  )
}