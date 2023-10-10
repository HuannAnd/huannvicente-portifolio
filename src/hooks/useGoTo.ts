import { useContext } from "react";

import { LoadingGoToContext } from '@/contexts/LoadingProvider'

export default function useGoTo() {
  return useContext(LoadingGoToContext)
}