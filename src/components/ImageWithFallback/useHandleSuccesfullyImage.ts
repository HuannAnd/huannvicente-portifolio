import { useContext } from "react"

import { ImageContextHandle } from './ImageContextsProvider'

export default function useHandleSuccessfullyImage() {
  return useContext(ImageContextHandle)
}