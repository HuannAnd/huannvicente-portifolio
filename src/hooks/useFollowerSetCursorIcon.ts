import { useContext } from "react";

import { CursorFollowerSetCursorIconContext } from "@/contexts/CursorFollowerProvider";

export default function useFollowerSetCursorIcon() {
  return useContext(CursorFollowerSetCursorIconContext)
}