"use client"

import React, { memo, createContext, useState, useCallback } from "react";

import { useAnimate } from "framer-motion";

import {
  ICursor,
  TCursorMode,
  TCursorIcon,
  TCursorModeContext,
  TCursorIsLoadingContext,
  TCursorTitleContext,
  TCursorIconContext,
  TCursorAnimationScopeContext
} from "./types";


interface CursorFollowerProviderProps
  extends React.PropsWithChildren { }

export const CursorModeContext = createContext<TCursorModeContext>(null);
export const CursorTitleContext = createContext<TCursorTitleContext>(null);
export const CursorIsLoadingContext = createContext<TCursorIsLoadingContext>(null);
export const CursorIconContext = createContext<TCursorIconContext>(null);
export const SetCursorStatesContext = createContext<(config: Partial<ICursor>) => void>(() => { });
export const CursorAnimationScopeContext = createContext<TCursorAnimationScopeContext>(null);


function CursorFollowerProvider({ children }: CursorFollowerProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [icon, setIcon] = useState<TCursorIcon>("none")
  const [title, setTitle] = useState<string | null>(null)
  const [mode, setMode] = useState<TCursorMode>("normal")
  const [scope] = useAnimate()

  const handleCursor = useCallback((config: Partial<ICursor>) => {
    if (config.mode !== undefined) {
      setMode(config.mode)
    }
    if (config.icon !== undefined) {
      setIcon(config.icon)
    }
    if (config.isLoading !== undefined) {
      setIsLoading(config.isLoading)
    }
    if (config.title !== undefined) {
      setTitle(config.title)
    }
  },
    []
  )

  return (
    <CursorTitleContext.Provider value={title}>
      <CursorIsLoadingContext.Provider value={isLoading}>
        <CursorIconContext.Provider value={icon}>
          <CursorModeContext.Provider value={mode}>
            <CursorAnimationScopeContext.Provider value={scope}>
              <SetCursorStatesContext.Provider value={handleCursor}>
                {/* <Cursor /> */}
                {children}
              </SetCursorStatesContext.Provider >
            </CursorAnimationScopeContext.Provider>
          </CursorModeContext.Provider>
        </CursorIconContext.Provider>
      </CursorIsLoadingContext.Provider>
    </CursorTitleContext.Provider>


  );
}

export default memo(CursorFollowerProvider);