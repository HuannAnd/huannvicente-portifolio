import { useContext } from "react";

import { CursorFollowerSetTitleContext } from "@/contexts/CursorFollowerProvider";

export default function useFollowerSetTitle() {
  return useContext(CursorFollowerSetTitleContext)
}