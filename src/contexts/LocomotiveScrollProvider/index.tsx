"use client"

import { ElementType, useMemo, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { usePathname } from 'next/navigation';

import ContainerScroll from './ContainerScroll'
import NavigationContextProvider from '@/contexts/NavigationContextProvider'
import useWindowWidth from '@/hooks/useWindowWitdth';


interface LocomotiveScrollProps {
  children: React.ReactNode,
  // context: React.ComponentType<any>
}

const options = {
  smooth: true,
  smartphone: {
    smooth: true,
    lerp: 1,
    breakpoint: 0
  },
  tablet: {
    smooth: true,
    lerp: 1,
    breakpoint: 0
  },
  reloadOnContextChange: true
}
export default function LocomotiveScrollLayout({
  children,
  // context: NesteingContextProvider
}: LocomotiveScrollProps) {
  const ref = useRef(null!)
  const path = usePathname();
  const windowWidth = useWindowWidth()

  return (
    <LocomotiveScrollProvider
      containerRef={ref}
      options={options}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      location={path}
      watch={[path, windowWidth]}
    >
      <NavigationContextProvider>
        <ContainerScroll ref={ref}>
          {children}
        </ContainerScroll>
      </NavigationContextProvider>
    </LocomotiveScrollProvider>
  );
}