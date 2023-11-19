'use client';

import { createContext, useEffect, useLayoutEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';

import useSetCursor from '@/hooks/useSetCursor';
import useLocomotiveScrollRef from '../LocomotiveScrollProvider/useLocomotiveScroll';

interface LoadingProviderProps {
  children: React.ReactNode
}

type LoadingGoToValue = (to: string) => void

export const LoadingGoToContext = createContext({} as LoadingGoToValue)

const ANIMATION_DURATION_IN_MS = 3000

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const locomotiveScroll = useLocomotiveScrollRef()
  const setCursor = useSetCursor()

  const router = useRouter()

  const pathname = usePathname()

  function goTo(to: string) {
    setCursor({ isLoading: true })
    router.push(to, {})
  }

  function unsubscribeLoading() {
    setCursor({ isLoading: false })
    if (!locomotiveScroll) return
    locomotiveScroll.scrollTo(0)
  }

  useLayoutEffect(() => {
    setCursor({ isLoading: true })
  }, [])

  useEffect(() => {
    setTimeout(() => { unsubscribeLoading() }, ANIMATION_DURATION_IN_MS)
  }, [pathname])

  return (
    <LoadingGoToContext.Provider value={goTo}>
      {children}
    </LoadingGoToContext.Provider>
  )
}