import { useContext } from "react";
import { IsHoveredContext } from "./Root";

export default function useTriggerRefContext() {
  return useContext(IsHoveredContext)
}