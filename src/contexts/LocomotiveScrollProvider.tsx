"use client"

import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { usePathname } from 'next/navigation';


interface LocomotiveScrollProps {
  children: React.ReactNode
}

export default function LocomotiveScrollLayout({ children }: LocomotiveScrollProps) {
  const ref = useRef(null!)
  const path = usePathname();


  return (
    <LocomotiveScrollProvider
      containerRef={ref}
      options={{
        smooth: true,
        smartphone: {
          smooth: true
        }
      }}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      location={path}
      watch={[path]}
    >
      <div
        data-scroll-container
        ref={ref}
        className="max-w-[1440px] w-[1440px] pointer-events-none min-w-[648px] h-auto mx-auto mb-8 bg-transparent"
      >
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
}