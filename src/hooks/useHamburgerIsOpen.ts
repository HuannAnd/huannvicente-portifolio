import { useContext } from "react";
import { NavigationHamburguerIsOpenContext } from '@/contexts/NavigationContextProvider'

export default function useHamburgerIsOpen() {
  return useContext(NavigationHamburguerIsOpenContext)
}