"use client"

import { memo } from "react";

import useGoTo from "@/hooks/useGoTo";
import useSetCursor from '@/hooks/useSetCursor'

import { IProjectData } from "@/services/projects/type";

import cn from "@/utils/cn";


interface ProjectProps
  extends Pick<IProjectData, "name" | "isInMaintenance" | "id" | "repository_url">,
  Omit<React.HTMLAttributes<HTMLDivElement>, "id"> { nTh: number }

function Project({ name, id, isInMaintenance, nTh, repository_url, ...props }: ProjectProps) {
  const setCursor = useSetCursor()

  const goTo = useGoTo()

  function previewProject() {
    if (isInMaintenance) return setCursor({ title: "Maintenance", state: "pressed" })
    setCursor({ title: null, state: "normal" })
    goTo(`/repository/${id}`)
  }

  return (
    <div
      className="col-span-12 z-10 ease-fast group/item flex bg-transparent pl-4 duration-300 border-t-[#333] border-t-[1px] relative cursor-pointer justify-between items-center py-8  h-auto"
      onMouseEnter={() => isInMaintenance ? null : setCursor({ state: "hovered", title: "View More" })}
      onMouseUp={() => isInMaintenance ? null : setCursor({ state: "hovered" })}
      onMouseDown={() => setCursor({ state: "pressed" })}
      onMouseLeave={() => setCursor({ title: null, state: "normal" })}
      onClick={previewProject}
      {...props}
    >
      <small>0{nTh}</small>
      <div className={cn("items-center ease-fast duration-300", isInMaintenance ? "" : "group-hover/item:pl-[1vw]")}>
        <h3 className={cn("duration-300 text-[2rem] uppercase ease-smooth first-letter:uppercase truncate pointer-events-none", isInMaintenance ? "text-@secondary" : "text-darkPrimary group-hover/item:opacity-30")}>{name}</h3>
      </div>
    </div >
  );
}

export default memo(Project)