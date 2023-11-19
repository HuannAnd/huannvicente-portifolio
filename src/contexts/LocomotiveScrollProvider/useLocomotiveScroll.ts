import { useContext } from "react";

import { LocomotiveScrollRefContext } from '.'

export default function useLocomotiveScroll() {
  return useContext(LocomotiveScrollRefContext)
}