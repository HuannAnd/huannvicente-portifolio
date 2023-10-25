"use client"

import { memo } from "react";

import useGoTo from "@/hooks/useGoTo";
import useSetCursor from '@/hooks/useSetCursor'

import { IProjectData } from "@/services/projects/type";

import cn from "@/utils/cn";


interface ProjectProps
  extends Pick<IProjectData, "name" | "isInMaintenance" | "id">,
  Omit<React.HTMLAttributes<HTMLDivElement>, "id"> { nTh: number }

function Project({ name, id, isInMaintenance, nTh, ...props }: ProjectProps) {
  const setCursor = useSetCursor()

  const goTo = useGoTo()

  function previewProject() {
    if (isInMaintenance) return setCursor({ title: "Maintenance", state: "pressed" })
    setCursor({ title: null, state: "normal" })
    goTo(`/repository/${id}`)
  }

  return (
    <div
      className="col-span-12 bg-darkPrimary z-10 ease-fast group/item flex pl-0 duration-300 border-t-[#111] border-t-2 relative cursor-pointer justify-between items-center py-[clamp(2rem,_5vw,_4em)] h-auto"
      onMouseEnter={() => setCursor({ state: "hovered", title: "View More" })}
      onMouseUp={() => setCursor({ state: "hovered" })} 
      onMouseDown={() => setCursor({ state: "pressed" })}
      onMouseLeave={() => setCursor({ title: null, state: "normal" })}
      onClick={previewProject}
      {...props}
    >
      <div className={cn("flex items-center ease-fast duration-300", isInMaintenance ? "" : "group-hover/item:pl-[1vw]")}>
        <h3 className={cn("duration-300 ease-smooth first-letter:uppercase truncate pointer-events-none", isInMaintenance ? "text-@secondary" : "text-darkPrimary group-hover/item:opacity-30")}>{name}</h3>
      </div>
      <small>{nTh}</small>
    </div >
  );
}

export default memo(Project)