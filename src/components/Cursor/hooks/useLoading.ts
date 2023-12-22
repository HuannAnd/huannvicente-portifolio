import { useContext } from "react";
import { CursorIsLoadingContext } from "@/contexts/CursorFollowerProvider";

export default function useLoading() {
  return useContext(CursorIsLoadingContext)
}