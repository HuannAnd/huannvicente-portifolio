"use client";

import NavigationContextProvider from "./NavigationContextProvider"
import CursorFollowerProvider from "./CursorFollowerProvider"
import LocomotiveScrollProvider from "./LocomotiveScrollProvider"
import PageTransitionProvider from "./PageTransitionProvider"

interface ProvidersProps extends React.PropsWithChildren { }

export default function Providers({ children }: ProvidersProps) {
  return (
    <CursorFollowerProvider>
      <NavigationContextProvider>
        {/* <LocomotiveScrollProvider> */}
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
        {/* </LocomotiveScrollProvider> */}
      </NavigationContextProvider>
    </CursorFollowerProvider>
  )
}