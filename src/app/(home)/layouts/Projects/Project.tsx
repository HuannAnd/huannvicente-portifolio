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
        className="col-span-12 z-10 group/item [transform-origin:top] [transform:_scaleX(0)] [filter:_blur(5px)] opacity-0 flex bg-transparent pl-4 border-t-[#333] border-t-[1px] relative cursor-pointer justify-between items-center py-8  h-auto"
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseDown={setCursorToPressMode}
        onMouseLeave={setCursorToNormalMode}
      // {...props}
      >
        <small className="text-[.6875rem]">{tierInBaseFormat}</small>
        <div className={cn("items-center ease-fast duration-300", isInMaintenance ? "" : "group-hover/item:pl-[1vw]")}>
          <LettersSlideInOnTriggerHover.Trigger>
            <h3 className={cn("duration-300 text-[clamp(1rem,3vw,2.25rem)] uppercase ease-smooth truncate", isInMaintenance ? "text-@secondary" : "text-darkPrimary group-hover/item:opacity-30")}>{name}</h3>
          </LettersSlideInOnTriggerHover.Trigger>
        </div>
      </div >
    </LettersSlideInOnTriggerHover.Root>
  );
}

export default memo(Project)