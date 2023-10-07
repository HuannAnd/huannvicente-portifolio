"use client";

import { useEffect, useRef, createContext } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { usePathname } from 'next/navigation';

import useWindowWidth from '@/hooks/useWindowWitdth';

import options from './options';

interface LocomotiveScrollProps
  extends React.PropsWithChildren { }


type LocomotiveScrollRefValue = React.RefObject<any>
export const LocomotiveScrollRefContext = createContext({} as LocomotiveScrollRefValue);

export default function LocomotiveScrollLayout({
  children
}: LocomotiveScrollProps) {
  const ref = useRef(null!)
  const path = usePathname();
  const windowWidth = useWindowWidth()
  useEffect(() => {
    setTimeout(() => {
      const html = document.querySelector("html")!
      html.style.cursor = "default"
    }, 1000)
  },
    []
  )

  return (
    <LocomotiveScrollRefContext.Provider value={ref}>
      <LocomotiveScrollProvider
        containerRef={ref}
        options={options}
        onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
        location={path}
        watch={[path, windowWidth]}
      >
        {children}
      </LocomotiveScrollProvider>
    </LocomotiveScrollRefContext.Provider>
  );
}