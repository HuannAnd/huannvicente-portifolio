import { useContext } from "react";

import { SetCursorStatesContext } from '@/contexts/CursorFollowerProvider'
export default function useSetCursor() {
  return useContext(SetCursorStatesContext)
}