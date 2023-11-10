import { useContext } from "react";

import { FollowerLoadingContext } from "../FollowerContextProvider";

export default function useLoading() {
  return useContext(FollowerLoadingContext)
}