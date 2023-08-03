'use client';

import { createContext, useCallback, useState } from 'react'

import Hamburguer from './Hamburguer';
import Aside from './Aside';

interface NavigationProviderProps {
  children: React.ReactNode
}

type Value = (canBeShowed: boolean) => void

export const NavigationContext = createContext({} as Value)

export default function NavigationProvider({ children }: NavigationProviderProps) {
  const [showHamburguer, setShowHamburguer] = useState(false)

  const canBeShow = useCallback((canBeShowed: boolean) => setShowHamburguer(canBeShowed), [])

  return (
    <NavigationContext.Provider value={canBeShow}>
      <Hamburguer canBeShow={showHamburguer} />
      {/* <Aside hamburguerIsOpen={showHamburguer} /> */}
      {children}
    </NavigationContext.Provider>
  )
}