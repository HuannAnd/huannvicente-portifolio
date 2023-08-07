"use client"

import { ElementType, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { usePathname } from 'next/navigation';

import ContainerScroll from './ContainerScroll'
import NavigationContextProvider from '@/contexts/NavigationContextProvider'


interface LocomotiveScrollProps {
  children: React.ReactNode,
  context: React.ComponentType<any>
}

export default function LocomotiveScrollLayout({
  children,
  context: NesteingContextProvider
}: LocomotiveScrollProps) {
  const ref = useRef(null!)
  const path = usePathname();

  console.log("NavigationContextProvider Component: ", NesteingContextProvider)

  const options = {
    smooth: true,
    smartphone: {
      smooth: true
    }
  }

  return (
    <LocomotiveScrollProvider
      containerRef={ref}
      options={options}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      location={path}
      watch={[path]}
    >
      <NavigationContextProvider>
        <ContainerScroll ref={ref}>
          {children}
        </ContainerScroll>
      </NavigationContextProvider>
    </LocomotiveScrollProvider>
  );
}