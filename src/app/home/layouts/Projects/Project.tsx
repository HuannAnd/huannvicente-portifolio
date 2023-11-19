"use client"

import { memo, useEffect, useRef } from "react";

import useGoTo from "@/hooks/useGoTo";
import useSetCursor from '@/hooks/useSetCursor'

import { IProjectData } from "@/services/projects/type";

import cn from "@/utils/cn";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LettersSlideInOnHover from "@/components/LettersSlideInOnHover";


interface ProjectProps
  extends Pick<IProjectData, "name" | "isInMaintenance" | "id" | "repository_url">,
  Omit<React.HTMLAttributes<HTMLDivElement>, "id"> { nTh: number }

function Project({
  name,
  id,
  isInMaintenance,
  nTh,
  repository_url,
  ...props
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const setCursor = useSetCursor()

  const goTo = useGoTo()

  function previewProject() {
    if (isInMaintenance) return setCursor({ title: "Maintenance", mode: "pressed" })
    setCursor({ title: null, mode: "normal" })
    goTo(`/repository/${id}`)
  }

  return (
    <div
      ref={ref}
      data-project
      className="col-span-12 z-10 group/item [transform-origin:top] [transform:_scaleX(0)] [filter:_blur(5px)] opacity-0 flex bg-transparent pl-4 border-t-[#333] border-t-[1px] relative cursor-pointer justify-between items-center py-8  h-auto"
      onMouseEnter={() => isInMaintenance ? null : setCursor({ mode: "hovered", title: "View More" })}
      onMouseUp={() => isInMaintenance ? null : setCursor({ mode: "hovered" })}
      onMouseDown={() => setCursor({ mode: "pressed" })}
      onMouseLeave={() => setCursor({ title: null, mode: "normal" })}
      onClick={previewProject}
      {...props}
    >
      <small>0{nTh}</small>
      <div className={cn("items-center ease-fast duration-300", isInMaintenance ? "" : "group-hover/item:pl-[1vw]")}>
        <LettersSlideInOnHover>
          <h3 className={cn("duration-300 text-[2rem] uppercase ease-smooth first-letter:uppercase truncate", isInMaintenance ? "text-@secondary" : "text-darkPrimary group-hover/item:opacity-30")}>{name}</h3>
        </LettersSlideInOnHover>
      </div>
    </div >
  );
}

export default memo(Project)