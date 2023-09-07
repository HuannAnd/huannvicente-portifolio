"use client"

import Image, { ImageProps } from "next/image";
import useImageContext from "./useImageContext";

interface CustomImageFallbackProps
  extends ImageProps { }
export default function ImageFallback({ ...rest }: CustomImageFallbackProps) {
  const isSuccesfully = useImageContext()

  if (isSuccesfully) return null

  return (
    <Image
      priority
      {...rest}
    />
  )
}