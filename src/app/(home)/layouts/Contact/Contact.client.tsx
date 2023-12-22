'use client';

import Polygon from "@/components/Polygon";
import LettersSlideInOnView from "@/components/LettersSlideInOnView";


interface Props
  extends React.PropsWithChildren { }

export default function ClientContact({ children }: Props) {
  return (
    <section
      id="contact"
      data-name="Contact"
      className="max-w-[100vw] @mobileAndTablet:min-h-screen mx-auto pt-[9vw] mb-[calc(9vw_*_1.3)] px-@section min-h-screen relative ease-fast text-white"
    >
      <div className="sticky mix-blend-difference pointer-events-none pt-@container top-0 z-10">
        <LettersSlideInOnView trigger="#contact">
          <h1 className="my-auto @desktop:sticky @desktop:top-4 z-50 mix-blend-difference block overflow-hidden col-span-11 @desktop:text-left text-white">
            Connect And
            <br />
            Keep Together
          </h1>
        </LettersSlideInOnView>
        <h5 className="uppercase block pt-@container font-semibold mix-blend-difference z-10">Socials<span className="font-montserrat absolute translate-x-full -translate-y-1/2 text-@white-300">2</span></h5>
      </div>
      <Polygon trigger="#contact" className="absolute right-0 -z-[1]" radius={500} isRegular vertexes={5} />
      <article className="pt-@container @mobileAndTablet:gap-4 h-auto w-auto justify-center items-end @mobileAndTablet:mx-auto @desktop:ml-auto @mobileAndTablet:items-center @mobile:row-span-2 flex flex-col @mobile:justify-center">
        {children}
      </article>
    </section>
  )
}