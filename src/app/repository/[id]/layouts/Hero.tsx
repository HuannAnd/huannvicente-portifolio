'use client';

import LettersSlideInOnView from "@/components/LettersSlideInOnView";
import Polygon from "@/components/Polygon";

import useWindowViewport from "@/hooks/useWindowViewport";

interface Props { title: string, description: string }

const isServer = typeof window === "undefined"

export default function Hero({ title }: Props) {
  const windowViewport = useWindowViewport()
  const percentage = 94 / 100

  const radiusOfInscribedSquare = (windowViewport.height / Math.sqrt(2)) * percentage

  return (
    <section id="projectHero" className="w-screen px-4 mx-auto bg-white min-h-screen">
      <article className="h-screen w-full grid items-center place-content-center">
        <LettersSlideInOnView trigger="#projectHero">
          <h1 data-scroll data-scroll-speed="0.2" className="text-[7rem] relative text-[#111] text-center">
            Warren Challenge
          </h1>
        </LettersSlideInOnView>
      </article>
      <article id="projectHeroMiddle" className="h-[200dvh] w-full grid justify-end place-content-baseline">
        <LettersSlideInOnView trigger="#projectHeroMiddle">
          <h1 className="text-[7rem] pt-[9vw] leading-[80%] sticky top-0 text-[#111] text-left">
            Less
            <br />
            Information
            <br />
            And Complexity
          </h1>
        </LettersSlideInOnView>
        <Polygon className="left-1/2 absolute" vertexes={4} radius={radiusOfInscribedSquare} trigger="#projectHeroMiddle" />
      </article>
      <article id="projectHeroEnd" className="h-[200dvh] relative w-full grid justify-start place-content-baseline">
        <LettersSlideInOnView trigger="#projectHeroEnd">
          <h1 className="text-[7rem] pt-[9vw] sticky top-0 text-[#111] text-left">
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
