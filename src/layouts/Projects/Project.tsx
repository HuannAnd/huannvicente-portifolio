"use client"

import { useRef } from "react";

import { useFollowerContext } from "@/hooks/useFollowerContext";
import { useRouter } from "next/navigation";

type ProjectProps = React.HTMLAttributes<HTMLDivElement> & {
  project: {
    name: string,
    id: number,
    isDeveloped: boolean
  },
  nTh: number
}

export default function Project({ project, nTh, ...props }: ProjectProps) {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null!)
  const { updateEvent, setTitle, setIsLoading } = useFollowerContext()

  const handles = {
    onClick: previewProject,
    onMouseEnter: () => {
      updateEvent({ type: "hovered" })
      setTitle("View more")
    },
    onMouseUp: () => updateEvent({ type: "hovered" }),
    onMouseDown: () => updateEvent({ type: "pressed" }),
    onMouseLeave: () => {
      setTitle(null)
      updateEvent({ type: "normal" })
    }

  }

  function previewProject() {
    setTitle(null)
    updateEvent({ type: "normal" })
    setIsLoading(true)
    router.push(`/repository/${project.id}`)
  }

  return (
    <div
      className="col-span-12 bg-darkPrimary ease-fast group/item flex pl-0 duration-300 border-t-[#111] border-t-2 relative cursor-pointer justify-between items-center py-[clamp(2rem,_5vw,_4em)] h-auto"
      ref={ref}
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