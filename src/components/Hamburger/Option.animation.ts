import { Variants } from "framer-motion";

export const fades: Variants = {
  initial: { bottom: "250px", left: "250px", opacity: 0, scale: 0 },
  fadeOut: { bottom: "250px", left: "250px", opacity: 0, scale: 0 },
  fadeIn: (
    { left, bottom, index }: { left: number, bottom: number, index: number }) => (
    {
      left,
      bottom,
      opacity: 1,
      scale: 1,
      transition:
      {
        delay: index * .03,
      }
    })
}