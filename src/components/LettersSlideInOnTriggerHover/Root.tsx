'use client';

import { Children, cloneElement, createContext, useRef, useState } from "react";


interface Props
  extends React.PropsWithChildren { }

export const IsHoveredContext = createContext<boolean | null>(null)

export default function Root({ children }: Props) {
  const ref = useRef<HTMLElement>()
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter = () => { setIsHovered(true) }
  const onMouseLeave = () => { setIsHovered(false) }

  const childrenWithRef = Children.map(children, child =>
    cloneElement(child as React.ReactElement, { ref, onMouseEnter, onMouseLeave })
  )

  return (
    <IsHoveredContext.Provider value={isHovered}>
      {childrenWithRef}
    </IsHoveredContext.Provider>
  )
}