'use client';

import LettersSlideInOnView from "@/components/LettersSlideInOnView";
import Polygon from "@/components/Polygon";

import useWindowViewport from "@/hooks/useWindowViewport";

import WarrenBrandScene from "@/three/scenes/FloatingWarrenBrand";

import removeSpecialCharacters from "@/utils/remove-special-characters";
import { ElementType } from "react";

interface Props {
  title: string,
  description: string
  scene: ElementType
}

export default function Hero({ title, description, scene: Scene3DServer }: Props) {
  const titleWithoutSpecialCharacters = removeSpecialCharacters(title)

  return (
    <section id="projectHero" className="w-screen relative mx-auto clip-around min-h-screen">
      <Scene3DServer />
      <article className="h-screen px-@section w-full grid items-center place-content-center">
        <LettersSlideInOnView trigger="#projectHero">
          <h1 data-scroll data-scroll-speed="0.2" className="relative text-white mix-blend-difference text-center">{titleWithoutSpecialCharacters}</h1>
        </LettersSlideInOnView>
      </article>
    </section >
  )
}