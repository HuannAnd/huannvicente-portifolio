import { useContext } from "react";

import { CursorFollowerSetIsLoadingContext } from "@/contexts/CursorFollowerProvider";

export default function useFollowerSetIsLoading() {
  return useContext(CursorFollowerSetIsLoadingContext)
}