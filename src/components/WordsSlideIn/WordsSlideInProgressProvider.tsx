'use client';

import { createContext } from 'react'

import useEventProgress from './useEventProgress';

interface WordsSlideInProgressProviderProps
  extends React.PropsWithChildren {
  eventProgress: string
}

export const WordsSlideInProgressContext = createContext<number | null>(null)

export default function WordsSlideInProgressProvider({ children, eventProgress }: WordsSlideInProgressProviderProps) {
  const progress = useEventProgress(eventProgress)

  return (
    <WordsSlideInProgressContext.Provider value={progress}>
      {children}
    </WordsSlideInProgressContext.Provider>
  )
}