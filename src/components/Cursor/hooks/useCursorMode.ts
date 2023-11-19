import { useContext } from "react";
import { CursorModeContext } from "@/contexts/CursorFollowerProvider"

export default function useCursorMode() {
  return useContext(CursorModeContext)
}