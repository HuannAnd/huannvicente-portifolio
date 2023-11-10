import { Power3 } from 'gsap'
import { AnimationControls, Variants } from 'framer-motion'

import BaseLoadingStrategy from '../BaseAnimationStrategy'

export const slideUp = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
} as Variants

export default class CurtainLoadingStrategy
  extends BaseLoadingStrategy {

  constructor(controls: AnimationControls) {
    super(controls, "curtain")
  }

  public async slideIn() {
    this.controls.set({ opacity: 0 })
    await this.controls.start({ opacity: 1, transition: { duration: 1 } })
  }

  public async slideOut() {
    this.controls.set({ opacity: 1 })
    await this.controls.start({ opacity: 0, transition: { duration: 1, ease: Power3.easeInOut } })
  }
}