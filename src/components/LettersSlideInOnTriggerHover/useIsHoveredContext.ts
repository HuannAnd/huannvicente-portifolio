import { useContext } from "react";
import { IsHoveredContext } from "./Root";

export default function useIsHoveredContext() {
  return useContext(IsHoveredContext)
}