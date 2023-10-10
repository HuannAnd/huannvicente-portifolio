"use client";

import NavigationContextProvider from "./NavigationContextProvider"
import CursorFollowerProvider from "./CursorFollowerProvider"
import LocomotiveScroll from "./LocomotiveScrollProvider";
import LoadingProvider from "./LoadingProvider";

interface ProvidersProps extends React.PropsWithChildren { }

export default function Providers({ children }: ProvidersProps) {
  return (
    <CursorFollowerProvider>
      <LoadingProvider>
        <LocomotiveScroll.Root>
          <NavigationContextProvider>
            <LocomotiveScroll.Container>
              {children}
            </LocomotiveScroll.Container>
          </NavigationContextProvider>
        </LocomotiveScroll.Root>
      </LoadingProvider>
    </CursorFollowerProvider>
  )
}