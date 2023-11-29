"use client";

import { useEffect, createContext, useState } from 'react';

import { usePathname } from 'next/navigation';

import useWindowViewport from '@/hooks/useWindowViewport';

import LocomotiveScroll from 'locomotive-scroll';


interface LocomotiveScrollProps
  extends React.PropsWithChildren { }

export const LocomotiveScrollRefContext = createContext({} as LocomotiveScroll | null);

export default function LocomotiveScrollProvider({
  children
}: LocomotiveScrollProps) {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll | null>(null)

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const newLocomotiveScroll = new LocomotiveScroll({ autoResize: true, });
        setLocomotiveScroll(newLocomotiveScroll)
      }
    )()

    return () => locomotiveScroll?.destroy()
  },
    []
  )

  return (
    <LocomotiveScrollRefContext.Provider value={locomotiveScroll}>
      {children}
    </LocomotiveScrollRefContext.Provider>
  );
}