"use client";

import NavigationContextProvider from "./NavigationContextProvider"
import CursorFollowerProvider from "./CursorFollowerProvider"
import LocomotiveScroll from "./LocomotiveScrollProvider";

interface ProvidersProps extends React.PropsWithChildren { }

export default function Providers({ children }: ProvidersProps) {
  return (
    <CursorFollowerProvider>
      <LocomotiveScroll.Root>
        <NavigationContextProvider>
          <LocomotiveScroll.Container>
            {children}
          </LocomotiveScroll.Container>
        </NavigationContextProvider>
      </LocomotiveScroll.Root>
    </CursorFollowerProvider>
  )
}