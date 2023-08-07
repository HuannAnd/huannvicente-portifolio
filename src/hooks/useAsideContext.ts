import { useContext } from "react";

import { NavigationAsideContext } from "@/contexts/NavigationContextProvider";

export default function useAsideContext() {
  return useContext(NavigationAsideContext)
}