import { AnimationControls } from "framer-motion";

import { TAnimationKey } from "./type";

export default abstract class BaseLoadingStrategy {
  constructor(
    public controls: AnimationControls,
    public animation: TAnimationKey
  ) { }

  public async slideIn(): Promise<void> { }

  public async slideOut(): Promise<void> { }

  public assignControls(controls: AnimationControls) {
    this.controls = controls
  }
}