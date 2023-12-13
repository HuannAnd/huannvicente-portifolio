"use client";

import { useEffect, createContext, useState } from 'react';

import { usePathname } from 'next/navigation';

import useWindowViewport from '@/hooks/useWindowViewport';

import LocomotiveScroll from 'locomotive-scroll';
import isMobileDevice from '@/utils/is-mobile-device';


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
        const newLocomotiveScroll = new LocomotiveScroll({
          autoResize: true,
          lenisOptions: {

          }
        });
        setLocomotiveScroll(newLocomotiveScroll)
        locomotiveScroll?.scrollTo(0, { immediate: true, force: true })
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