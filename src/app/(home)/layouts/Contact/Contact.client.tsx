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
      className="max-w-[100vw] mx-auto py-[9vw] min-h-screen sm:px-[3vw] px-4 relative ease-fast text-white"
    >
      <div className="sticky mix-blend-difference pointer-events-none pt-4 @desktop:top-0 z-10">
        <LettersSlideInOnView trigger="#contact">
          <h1 className="my-auto  @desktop:sticky @desktop:top-4 z-50 mix-blend-difference @mobile:text-center @tablet:text-center block overflow-hidden col-span-11 mb-32 @desktop:text-left text-white">
            Connect And
            <br />
            Keep Together
          </h1>
        </LettersSlideInOnView>
        <p className="uppercase block font-semibold mix-blend-difference z-10">Socials<span className="text-[11px] absolute translate-x-full text-white/50">2</span></p>
      </div>
      <Polygon trigger="#contact" className="absolute right-0 -z-[1]" radius={500} isRegular vertexes={5} />
      <article className="pt-[3vw] @mobileAndTablet:gap-4 h-auto w-auto justify-center items-end @mobileAndTablet:mx-auto @desktop:ml-auto @mobileAndTablet:items-center @mobile:row-span-2 flex flex-col @mobile:justify-center">
        {children}
      </article>
    </section>
  )
}