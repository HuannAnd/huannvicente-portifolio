import { useContext } from "react";

import { CursorFollowerSetCursor } from '@/contexts/CursorFollowerProvider'
export default function useSetCursor() {
  return useContext(CursorFollowerSetCursor)
}