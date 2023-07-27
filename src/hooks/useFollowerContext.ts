import { useContext } from "react";

import { CursorFollowerContext } from "@/contexts/CursorFollowerProvider";

export function useFollowerContext() {
  return useContext(CursorFollowerContext)
}