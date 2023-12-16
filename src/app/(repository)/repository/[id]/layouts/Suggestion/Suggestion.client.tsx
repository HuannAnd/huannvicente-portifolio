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
      <LettersSlideInOnView trigger="#suggestion" >
        <h1 className="@desktop:mb-32 @mobileAndTablet:mb-4 sticky pt-@container top-0 z-10 text-[#fff] [contain:_paint] @mobileAndTablet:text-center overflow-hidden">
          Discover My <br className="@desktop:[display:_none]" /> Journey
          <br />
          And Surprise
        </h1>
      </LettersSlideInOnView>
      <Polygon trigger="#suggestion" className="absolute right-0 -z-[1]" radius={500} isRegular vertexes={5} />
      <article className="pt-[3vw] h-auto w-auto justify-center gap-4 items-end @mobileAndTablet:mx-auto @desktop:ml-auto @mobileAndTablet:items-center @mobile:row-span-2 flex flex-col @mobile:justify-center">
        <LettersSlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed={0.2} onClick={redirectToNextProject} className="@mobileAndTablet:w-full @desktop:w-[55vmin] @mobileAndTablet:self-center @desktop:even:right-32 aspect-square rounded-2xl self-end relative cursor-pointer group/snapshot overflow-hidden bg-white">
            <img
              onMouseEnter={setCursorToHoveredMode}
              onMouseLeave={setCursorToNormal}
              className="absolute w-full h-full block object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]"
              src="/a-turma-automoveis-poster.png"
              alt="Next project a snapshot"
            />
            <div className="absolute flex justify-between w-full pb-4 px-4 bottom-0">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold font-roboto overflow-hidden inline-block text-white">&copy; {nextProject.name}</small>
              </LettersSlideInOnTriggerHover.Trigger>
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="float-right font-roboto overflow-hidden text-white inline-block">Art made by <strong className="font-roboto">HuannAnd</strong></small>
              </LettersSlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </LettersSlideInOnTriggerHover.Root>
        <LettersSlideInOnTriggerHover.Root>
          <div data-scroll data-scroll-speed={0.2} onClick={redirectToNextProject} className="@mobileAndTablet:w-full @desktop:w-[55vmin] @mobileAndTablet:self-center @desktop:even:right-32 aspect-square rounded-2xl self-end @desktop:self-end relative cursor-pointer group/snapshot overflow-hidden bg-white">
            <img
              onMouseEnter={setCursorToHoveredMode}
              onMouseLeave={setCursorToNormal}
              className="absolute w-full h-full block object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]"
              src="/mercantte-poster.png"
              alt="Next project a snapshot"
            />
            <div className="absolute flex justify-between w-full pb-4 px-4 bottom-0">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold font-roboto overflow-hidden inline-block text-white">&copy; {nextProject.name}</small>
              </LettersSlideInOnTriggerHover.Trigger>
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="float-right font-roboto overflow-hidden text-white inline-block">Art made by <strong className="font-roboto">HuannAnd</strong></small>
              </LettersSlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </LettersSlideInOnTriggerHover.Root>
      </article>
    </section>
  )
}

