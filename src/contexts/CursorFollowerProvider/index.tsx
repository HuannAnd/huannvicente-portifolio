"use client"

import React, { memo, createContext, useState, useCallback } from "react";

import { useAnimate } from "framer-motion";

import {
  ICursor,
  TCursorMode,
  TCursorModeContext,
  TCursorIsLoadingContext,
  TCursorTitleContext,
  TCursorProjectIdContext,
  TCursorAnimationScopeContext
} from "./types";


interface CursorFollowerProviderProps
  extends React.PropsWithChildren { }

export const CursorModeContext = createContext<TCursorModeContext>(null);3
export const CursorTitleContext = createContext<TCursorTitleContext>(null);
export const CursorIsLoadingContext = createContext<TCursorIsLoadingContext>(null);
export const CursorProjectIdContext = createContext<TCursorProjectIdContext>(null);
export const SetCursorStatesContext = createContext<(config: Partial<ICursor>) => void>(() => { });
export const CursorAnimationScopeContext = createContext<TCursorAnimationScopeContext>(null);


function CursorFollowerProvider({ children }: CursorFollowerProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [projectId, setProjectId] = useState<number | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  const [mode, setMode] = useState<TCursorMode>("normal")
  const [scope] = useAnimate()

  const handleCursor = useCallback((config: Partial<ICursor>) => {
    if (config.mode !== undefined) {
      setMode(config.mode)
    }
    if (config.projectId !== undefined) {
      setProjectId(config.projectId)
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
        <CursorProjectIdContext.Provider value={projectId}>
          <CursorModeContext.Provider value={mode}>
            <CursorAnimationScopeContext.Provider value={scope}>
              <SetCursorStatesContext.Provider value={handleCursor}>
                {children}
              </SetCursorStatesContext.Provider >
            </CursorAnimationScopeContext.Provider>
          </CursorModeContext.Provider>
        </CursorProjectIdContext.Provider>
      </CursorIsLoadingContext.Provider>
    </CursorTitleContext.Provider>


  );
}

export default memo(CursorFollowerProvider);