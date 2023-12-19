"use client";

import { useEffect, createContext, useState } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import wait from '@/utils/wait';

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
            smoothTouch: true,
            touchMultiplier: .9
          }
        });
        newLocomotiveScroll.scrollTo(0, { immediate: true, force: true })
        newLocomotiveScroll.stop()
        window.scrollTo(0, 0)
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