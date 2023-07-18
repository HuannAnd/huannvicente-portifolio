import { HTMLAttributes, useContext } from "react";

import { CursorFollowerContext } from "@/contexts/CursorFollowerProvider";

type CursorEvent = "hovered" | "normal" | "pressed" | "invisible"

export function useFollowerContext() {
  return useContext(CursorFollowerContext)
}