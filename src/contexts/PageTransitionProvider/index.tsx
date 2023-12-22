'use client';

import { createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

import useSetCursor from '@/hooks/useSetCursor';
import { AnimatePresence } from 'framer-motion';

import Preloader from '@/components/Preloader';

interface LoadingProviderProps {
  children: React.ReactNode
}

type TRedirectWithPageTransitionValue = (to: string) => void

export const RedirectWithPageTransitionContext = createContext({} as TRedirectWithPageTransitionValue)

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [requestPage, setRequestPage] = useState<string | null>(null)
  const setCursor = useSetCursor()

  const pathname = usePathname()

  function pageTransitionTo(to: string) {
    setCursor({ isLoading: true })
    document.documentElement.style.cursor = "wait"
    setRequestPage(to)
  }

  const resetCursor = () => {
    setCursor({ isLoading: false, mode: "normal", title: null, projectId: -1 })
    document.documentElement.style.cursor = "default"
  }

  const unsubscribeLoading = () => resetCursor()


  useEffect(() => {
    unsubscribeLoading()
  }, [pathname])

  return (
    <RedirectWithPageTransitionContext.Provider value={pageTransitionTo}>
      <AnimatePresence mode="wait">
        <Preloader requestPage={requestPage} />
      </AnimatePresence>
      {children}
    </RedirectWithPageTransitionContext.Provider>
  )
}