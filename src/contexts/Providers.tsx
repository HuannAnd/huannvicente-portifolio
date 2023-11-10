"use client";

import NavigationContextProvider from "./NavigationContextProvider"
import CursorFollowerProvider from "./CursorFollowerProvider"
import LocomotiveScroll from "./LocomotiveScrollProvider";
import LoadingProvider from "./LoadingProvider";

interface ProvidersProps extends React.PropsWithChildren { }

export default function Providers({ children }: ProvidersProps) {
  return (
    <CursorFollowerProvider>
      <NavigationContextProvider>
        <LocomotiveScroll.Root>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </LocomotiveScroll.Root>
      </NavigationContextProvider>
    </CursorFollowerProvider>
  )
}