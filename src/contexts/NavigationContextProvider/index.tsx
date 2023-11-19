'use client';

import { createContext, useCallback, useReducer, useState } from 'react'

import {
  TAction,
  THamburguerIsOpenContext,
  TState,
  TValueAsideContext,
  TValueHamburguerContext
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

export const NavigationHamburguerContext = createContext({} as TValueHamburguerContext)
export const NavigationHamburguerIsOpenContext = createContext({} as THamburguerIsOpenContext)
export const NavigationAsideContext = createContext({} as TValueAsideContext)

export default function NavigationContextProvider({ children }: NavigationProviderProps) {
  const [showHamburguer, setShowHamburguer] = useState(false)
  const [showAside, handleAsideStates] = useReducer(reducer, false);
  const canBeShowHamburguer = useCallback((canBeShowed: boolean) => setShowHamburguer(canBeShowed), [])

  return (
    <NavigationHamburguerContext.Provider value={canBeShowHamburguer}>
      <NavigationHamburguerIsOpenContext.Provider value={showHamburguer}>
        <NavigationAsideContext.Provider value={handleAsideStates}>
          {children}
        </NavigationAsideContext.Provider>
      </NavigationHamburguerIsOpenContext.Provider>
    </NavigationHamburguerContext.Provider>
  )
}

