import { useContext } from "react";
import { WordsSlideInProgressContext } from "./WordsSlideInProgressProvider";

export default function useProgressContext() {
  return useContext(WordsSlideInProgressContext)
}