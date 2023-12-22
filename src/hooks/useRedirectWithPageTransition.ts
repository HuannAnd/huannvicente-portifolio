import { useContext } from "react";

import { RedirectWithPageTransitionContext } from '@/contexts/PageTransitionProvider'

export default function useRedirectWithPageTransition() {
  return useContext(RedirectWithPageTransitionContext)
}