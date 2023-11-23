import { useContext } from "react";

import { LoadingGoToContext } from '@/contexts/PageTransitionProvider'

export default function useGoTo() {
  return useContext(LoadingGoToContext)
}