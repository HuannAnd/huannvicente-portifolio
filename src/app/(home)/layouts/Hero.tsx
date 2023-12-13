"use client";

import { ElementType } from "react";
import LettersSlideInOnView from "@/components/LettersSlideInOnView";

interface Props {
  scene: ElementType
}

export default function Hero({ scene: Scene3DServer }: Props) {
  return (
    <section id="hero" className="flex @mobileAndTablet:clip-around @mobileAndTablet:justify-center @mobileAndTablet:relative min-h-screen px-@section py-@container justify-start items-center w-auto max-w-[100vw] mx-auto z-50 gap-x-2 text-black">
      <Scene3DServer />
      <LettersSlideInOnView delay={1} trigger="#hero" threshold={20}>
        <h1 className="text-left relative overflow-hidden mix-blend-difference text-white">
          Portfolio
        </h1>
      </LettersSlideInOnView>
      <span className="text-[1.25em] relative -translate-y-full text-white">&copy;</span>
    </section>
  )
}