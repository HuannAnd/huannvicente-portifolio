"use client"

import ImageContextsProvider from "./ImageContextsProvider"

import cn from "@/utils/cn"

interface ImageWithFallBackRootProps
  extends React.HTMLAttributes<HTMLDivElement> { }

export default function ImageField({ className, children, ...rest }: ImageWithFallBackRootProps) {
  return (
    <ImageContextsProvider>
      <div
        {...rest}
        className={cn("relative", className)}
      >
        {children}
      </div>
    </ImageContextsProvider>
  )
}