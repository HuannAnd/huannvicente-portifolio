'use client';

import { createContext, useCallback, useState } from 'react'

interface ImageProviderProps {
  children: React.ReactNode
}

export const ImageContextValue = createContext<boolean | undefined>(undefined)
export const ImageContextHandle = createContext<(state: boolean) => void>(() => { })

export default function ImageContextsProvider({ children }: ImageProviderProps) {
  const [imageSucessfully, setImageSucessfully] = useState<boolean | undefined>()

  const setIsSuccessfullyImage = useCallback((state: boolean) => { setImageSucessfully(state) }, [imageSucessfully])

  return (
    <ImageContextValue.Provider value={imageSucessfully}>
      <ImageContextHandle.Provider value={setIsSuccessfullyImage}>
        {children}
      </ImageContextHandle.Provider>
    </ImageContextValue.Provider>
  )
}