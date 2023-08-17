"use client"

import { memo } from "react";

import { useRouter } from "next/navigation";

import useFollowerSetTitle from "@/hooks/useFollowerSetTitle";
import useFollowerSetState from "@/hooks/useFollowerSetState";
import useFollowerSetIsLoading from "@/hooks/useFollowerSetIsLoading";
import wait from "@/utils/wait";

type ProjectProps = React.HTMLAttributes<HTMLDivElement> & {
  project: {
    name: string,
    id: number,
    isInMaintenance: boolean
  },
  nTh: number,
  // isInMaintanance?: boolean
}

function Project({ project, nTh, ...props }: ProjectProps) {
  // console.log("Project render ", nTh);
  const router = useRouter()

  const setCursorState = useFollowerSetState()
  const setTitle = useFollowerSetTitle()
  const setIsLoading = useFollowerSetIsLoading()

  const handles = {
    onClick: previewProject,
    onMouseEnter: () => {
      setCursorState("hovered")
      setTitle("View more")
    },
    onMouseUp: () => setCursorState("hovered"),
    onMouseDown: () => setCursorState("pressed"),
    onMouseLeave: () => {
      setTitle(null)
      setCursorState("normal")
    }
  }

  function previewProject() {
    if (project.isInMaintenance) {
      setTitle("Maintenance")
    } else {
      setTitle(null)
      setCursorState("normal")
      setIsLoading(true)
      router.push(`/repository/${project.id}`)
    }
  }

  return (
    <div
      className="col-span-12 bg-darkPrimary z-10 ease-fast group/item flex pl-0 duration-300 border-t-[#111] border-t-2 relative cursor-pointer justify-between items-center py-[clamp(2rem,_5vw,_4em)] h-auto"
      {...handles}
      {...props}
    >
      <div className="flex items-center ease-fast group-hover/item:pl-[1vw] duration-300">
        <h1 className="text-[clamp(30px,_5.7vw,_114px)] group-hover/item:opacity-30 duration-300 ease-smooth first-letter:uppercase truncate pointer-events-none text-darkPrimary">{project.name}</h1>
      </div>
      <p>{nTh}</p>
    </div>
  );
}

export default memo(Project)