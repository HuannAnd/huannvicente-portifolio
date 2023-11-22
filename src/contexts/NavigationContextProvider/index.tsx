'use client';

import { createContext, useCallback, useReducer, useState } from 'react'

import {
  TAction,
  THamburgerIsOpenContext,
  TState,
  TValueAsideContext,
  TValueHamburgerContext
} from './type';


interface NavigationProviderProps extends React.PropsWithChildren { }

function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case 'toogle':
      return !state;
    case 'set':
      return action.payload;
    default:
      return state;
  }
}

export const NavigationHamburgerContext = createContext({} as TValueHamburgerContext)
export const NavigationHamburgerIsOpenContext = createContext({} as THamburgerIsOpenContext)
export const NavigationAsideContext = createContext({} as TValueAsideContext)

export default function NavigationContextProvider({ children }: NavigationProviderProps) {
  const [showHamburger, setShowHamburger] = useState(false)
  const [showAside, handleAsideStates] = useReducer(reducer, false);
  const canBeShowHamburger = useCallback((canBeShowed: boolean) => setShowHamburger(canBeShowed), [])

  return (
    <NavigationHamburgerContext.Provider value={canBeShowHamburger}>
      <NavigationHamburgerIsOpenContext.Provider value={showHamburger}>
        <NavigationAsideContext.Provider value={handleAsideStates}>
          {children}
        </NavigationAsideContext.Provider>
      </NavigationHamburgerIsOpenContext.Provider>
    </NavigationHamburgerContext.Provider>
  )
}

