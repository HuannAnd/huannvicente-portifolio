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
}

function Project({
  name,
  id,
  isInMaintenance,
  nTh,
  repository_url,
  ...props
}: ProjectProps) {
  const setCursor = useSetCursor()
  const tierInBaseFormat = formatTierInTwoChars(nTh)

  const redirectWithPageTransitionTo = useRedirectWithPageTransition()

  const setCursorToMaintenance = () => setCursor({ mode: "pressed", title: "Maintenance" })
  const setCursorToViewMore = () => setCursor({ mode: "hovered", title: "View", projectId: id })
  const setCursorToHovered = () => setCursor({ mode: "hovered" })
  const setCursorToPressMode = () => setCursor({ mode: "pressed" })
  const setCursorToNormalMode = () => setCursor({ mode: "normal", title: null, projectId: null })

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
    <div
      data-project
      className="@desktop:col-span-full @desktop:pl-@gap @desktop:py-@gap @desktop:border-r @desktop:border-r-[#222] @mobileAndTablet:border-b  @mobileAndTablet:border-b-[#222] py-@gap z-10 group/item @desktop:px-[calc(var(--gap-padding)_*_.5)] [transform-origin:top] @mobileAndTablet:flex-col @mobileAndTablet:gap-4 @mobileAndTablet:justify-center flex bg-transparent relative cursor-pointer justify-between items-center  h-auto"
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseDown={setCursorToPressMode}
      onMouseLeave={setCursorToNormalMode}
    >
      <img
        className="@desktop:[display:none] @mobileAndTablet:aspect-[9_/_5] @mobileAndTablet:object-cover"
        src={`/projects/${id}/poster.png`}
        alt="Project Image"
      />
      <div className="flex w-full items-center justify-between">
        <h3 className="duration-300 order-2 text-@white-300 uppercase ease-smooth truncate">{name}</h3>
        <small className="text-[.6875rem] font-montserrat @mobileAndTablet:[display:_none] @desktop:right-0 @mobileAndTablet:relative">{tierInBaseFormat}</small>
      </div>
    </div >
  );
}

export default memo(Project)