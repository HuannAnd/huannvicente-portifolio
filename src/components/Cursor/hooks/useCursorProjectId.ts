import { useContext } from "react"
import { CursorProjectIdContext } from "@/contexts/CursorFollowerProvider"

export default function useProjectId() {
  return useContext(CursorProjectIdContext)
}