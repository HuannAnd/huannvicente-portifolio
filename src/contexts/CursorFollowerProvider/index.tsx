"use client"

import React, { memo, createContext, useEffect, useState, useCallback } from "react";

import Follower from "./Follower";

import { useAnimate } from "framer-motion";

import reducer from "./reducer";
import { ICursor } from "./types";

interface CursorFollowerProviderProps
  extends React.PropsWithChildren { }

export const CursorFollowerSetCursorContext = createContext<(event: TCursorAction["type"]) => void>(() => { });
export const CursorFollowerSetTitleContext = createContext<(newTitle: string | null) => void>(() => { });
export const CursorFollowerSetIsLoadingContext = createContext<(state: boolean) => void>(() => { });
export const CursorFollowerSetCursorIconContext = createContext<(state: TCursorIcon["type"]) => void>(() => { });
export const CursorFollowerSetCursor = createContext<(config: Partial<ICursor>) => void>(() => { });

type TCursorAction = {
  type: "hovered" | "invisible" | "pressed" | "normal"
}

type TCursorIcon = {
  type: "none" | "arrow" | "home" | "externalLink" | null
}
function CursorFollowerProvider({ children }: CursorFollowerProviderProps) {
  const [cursor, setCursor] = useState<ICursor>({ icon: "none", title: null, isLoading: false, state: "normal" })
  const [scope, animate] = useAnimate()

  console.log("icon inside CursorFollowerProvider:", cursor.icon)

  const handleCursor = useCallback((config: Partial<ICursor>) => {
    setCursor({ ...cursor, ...config })
  }, [])

  useEffect(() => {
    function handleWithFollowerAnimation() {
      switch (cursor.state) {
        case "normal":
          animate(scope.current, { scale: .5, opacity: .5 }, { duration: .3 })
          break;
        case "hovered":
          animate(scope.current, { scale: 1, opacity: 1 }, { duration: .3 })
          break;
        case "invisible":
          animate(scope.current, { scale: .5, opacity: 0 }, { duration: .3 })
          break;
        case "pressed":
          animate(scope.current, { scale: 1.2, opacity: 1 }, { duration: .3 })
          break;
        default:
          animate(scope.current, { scale: .5, opacity: 0 }, { duration: .3 })
          break;
      }
    }

    handleWithFollowerAnimation()
  }, [cursor.state])

  return (
    <CursorFollowerSetCursor.Provider value={handleCursor}>
      <Follower {...cursor} ref={scope} />
      {children}
    </CursorFollowerSetCursor.Provider >

  );
}

export default memo(CursorFollowerProvider);