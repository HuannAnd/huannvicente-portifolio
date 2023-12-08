"use client";

import LettersSlideInOnView from "@/components/LettersSlideInOnView";
import { ElementType } from "react";

interface Props {
  scene: ElementType
}

export default function Hero({ scene: Scene3DServer }: Props) {
  return (
    <section id="hero" className="flex min-h-screen px-@section py-@container justify-start items-center w-screen mx-auto z-50 gap-x-2 text-black">
      <Scene3DServer />
      <LettersSlideInOnView delay={1} trigger="#hero" threshold={20}>
        <h1 className="text-left overflow-hidden mix-blend-difference text-white">
          Explore
          <br />
          Enjoy
          <br />
          The Worldwide Web
        </h1>
      </LettersSlideInOnView>
    </section>
  )
}