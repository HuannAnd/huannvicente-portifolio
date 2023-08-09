import { useContext } from "react";

import { CursorFollowerSetCursorContext } from "@/contexts/CursorFollowerProvider";


export default function useFollowerSetState() {
  return useContext(CursorFollowerSetCursorContext)
}