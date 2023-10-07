import { useContext } from "react";

import { LocomotiveScrollRefContext } from './LocomotiveRoot'

export default function useLocomotiveScrollRef() {
  return useContext(LocomotiveScrollRefContext)
}