"use client"

import { memo } from "react";

import useRedirectWithPageTransition from "@/hooks/useRedirectWithPageTransition";
import useSetCursor from '@/hooks/useSetCursor'

import { IProjectData } from "@/services/projects/type";

import cn from "@/utils/cn";
import formatTierInTwoChars from "@/utils/formatTer"

import LettersSlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover";


interface ProjectProps
  extends Pick<IProjectData, "name" | "isInMaintenance" | "id" | "repository_url">,
  Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {
  nTh: number,
  hasDomain: boolean
}

function Project({
  name,
  id,
  isInMaintenance,
  nTh,
  repository_url,
  ...props
}: ProjectProps) {
  console.log(`Project with id ${id}: `, name)
  const setCursor = useSetCursor()
  const tierInBaseFormat = formatTierInTwoChars(nTh)

  const redirectWithPageTransitionTo = useRedirectWithPageTransition()

  const setCursorToMaintenance = () => setCursor({ mode: "pressed", title: "Maintenance" })
  const setCursorToViewMore = () => setCursor({ mode: "hovered", title: "View More" })
  const setCursorToHovered = () => setCursor({ mode: "hovered" })
  const setCursorToPressMode = () => setCursor({ mode: "pressed" })
  const setCursorToNormalMode = () => setCursor({ mode: "normal", title: null })

  function handleOnClick() {
    if (isInMaintenance) return setCursorToMaintenance()
    setCursorToNormalMode()
    redirectWithPageTransitionTo(`/repository/${id}`)
  }

  function handleOnMouseEnter() {
    if (isInMaintenance) return setCursorToMaintenance()
    return setCursorToViewMore()
  }

  return (
    <LettersSlideInOnTriggerHover.Root>
      <div
        data-project
        className="@desktop:col-span-full @mobileAndTablet:border-b-[1px] @mobileAndTablet:border-b-[#222] py-@gap z-10 group/item pt-@container @desktop:px-[calc(var(--gap-padding)_*_2.25)] [transform-origin:top] @mobileAndTablet:flex-col @mobileAndTablet:gap-4 @mobileAndTablet:justify-center [transform:_scaleX(0)] [filter:_blur(5px)] opacity-0 flex bg-transparent @desktop:border-t-[#333] @desktop:border-t-[1px] relative cursor-pointer justify-between items-center  h-auto"
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseDown={setCursorToPressMode}
        onMouseLeave={setCursorToNormalMode}
      // {...props}
      >
        <img className="@desktop:[display:none]" src="/projects/599657419/poster.png" alt="" />
        <div className="flex w-full items-center pb-@gap justify-between">
          <small className="text-[.6875rem] @mobileAndTablet:[display:_none] @desktop:right-0 @mobileAndTablet:relative absolute">{tierInBaseFormat}</small>
          {/* <div className="items-center ease-fast duration-300"> */}
          <LettersSlideInOnTriggerHover.Trigger>
            <h3 className="duration-300 text-[clamp(1.25rem,3vw,2.25rem)]  uppercase ease-smooth truncate">{name}</h3>
          </LettersSlideInOnTriggerHover.Trigger>
          {/* </div> */}
        </div>
      </div >
    </LettersSlideInOnTriggerHover.Root>
  );
}

export default memo(Project)