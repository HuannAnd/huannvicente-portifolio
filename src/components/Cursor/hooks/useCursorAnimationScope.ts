import { useContext } from "react";
import { CursorAnimationScopeContext } from '@/contexts/CursorFollowerProvider'


export default function useCursorAnimationScope() {
  return useContext(CursorAnimationScopeContext)
}