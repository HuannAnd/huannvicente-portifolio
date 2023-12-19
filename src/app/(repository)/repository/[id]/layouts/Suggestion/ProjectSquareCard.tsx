'use client';

import LettersSlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover"

import useRedirectWithPageTransition from "@/hooks/useRedirectWithPageTransition"
import useSetCursor from "@/hooks/useSetCursor"

import { IProjectData } from "@/services/projects/type"


interface Props
  extends Pick<IProjectData, "name" | "id"> { }


export default function ProjectSquareCard({ id, name }: Props) {
  const redirectWithPageTransition = useRedirectWithPageTransition()

  const setCursor = useSetCursor()
  const setCursorToHoveredMode = () => setCursor({ mode: "hovered" })
  const setCursorToNormal = () => setCursor({ mode: "normal" })

  const redirectToNextProject = () => redirectWithPageTransition(`/repository/${id}`)

  return (
    <LettersSlideInOnTriggerHover.Root>
      <div data-scroll data-scroll-speed={0.2} onClick={redirectToNextProject} className="@mobileAndTablet:w-full @desktop:w-[55vmin] @mobileAndTablet:self-center @desktop:even:right-32 aspect-square rounded-2xl self-end @desktop:self-end relative cursor-pointer group/snapshot overflow-hidden bg-white">
        <img
          onMouseEnter={setCursorToHoveredMode}
          onMouseLeave={setCursorToNormal}
          className="absolute w-full h-full block object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]"
          src={`/projects/${id}/poster.png`}
          alt="Next project a snapshot"
        />
        <div className="absolute flex justify-between w-full pb-4 px-4 bottom-0">
          <LettersSlideInOnTriggerHover.Trigger>
            <small className="font-semibold font-roboto overflow-hidden inline-block text-white">&copy; {name}</small>
          </LettersSlideInOnTriggerHover.Trigger>
          <LettersSlideInOnTriggerHover.Trigger>
            <small className="float-right font-roboto overflow-hidden text-white inline-block">Art made by <strong className="font-roboto">HuannAnd</strong></small>
          </LettersSlideInOnTriggerHover.Trigger>
        </div>
      </div>
    </LettersSlideInOnTriggerHover.Root>
  )
}