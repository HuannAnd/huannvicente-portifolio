"use client";

import { useEffect, createContext, useState } from 'react';

import { usePathname } from 'next/navigation';

import useWindowViewport from '@/hooks/useWindowViewport';

import LocomotiveScroll from 'locomotive-scroll';


interface LocomotiveScrollProps
  extends React.PropsWithChildren { }

export const LocomotiveScrollRefContext = createContext({} as LocomotiveScroll | null);

export default function LocomotiveScrollLayout({
  children
}: LocomotiveScrollProps) {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll | null>(null)

  const pathname = usePathname()
  const { width, height } = useWindowViewport()

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({ autoResize: true });
        setLocomotiveScroll(locomotiveScroll)
      }
    )()

    return () => {
      locomotiveScroll?.destroy()
    }
  },
    []
  )

  useEffect(() => {
    if (!locomotiveScroll) return
    locomotiveScroll.resize()
    window.scrollTo(0, 0)
  }, [pathname, locomotiveScroll, width, height])

  return (
    <LocomotiveScrollRefContext.Provider value={locomotiveScroll}>
      {children}
    </LocomotiveScrollRefContext.Provider>
  );
}