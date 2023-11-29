'use client';

import Polygon from "@/components/Polygon";
import SlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover";
import LettersSlideInOnView from "@/components/LettersSlideInOnView";

import useSetCursor from "@/hooks/useSetCursor";

interface Props {
  socialMedias: {
    name: string,
    imageURL: string
  }[]
}

export default function ClientContact({ socialMedias }: Props) {
  const setCursor = useSetCursor()
  const socialsMediasLength = socialMedias.length

  return (
    <section
      id="contact"
      className="w-screen mx-auto py-[9vw] min-h-screen sm:px-[3vw] px-4 relative ease-fast text-white"
    >
      <div className="sticky top-0">
        <LettersSlideInOnView trigger="#contact">
          <h1 className="my-auto @desktop:sticky @desktop:top-4 z-50 mix-blend-difference @mobile:text-center @tablet:text-center block overflow-hidden col-span-11 mb-32 @desktop:text-left text-white">
            Connect And
            <br />
            Keep Together
          </h1>
        </LettersSlideInOnView>
        <p className="uppercase block font-semibold mix-blend-difference z-10">Socials<span className="text-[11px] absolute translate-x-full text-white/50">{socialsMediasLength}</span></p>
      </div>
      <Polygon trigger="#contact" className="absolute right-0 -z-[1]" radius={500} isRegular vertexes={5} />
      <article className="pt-[3vw] h-auto w-auto justify-center items-end @mobileAndTablet:mx-auto @desktop:ml-auto @mobileAndTablet:items-center @mobile:row-span-2 flex flex-col @mobile:justify-center">
        <SlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed="0.2" className="w-[55vmin] h-[55vmin] relative group/snapshot overflow-hidden rounded-2xl bg-white">
            <img onMouseEnter={() => setCursor({ mode: "hovered" })} onMouseLeave={() => setCursor({ mode: "normal" })} className="absolute h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]" src="/dribbble-brand.png" alt="" />
            <div className="absolute w-full pb-4 px-4 bottom-0 text-white">
              <SlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block">&copy; Dribbble</small>
              </SlideInOnTriggerHover.Trigger>
              <SlideInOnTriggerHover.Trigger>
                <small className="float-right overflow-hidden inline-block">Art made by <span className="font-semibold">heyjeuss</span></small>
              </SlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </SlideInOnTriggerHover.Root>
        <SlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed="0.4" className="w-[55vmin] h-[55vmin] group/snapshot right-32 relative overflow-hidden rounded-2xl bg-white">
            <img onMouseEnter={() => setCursor({ mode: "hovered" })} onMouseLeave={() => setCursor({ mode: "normal" })} className="absolute h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]" src="/linkedin-poster.png" alt="" />
            <div className="absolute w-full pb-4 px-4 bottom-0 text-white">
              <SlideInOnTriggerHover.Trigger>
                <small className="font-semibold inline-block overflow-hidden">&copy; LinkedIn</small>
              </SlideInOnTriggerHover.Trigger>
              <SlideInOnTriggerHover.Trigger>
                <small className="float-right inline-block overflow-hidden">Art made by <span className="font-semibold">HuannAnd</span></small>
              </SlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </SlideInOnTriggerHover.Root>
        <SlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed="0.6" className="w-[55vmin] h-[55vmin] relative group/snapshot overflow-hidden rounded-2xl bg-white">
            <img onMouseEnter={() => setCursor({ mode: "hovered" })} onMouseLeave={() => setCursor({ mode: "normal" })} className="absolute h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]" src="/whatsapp-brand.png" alt="" />
            <div className="absolute w-full pb-4 px-4 bottom-0 text-black">
              <SlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block">&copy; WhatsApp</small>
              </SlideInOnTriggerHover.Trigger>
              <SlideInOnTriggerHover.Trigger>
                <small className="float-right overflow-hidden inline-block">Art made by <span className="font-semibold">heyjeuss</span></small>
              </SlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </SlideInOnTriggerHover.Root>
      </article>
    </section>
  )
}