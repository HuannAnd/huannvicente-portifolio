"use client";

import { useEffect, useRef, createContext, useLayoutEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { useScroll, useTransform } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import useWindowViewport from '@/hooks/useWindowViewport';


interface LocomotiveScrollProps
  extends React.PropsWithChildren { }

export const LocomotiveScrollRefContext = createContext({} as LocomotiveScroll | null);

export default function LocomotiveScrollLayout({
  children
}: LocomotiveScrollProps) {
  const [locomotiveScroll, setlocomotiveScroll] = useState<LocomotiveScroll | null>(null)

  const pathname = usePathname()
  const { width, height } = useWindowViewport()

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({ autoResize: true });
        setlocomotiveScroll(locomotiveScroll)
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