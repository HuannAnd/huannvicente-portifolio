"use client";

import OrganicScene from "@/three/scenes/OrganicScene";

import LettersSlideInOnView from "@/components/LettersSlideInOnView";
import useWindowViewport from "@/hooks/useWindowViewport";


export default function Hero() {
  return (
    <section
      className="min-h-[300vh] grid grid-rows-4 w-screen mx-auto z-50 gap-x-2 text-black"
      id="hero"
    >
      <OrganicScene />
      <article id="heroInitial" data-scroll className="w-full px-@section grid place-content-center h-screen text-center">
        <LettersSlideInOnView delay={1} trigger="#heroInitial" threshold={20}>
          <h1 className="text-center overflow-hidden py-[9vw] text-white">
            Huann Vicente
          </h1>
        </LettersSlideInOnView>
      </article>
      <article id="heroMiddle" className="w-full px-@section flex @desktop:h-[200dvh] @mobileAndTablet:h-screen justify-start items-baseline">
        <LettersSlideInOnView trigger="#heroMiddle">
          <h1 className="@desktop:text-left sticky @mobile:text-center top-0 @desktop:ml-16 py-[9vw] text-white  ">
            Explore
            <br />
            Enjoy
            <br />
            The Worldwide Web
          </h1>
        </LettersSlideInOnView>
      </article>
      <article id="heroEnd" className="w-full flex px-@section @desktop:h-[200dvh] @mobileAndTablet:h-screen justify-end items-center">
        <LettersSlideInOnView trigger="#heroEnd">
          <h1 className="@desktop:text-left @mobile:text-center sticky top-0 @desktop:mr-16 py-[9vw] text-white">
            Dont Forget
            <br />
            Me
          </h1>
        </LettersSlideInOnView>
      </article>
    </section>
  )
}