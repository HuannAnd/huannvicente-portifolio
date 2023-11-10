import { useContext } from "react";

import { FollowerTitleContext } from "../FollowerContextProvider";

export default function useTitle() {
  return useContext(FollowerTitleContext)
}