'use client';

import { createContext, useEffect, useLayoutEffect, useReducer, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';

import { TActionReducer, ActionReducer } from './type';
import useSetCursor from '@/hooks/useSetCursor';
import useLocomotiveScrollRef from '../LocomotiveScrollProvider/useLocomotiveScrollRef';

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
    // document.documentElement.style.cursor = "normal"
  }

  useLayoutEffect(() => {
    setCursor({ isLoading: true })
    // document.documentElement.style.cursor = "none"
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