import { useContext } from "react"

import { ImageContextValue } from './ImageContextsProvider'

export default function useImageContext() {
  return useContext(ImageContextValue)
}