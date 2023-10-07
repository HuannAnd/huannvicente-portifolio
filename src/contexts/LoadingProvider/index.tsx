'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { createContext, useEffect, useState } from 'react'

import Loading from '@/animations/scenes/Loading'

interface LoadingProviderProps {
  children: React.ReactNode
}

interface Value {

}

export const LoadingContext = createContext({} as Value)

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => { setIsLoading(false) }, [pathname])

  useEffect(() => { }, [isLoading])

  return (
    <LoadingContext.Provider value={{}}>
      <AnimatePresence mode='wait' >
        {isLoading && <Loading />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  )
}