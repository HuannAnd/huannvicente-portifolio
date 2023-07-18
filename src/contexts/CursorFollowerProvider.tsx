"use client"

import Follower from "@/components/Follower";

import { useAnimate } from "framer-motion";
import React, { useReducer, createContext, useEffect, useState } from "react";

interface CursorFollowerProviderProps {
  children: React.ReactNode
}

interface Value {
  updateEvent: React.Dispatch<TCursorAction>,
  setTitle: React.Dispatch<React.SetStateAction<string | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const CursorFollowerContext = createContext({} as Value);

type TCursorAction = {
  type: "hovered" | "invisible" | "pressed" | "normal"
}

function reducer(state: TCursorAction["type"], action: TCursorAction): TCursorAction["type"] {
  return action.type;
}

const CursorFollowerProvider: React.FunctionComponent<CursorFollowerProviderProps> = ({ children }) => {
  const [scope, animate] = useAnimate()
  const [event, updateEvent] = useReducer(
    reducer,
    "normal"
  )

  const [title, setTitle] = useState<string | null>("Scroll");
  const [isLoading, setIsLoading] = useState(true)

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
    <CursorFollowerContext.Provider value={{ updateEvent, setTitle, setIsLoading }} >
      <Follower title={title} isLoading={isLoading} ref={scope} />
      {children}
    </CursorFollowerContext.Provider>
  );
}

export default CursorFollowerProvider;