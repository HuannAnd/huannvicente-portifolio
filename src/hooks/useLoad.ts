"use client";

import { useState } from "react";

export default function useLoad(ref: React.MutableRefObject<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);

  function handleImageLoad() {
    const img = ref.current as HTMLImageElement;

    if (img && img.complete) {
      setIsLoaded(true);
    }
  }

  return { isLoaded, handleImageLoad };

}
