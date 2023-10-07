'use client';

import { createContext, useCallback, useReducer, useState } from 'react'

import Hamburguer from './Hamburguer';
import Aside from './Aside';

import useNavigationRouting from './useNavigationRouting';

import { TAction, TState, TValueAsideContext, TValueHamburguerContext } from './type';


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

