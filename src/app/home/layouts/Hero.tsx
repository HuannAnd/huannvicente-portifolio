"use client";

import OrganicScene from "@/three/scenes/OrganicScene";

import LettersSlideInOnView from "@/components/LettersSlideInOnView";


export default function Hero() {
  return (
    <section
      className="min-h-[300vh] grid grid-rows-4 w-screen mx-auto z-50 gap-x-2 text-black"
      id="hero"
    >
      <OrganicScene />
      <article data-scroll className="w-full grid place-content-center h-screen text-center">
        <LettersSlideInOnView delay={1} trigger="#heroinitial" threshold={20}>
          <h1 id="heroInitial" className="text-center overflow-hidden ml-16 py-[9vw] text-white leading-[80%] uppercase text-[7rem]">
            Huann Vicente
          </h1>
        </LettersSlideInOnView>
      </article>
      <article id="heroMiddle" className="w-full flex h-[200dvh] justify-start items-baseline">
        <LettersSlideInOnView trigger="#heroMiddle">
          <h1 className="text-left sticky top-0 ml-16 py-[9vw] text-white leading-[80%] uppercase text-[7rem]">
            Explore
            <br />
            Enjoy
            <br />
            The Worldwide Web
          </h1>
        </LettersSlideInOnView>
      </article>
      <article id="heroEnd" className="w-full flex h-[200dvh] justify-end items-center">
        <LettersSlideInOnView trigger="#heroEnd">
          <h1 className="text-left sticky top-0 mr-16 py-[9vw] text-white leading-[80%] uppercase text-[7rem]">
            Dont Forget
            <br />
            Me
          </h1>
        </LettersSlideInOnView>
      </article>
    </section>
  )
}