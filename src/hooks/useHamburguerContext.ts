import { useContext } from "react";

import { NavigationHamburguerContext } from "@/contexts/NavigationContextProvider";

export default function useNavigationContext() {
  return useContext(NavigationHamburguerContext)
}