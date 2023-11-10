import { AnimationControls } from "framer-motion";

import BaseLoadingStrategy from "./BaseAnimationStrategy";

import CurtainLoading from "./CurtainLoading/anim";

import { TAnimationKey } from "./type";

export default class AnimationsOrquestrator {
  private strategies: BaseLoadingStrategy[]
  constructor(
    private controls: AnimationControls,
  ) {
    this.strategies = [
      new CurtainLoading(this.controls),
    ]

  }

  getStrategy(strategy: TAnimationKey): BaseLoadingStrategy {
    let Strategy = this.strategies.find(x => x.animation === strategy)!
    Strategy.assignControls(this.controls)

    return Strategy
  }
}