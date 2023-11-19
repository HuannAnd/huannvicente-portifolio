import { useContext } from 'react'
import { CursorIconContext } from '@/contexts/CursorFollowerProvider'

export default function useIcon() {
  return useContext(CursorIconContext)
}