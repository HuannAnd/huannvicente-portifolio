"use client"

import React, { useReducer, memo, createContext, useEffect, useState, useCallback } from "react";

import Follower from "./Follower";

import { useAnimate } from "framer-motion";

interface CursorFollowerProviderProps {
  children: React.ReactNode
}

export const CursorFollowerSetCursorContext = createContext<(event: TCursorAction["type"]) => void>(() => { });
export const CursorFollowerSetTitleContext = createContext<(newTitle: string | null) => void>(() => { });
export const CursorFollowerSetIsLoadingContext = createContext<(state: boolean) => void>(() => { });

type TCursorAction = {
  type: "hovered" | "invisible" | "pressed" | "normal"
}

function reducer(state: TCursorAction["type"], action: TCursorAction): TCursorAction["type"] {
  return action.type;
}

function CursorFollowerProvider({ children }: CursorFollowerProviderProps) {
  const [scope, animate] = useAnimate()
  const [event, updateEvent] = useReducer(
    reducer,
    "normal"
  )

  const [title, setTitleValue] = useState<string | null>("Scroll");
  const [isLoading, setIsLoadingValue] = useState(true)

  const setTitle = useCallback((newTitle: string | null) => setTitleValue(newTitle), [])
  const setCursorState = useCallback((event: TCursorAction["type"]) => updateEvent({ type: event }), [])
  const setIsLoading = useCallback((state: boolean) => setIsLoadingValue(state), [])

  useEffect(() => {
    function handleWithFollowerAnimation() {
      switch (event) {
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
  }, [event])

  return (
    <CursorFollowerSetCursorContext.Provider value={setCursorState}>
      <CursorFollowerSetTitleContext.Provider value={setTitle}>
        <CursorFollowerSetIsLoadingContext.Provider value={setIsLoading}>
          <Follower title={title} isLoading={isLoading} ref={scope} />
          {children}
        </CursorFollowerSetIsLoadingContext.Provider>
      </CursorFollowerSetTitleContext.Provider>
    </CursorFollowerSetCursorContext.Provider>
  );
}

export default memo(CursorFollowerProvider);