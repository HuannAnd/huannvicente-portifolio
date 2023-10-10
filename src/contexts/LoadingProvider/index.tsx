'use client';

import { createContext, useEffect, useLayoutEffect, useReducer, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import useFollowerSetIsLoading from '@/hooks/useFollowerSetIsLoading';


import { TActionReducer, ActionReducer } from './type';

interface LoadingProviderProps {
  children: React.ReactNode
}

type LoadingGoToValue = (to: string) => void

export const LoadingGoToContext = createContext({} as LoadingGoToValue)

const ANIMATION_DURATION_IN_MS = 3000

function reducer(action: TActionReducer, state: boolean) {
  switch (action.type) {
    case ActionReducer.PAYLOAD:
      return  
    case ActionReducer.TOOGLE:
      return !state
    case ActionReducer.SET:
    default:
      return
  }
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isFirstTime, setIsFirstTime] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const setCursorLoading = useFollowerSetIsLoading()

  const router = useRouter()

  const pathname = usePathname()

  async function goTo(to: string) {
    setIsLoading(true)
    setCursorLoading(true)
    router.push(to, {})
  }

  async function unsubscribeLoading() {
    setIsLoading(false)
    setCursorLoading(false)
  }

  useLayoutEffect(() => {
      
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