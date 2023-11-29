'use client';

import useSetCursor from "@/hooks/useSetCursor"
import useRedirectWithPageTransition from "@/hooks/useRedirectWithPageTransition"

import LettersSlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover"
import LettersSlideInOnView from "@/components/LettersSlideInOnView"

import { IProjectData } from "@/services/projects/type"

interface Props {
  nextProject: IProjectData
}

export default function ClientSuggestion({ nextProject }: Props) {
  const redirectWithPageTransition = useRedirectWithPageTransition()

  const setCursor = useSetCursor()

  const onHomeContainerClick = () => redirectWithPageTransition("/home")
  const onNextProjectClick = () => redirectWithPageTransition(`/repository/${nextProject.id}`)


  return (
    <section id="suggestion" className="w-screen min-h-screen mx-auto block px-@section py-[9vw]">
      <LettersSlideInOnView trigger="#suggestion" >
        <h1 className="mb-32 text-[#ddd] @mobileAndTablet:text-center relative overflow-hidden mix-blend-difference">
          Discover My Journey
          <br />
          And Surprise
        </h1>
      </LettersSlideInOnView>
      <article className="pt-[3vw] h-auto w-auto justify-center items-end @mobileAndTablet:mx-auto @desktop:ml-auto @mobileAndTablet:items-center @mobile:row-span-2 flex flex-col @mobile:justify-center">
        <LettersSlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed="0.2" onClick={onHomeContainerClick} className="@desktop:w-[55vmin] @tablet:w-[55vmin] @mobile:w-full @mobileAndTablet:aspect-square cursor-pointer z-10 relative group/snapshot overflow-hidden aspect-square rounded-2xl bg-white">
            <img onMouseEnter={() => setCursor({ mode: "hovered" })} onMouseLeave={() => setCursor({ mode: "normal" })} className="absolute scale-[.8] h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[.9]" src="/portifolio-brand.png" alt="" />
            <div className="absolute w-full pb-4 px-4 bottom-0 text-black">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block">&copy; Portfolio</small>
              </LettersSlideInOnTriggerHover.Trigger>
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="float-right overflow-hidden inline-block">Art made by <strong>HuannAnd</strong></small>
              </LettersSlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </LettersSlideInOnTriggerHover.Root>
        <LettersSlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed="0.4" onClick={onNextProjectClick} className="@desktop:w-[55vmin] right-32 @tablet:w-[55vmin] @mobile:w-full @mobileAndTablet:aspect-square relative cursor-pointer group/snapshot overflow-hidden aspect-square rounded-2xl bg-white">
            <img onMouseEnter={() => setCursor({ mode: "hovered" })} onMouseLeave={() => setCursor({ mode: "normal" })} className="absolute h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]" src="/warren-poster4.png" alt="" />
            <div className="absolute flex justify-between w-full pb-4 px-4 bottom-0 text-black">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block text-white">&copy; Warren</small>
              </LettersSlideInOnTriggerHover.Trigger>
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="float-right overflow-hidden text-white inline-block">Art made by <strong>HuannAnd</strong></small>
              </LettersSlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </LettersSlideInOnTriggerHover.Root>
      </article>
    </section>
  )
}

