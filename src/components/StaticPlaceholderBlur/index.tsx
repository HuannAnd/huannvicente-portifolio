import Image, { ImageProps } from 'next/image'

import { getPlaiceholder } from 'plaiceholder'
const fs = require("fs").promises

import cn from '@/utils/cn'

interface ComponentProps
  extends ImageProps { }
export default async function StaticPlaceholderBlur({ src, className, ...rest }: ComponentProps) {
  // const buffer = await fs.readFile(`./public${src}`)
  // const { base64 } = await getPlaiceholder(buffer)

  return (
    <Image
      {...rest}
      className={cn("object-cover", className)}
      style={{ objectFit: "cover" }}
      src={src}
      priority={false}
      loading='lazy'
      fill
      alt="image"
      placeholder='blur'
      blurDataURL="./public/profile/fallback.jpeg"
    />
  )
}