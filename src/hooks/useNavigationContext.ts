import { useContext } from "react";

import { NavigationContext } from "@/contexts/NavigationContextProvider";

export default function useNavigationContext() {
  return useContext(NavigationContext)
}