'use client';

import { motion, animate } from "framer-motion";

import useLoading from "./hooks/useLoading";
import useCursorAnimationScope from "./hooks/useCursorAnimationScope";
import { useEffect } from "react";
import useCursorMode from "./hooks/useCursorMode";

interface Props { }

export default function FollowerCircle({ }: Props) {
  const scope = useCursorAnimationScope()
  const isLoading = useLoading()
  const mode = useCursorMode()

  useEffect(() => {
    if (!scope?.current) return
    switch (mode) {
      case "normal":
        animate(scope.current, { scale: .5, opacity: 1 }, { duration: .3 })
        break;
      case "hovered":
        animate(scope.current, { scale: 1.1, opacity: 1 }, { duration: .3 })
        break;
      case "invisible":
        animate(scope.current, { scale: .5, opacity: 0 }, { duration: .3 })
        break;
      case "pressed":
        animate(scope.current, { scale: 1.2, opacity: 1 }, { duration: .3 })
        break;
      default:
        animate(scope.current, { scale: .5, opacity: 0 }, { duration: .3 })
        break;
    }
  },
    [mode]
  )

  return (
    <motion.svg
      className="w-[102px] aspect-square pointer-events-none"
      ref={scope}
    >
      <circle
        style={{ opacity: isLoading ? 0 : 1 }}
        className="pointer-events-none"
        cx="51" cy="51" r="40"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </motion.svg>
  )
}