
'use client';

import { ElementType, createContext } from 'react'

interface FollowerContextProviderProviderProps {
  title: string | null,
  isLoading: boolean
  children: React.ReactNode
  icon: string | null
}

export const FollowerLoadingContext = createContext<boolean>(false)
export const FollowerTitleContext = createContext<string | null>(null)
export const FollowerIconContext = createContext<string | null>(null)

export default function FollowerContextProvider({ children, title, isLoading, icon }: FollowerContextProviderProviderProps) {
  console.log("Title inside FollowerContext: ", title)
  console.log("isLoading inside FollowerContext: ", isLoading)

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