
'use client';

import { createContext } from 'react'

import { ICursor } from '../types'

interface FollowerContextProviderProviderProps
  extends Omit<ICursor, "state">,
  React.PropsWithChildren { }

export const FollowerLoadingContext = createContext<boolean>(false)
export const FollowerTitleContext = createContext<string | null>(null)
export const FollowerIconContext = createContext<string | null>(null)

export default function FollowerContextProvider({ children, title, isLoading, icon }: FollowerContextProviderProviderProps) {
  return (
    <FollowerLoadingContext.Provider value={isLoading}>
      <FollowerTitleContext.Provider value={title}>
        <FollowerIconContext.Provider value={icon}>
          {children}
        </FollowerIconContext.Provider>
      </FollowerTitleContext.Provider>
    </FollowerLoadingContext.Provider>
  )
}