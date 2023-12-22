'use client';

import { useRef, useState } from "react";

import Image, { type ImageProps } from 'next/image'

interface Props
  extends ImageProps {
  src: string
  fallbackSrc: string,
}

export default function LazyImageWithFallback({ fallbackSrc, ...rest }: Props) {
  const ref = useRef<HTMLImageElement>(null)
  const [isDownloaded, setIsDownloaded] = useState(false)
  const fallbackClassName = isDownloaded ? "invisible" : "visible"

  const onImageLoad = () => setIsDownloaded(true)

  return (
    <picture>
      {!isDownloaded
        ? (
          <Image
            className={fallbackClassName}
            src={fallbackSrc}
            priority
            width={100}
            height={100}
            alt="Fallback resource"
          />
        )
        : null
      }
      <img
        {...rest}
        loading="lazy"
        ref={ref}
        onLoad={onImageLoad}
      />
    </picture>
  )
}