"use client";

import NavigationContextProvider from "./NavigationContextProvider"
import CursorFollowerProvider from "./CursorFollowerProvider"
import LocomotiveScrollProvider from "./LocomotiveScrollProvider"
import LoadingProvider from "./LoadingProvider"

interface ProvidersProps extends React.PropsWithChildren { }

export default function Providers({ children }: ProvidersProps) {
  return (
    <CursorFollowerProvider>
      <NavigationContextProvider>
        <LocomotiveScrollProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </LocomotiveScrollProvider>
      </NavigationContextProvider>
    </CursorFollowerProvider>
  )
}