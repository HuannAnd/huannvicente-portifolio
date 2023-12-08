'use client';

import useSetCursor from "@/hooks/useSetCursor"
import useRedirectWithPageTransition from "@/hooks/useRedirectWithPageTransition"

import LettersSlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover"
import LettersSlideInOnView from "@/components/LettersSlideInOnView"

import { IProjectData } from "@/services/projects/type"
import useWindowViewport from "@/hooks/useWindowViewport";
import Polygon from "@/components/Polygon";

interface Props {
  nextProject: IProjectData,
  nextProjectPhotoSrc: string
}

export default function ClientSuggestion({ nextProject, nextProjectPhotoSrc }: Props) {
  const redirectWithPageTransition = useRedirectWithPageTransition()

  const setCursor = useSetCursor()
  const setCursorToHoveredMode = () => setCursor({ mode: "hovered" })
  const setCursorToNormal = () => setCursor({ mode: "normal" })
  const setCursorToInvisible = () => setCursor({ mode: "invisible" })

  const redirectToHomepage = () => redirectWithPageTransition("/")
  const redirectToNextProject = () => redirectWithPageTransition(`/repository/${nextProject.id}`)


  return (
    <section
      id="suggestion"
      className="w-screen min-h-screen mb-[25vh] relative mx-auto px-@section py-[9vw]"
      data-name="Suggestions"
    >
      <div className="top-0 sticky pt-4 z-10">
        <LettersSlideInOnView trigger="#suggestion" >
          <h1 className="mb-32 sticky @mobileAndTablet:top-4 @desktop:top-0 z-10 text-[#fff] @mobileAndTablet:text-center overflow-hidden">
            Discover My Journey
            <br />
            And Surprise
          </h1>
        </LettersSlideInOnView>
        <svg onClick={redirectToHomepage} onMouseEnter={setCursorToInvisible} onMouseLeave={setCursorToNormal} data-scroll data-scroll-speed="-0.001" data-scroll- className="relative @desktop:w-[3vw] @mobileAndTablet:w-[5vh] aspect-square block cursor-pointer" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.6875" cy="5.25" r="4.6875" stroke="#151515" strokeWidth={1} fill="#090909" />
          <path d="M3.29102 4.82039V6.30918H6.17852V4.82039M3.29102 4.82039H4.73477M3.29102 4.82039L4.73477 4.09668M6.17852 4.82039H4.73477M6.17852 4.82039L4.73477 4.09668M4.73477 4.82039V4.09668" stroke="#fff" strokeWidth="0.675" strokeLinejoin="round" />
        </svg>
      </div>
      <Polygon trigger="#suggestion" className="absolute right-0 -z-[1]" radius={500} isRegular vertexes={5} />
      <article className="pt-[3vw] h-auto w-auto justify-center items-end @mobileAndTablet:mx-auto @desktop:ml-auto @mobileAndTablet:items-center @mobile:row-span-2 flex flex-col @mobile:justify-center">
        <LettersSlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed={0.2} onClick={redirectToNextProject} className="w-[55vmin] @mobileAndTablet:self-center @desktop:even:right-32 @mobileAndTablet:even:right-16 aspect-square rounded-2xl self-end relative cursor-pointer group/snapshot overflow-hidden bg-white">
            <img
              onMouseEnter={setCursorToHoveredMode}
              onMouseLeave={setCursorToNormal}
              className="absolute w-full h-full block object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]"
              src="/a-turma-automoveis-poster.png"
              alt="Next project a snapshot"
            />
            <div className="absolute flex justify-between w-full pb-4 px-4 bottom-0">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block text-white">&copy; {nextProject.name}</small>
              </LettersSlideInOnTriggerHover.Trigger>
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="float-right overflow-hidden text-white inline-block">Art made by <strong>HuannAnd</strong></small>
              </LettersSlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </LettersSlideInOnTriggerHover.Root>
        <LettersSlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed={0.2} onClick={redirectToNextProject} className="w-[55vmin] @mobileAndTablet:self-center @desktop:even:right-32 @mobileAndTablet:even:right-16 aspect-square rounded-2xl self-end @desktop:self-end relative cursor-pointer group/snapshot overflow-hidden bg-white">
            <img
              onMouseEnter={setCursorToHoveredMode}
              onMouseLeave={setCursorToNormal}
              className="absolute w-full h-full block object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]"
              src="/mercantte-poster.png"
              alt="Next project a snapshot"
            />
            <div className="absolute flex justify-between w-full pb-4 px-4 bottom-0">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block text-white">&copy; {nextProject.name}</small>
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

