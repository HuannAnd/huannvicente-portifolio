import Image, { type ImageProps } from "next/image";

import fsp from 'fs/promises'

import { getPlaiceholder } from "plaiceholder"

interface Props
  extends Omit<ImageProps, "src"> {
  src: string
}

async function createFallbackImage(src: string) {
  const fileInBuffer = await fsp.readFile(`./public${src}`)

  const { base64 } = await getPlaiceholder(fileInBuffer)

  return base64
}

export default async function StaticImageWithFallback({ src, ...rest }: Props) {
  const fallbackSrc = await createFallbackImage(src)

  return (
    <Image
      {...rest}
      src={src}
      loading="lazy"
      placeholder="blur"
      fill
      blurDataURL={fallbackSrc}
    />
  )
}