import { useAnimationControls } from "framer-motion"

import AnimationsOrquestrator from "@/animations/scenes/AnimationOrquestrator"
import { TAnimationKey } from '@/animations/scenes/type'


export default function useLoadingStrategy(strategy: TAnimationKey) {
  const controls = useAnimationControls()  
  const Orquestrator = new AnimationsOrquestrator(controls)

  const Strategy = Orquestrator.getStrategy(strategy)
  console.log("STrategy: ", Strategy)

  return Strategy
}