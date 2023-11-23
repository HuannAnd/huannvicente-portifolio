'use client';

import LettersSlideInOnView from "@/components/LettersSlideInOnView";
import Polygon from "@/components/Polygon";

import useWindowViewport from "@/hooks/useWindowViewport";
import WarrenBrandScene from "@/three/scenes/FloatingWarrenBrand";

interface Props { title: string, description: string }

export default function Hero({ title }: Props) {
  const windowViewport = useWindowViewport()
  const percentage = 94 / 100

  const radiusOfInscribedSquare = (windowViewport.height / Math.sqrt(2)) * percentage

  return (
    <section id="projectHero" className="w-screen px-4 mx-auto min-h-screen">
      <WarrenBrandScene />
      <article className="h-screen w-full grid items-center place-content-center">
        <LettersSlideInOnView trigger="#projectHero">
          <h1 data-scroll data-scroll-speed="0.2" className="text-[7rem] mix-blend-difference relative text-[#ddd] text-center">
            Warren Challenge
          </h1>
        </LettersSlideInOnView>
      </article>
      <article id="projectHeroMiddle" className="h-[200dvh] w-full flex justify-start items-baseline">
        <LettersSlideInOnView trigger="#projectHeroMiddle">
          <h1 className="text-[7rem] pt-[9vw] mix-blend-difference z-10 leading-[80%] sticky top-0 text-[#ddd] text-left">
            Less
            <br />
            Information
            <br />
            And Complexity
          </h1>
        </LettersSlideInOnView>
        <Polygon className="left-1/2 absolute" vertexes={4} radius={radiusOfInscribedSquare} trigger="#projectHeroMiddle" />
      </article>
      <article id="projectHeroEnd" className="h-[200dvh] relative w-full flex justify-end items-center">
        <LettersSlideInOnView trigger="#projectHeroEnd">
          <h1 className="text-[7rem] mix-blend-difference z-10 pt-[9vw] sticky top-0 text-[#ddd] text-left">
            More Conceptive
            <br />
            Performance
            <br />
            And Beauty
          </h1>
        </LettersSlideInOnView>
        <Polygon className="right-1/2 top-0 absolute" vertexes={4} radius={radiusOfInscribedSquare} trigger="#projectHeroEnd" />
      </article>
    </section >
  )
}
