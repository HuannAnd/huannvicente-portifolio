'use client';

import { Children, MutableRefObject, cloneElement, createContext, useRef, useState } from "react";


interface Props
  extends React.PropsWithChildren { }

export const IsHoveredContext = createContext<MutableRefObject<HTMLElement | undefined> | null>(null)

export default function Root({ children }: Props) {
  const ref = useRef<HTMLElement>()

  const childrenWithRef = Children.map(children, child =>
    cloneElement(child as React.ReactElement, { ref })
  )

  return (
    <IsHoveredContext.Provider value={ref}>
      {childrenWithRef}
    </IsHoveredContext.Provider>
  )
}