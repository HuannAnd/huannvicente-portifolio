"use client"

import ImageContent from "./ImageContent";
import ImageFallback from "./ImageFallback";
import ImageField from "./ImageField";

const ImageWithFallback = {
  Root: ImageField,
  Content: ImageContent,
  Fallback: ImageFallback
}

export default ImageWithFallback