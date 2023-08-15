'use client';

import { createContext, useCallback, useReducer, useState } from 'react'

import Hamburguer from './Hamburguer';
import Aside from './Aside';

import useNavigationRouting from './useNavigationRouting';

interface NavigationProviderProps {
  children: React.ReactNode
}

type TValueHamburguerContext = (canBeShowed: boolean) => void
type TValueAsideContext = React.Dispatch<TAction>

type TState = boolean;

export type TAction = { type: 'toogle' } | { type: 'set'; payload: boolean };

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
export const NavigationAsideContext = createContext({} as TValueAsideContext)

export default function NavigationContextProvider({ children }: NavigationProviderProps) {
  const [showHamburguer, setShowHamburguer] = useState(false)
  const [showAside, handleAsideStates] = useReducer(reducer, false);

  const navigation = useNavigationRouting(handleAsideStates)

  const canBeShowHamburguer = useCallback((canBeShowed: boolean) => setShowHamburguer(canBeShowed), [])

  return (
    <NavigationHamburguerContext.Provider value={canBeShowHamburguer}>
      <NavigationAsideContext.Provider value={handleAsideStates}>
        <Hamburguer canBeShow={showHamburguer} />
        <Aside navigation={navigation} canBeShow={showAside} />
        {children}
      </NavigationAsideContext.Provider>
    </NavigationHamburguerContext.Provider>
  )
}

