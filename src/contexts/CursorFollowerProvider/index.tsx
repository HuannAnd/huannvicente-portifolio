"use client"

import React, { useReducer, memo, createContext, useEffect, useState, useCallback, ElementType } from "react";

import NewFollowerContext from "./Follower";

import { useAnimate } from "framer-motion";

interface CursorFollowerProviderProps {
  children: React.ReactNode
}

export const CursorFollowerSetCursorContext = createContext<(event: TCursorAction["type"]) => void>(() => { });
export const CursorFollowerSetTitleContext = createContext<(newTitle: string | null) => void>(() => { });
export const CursorFollowerSetIsLoadingContext = createContext<(state: boolean) => void>(() => { });
export const CursorFollowerSetCursorIconContext = createContext<(state: TCursorIcon["type"]) => void>(() => { });

type TCursorAction = {
  type: "hovered" | "invisible" | "pressed" | "normal"
}

type TCursorIcon = {
  type: "none" | "arrow" | "home" | "externalLink" | null
}

function reducer(state: TCursorAction["type"], action: TCursorAction): TCursorAction["type"] {
  return action.type;
}

function iconReducer(state: TCursorIcon["type"], action: TCursorIcon): TCursorIcon["type"] {
  return action.type
}

function CursorFollowerProvider({ children }: CursorFollowerProviderProps) {
  const [scope, animate] = useAnimate()
  const [event, updateEvent] = useReducer(
    reducer,
    "normal"
  )

  const [title, setTitleValue] = useState<string | null>("Scroll");
  const [isLoading, setIsLoadingValue] = useState(true)
  const [icon, updateIcon] = useReducer(
    iconReducer,
     null
  )
  console.log("icon inside CursorFollowerProvider:", icon)

  const setTitle = useCallback((newTitle: string | null) => setTitleValue(newTitle), [])
  const setCursorState = useCallback((event: TCursorAction["type"]) => updateEvent({ type: event }), [])
  const setIsLoading = useCallback((state: boolean) => setIsLoadingValue(state), [])
  const setCursorIcon = useCallback((state: TCursorIcon["type"]) => updateIcon({ type: state }), [])

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
          <CursorFollowerSetCursorIconContext.Provider value={setCursorIcon}>
            <NewFollowerContext title={title} icon={icon} isLoading={isLoading} ref={scope} />
            {children}
          </CursorFollowerSetCursorIconContext.Provider>
        </CursorFollowerSetIsLoadingContext.Provider>
      </CursorFollowerSetTitleContext.Provider>
    </CursorFollowerSetCursorContext.Provider>
  );
}

export default memo(CursorFollowerProvider);