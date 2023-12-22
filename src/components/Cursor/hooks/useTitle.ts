import { useContext } from "react";
import { CursorTitleContext } from "@/contexts/CursorFollowerProvider";

export default function useTitle() {
  return useContext(CursorTitleContext)
}