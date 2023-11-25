'use client';

import { Suspense, createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

import useSetCursor from '@/hooks/useSetCursor';
import useLocomotiveScroll from '../LocomotiveScrollProvider/useLocomotiveScroll';
import { AnimatePresence } from 'framer-motion';

import Preloader from '@/components/Preloader';

interface LoadingProviderProps {
  children: React.ReactNode
}

type LoadingGoToValue = (to: string) => void

export const LoadingGoToContext = createContext({} as LoadingGoToValue)

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [requestPage, setRequestPage] = useState<string | null>(null)
  const locomotiveScroll = useLocomotiveScroll()
  const setCursor = useSetCursor()

  const pathname = usePathname()

  function pageTransitionTo(to: string) {
    setCursor({ isLoading: true })
    document.documentElement.style.cursor = "wait"
    setRequestPage(to)
  }

  const resetCursor = () => {
    setCursor({ isLoading: false, mode: "normal", title: null, icon: "none" })
    document.documentElement.style.cursor = "default"
  }

  const startLocomotiveScroll = () => {
    if (!locomotiveScroll) return
    locomotiveScroll.scrollTo(0, { immediate: true, duration: 0 })
    locomotiveScroll.resize()
  }

  function unsubscribeLoading() {
    resetCursor()
    if (locomotiveScroll) startLocomotiveScroll()
  }

  useEffect(() => {
    unsubscribeLoading()
  }, [pathname])

  return (
    <LoadingGoToContext.Provider value={pageTransitionTo}>
      <AnimatePresence mode="wait">
        <Preloader requestPage={requestPage} />
      </AnimatePresence>
      {children}
    </LoadingGoToContext.Provider>
  )
}