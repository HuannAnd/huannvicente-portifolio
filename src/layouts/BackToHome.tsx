'use client';

import { useCallback, useMemo } from "react";

import Link from "next/link";

import useFollowerSetState from "@/hooks/useFollowerSetState";
import useFollowerTitle from "@/hooks/useFollowerSetTitle";
// import useProjectsContext from "@/hooks/useProjectsContext";
import useFollowerSetCursorIcon from "@/hooks/useFollowerSetCursorIcon";

import projects from "@/services/projects";

import getNextProjectId from "@/utils/getNextProjectId";

interface BackToHomeProps {
  id: number
}

const midia = [
  { title: "Instagram", href: "https://www.instagram.com/huann_vt/" },
  { title: "Discord", href: "#" }
]

export default function BackToHome({ id }: BackToHomeProps) {
  const setCursorState = useFollowerSetState()
  const setCursorIcon = useFollowerSetCursorIcon()
  const setTitle = useFollowerTitle()

  const nextProject = useMemo(() => getNextProjectId(projects, id), [id])
  console.log("nextProject value: ", nextProject)
  const handleMouseEnter = useCallback(() => {
    setTitle(nextProject.name)
    setCursorState("hovered")
  },
    []
  );
  const handleMouseLeave = useCallback(() => {
    setTitle(null)
    setCursorIcon(null)
    setCursorState("normal")
  },
    []
  );

  return (
    <section data-scroll-section data-scroll className="w-full px-[3vw] h-[100vh] relative flex justify-center gap-[3vw] items-center py-[9vw]">
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={`/repository/${nextProject.id}`}
        onClick={() => setCursorState("normal")}
        className="w-full py-[3vw] hover:text-white/50 duration-300 ease-smooth cursor-pointer text-[20px] font-regular text-white text-center border-t-2 border-t-[#111]"
      >
        Next
      </Link>
      <Link
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => { setCursorState("hovered"); setCursorIcon("home") }}
        href="/"
        onClick={() => { setCursorState("normal") }}
        className="w-full py-[3vw] hover:text-white/50 duration-300 ease-smooth cursor-pointer text-[20px] font-regular text-white text-center border-t-2 border-t-[#111]"
      >
        Home
      </Link>
      <footer className="absolute flex flex-row justify-between clip-around shadow-[0_0_0_100vmax_#060606] bottom-0 w-full pt-[3vw] px-[9vw] bg-[#060606]">
        <div>
          <small className="font-normal text-white/50">SOCIALS</small>
          <ul>
            {midia
              .map((x, i) => <li key={i} className="mb-4 text-white mix-blend-difference"><a target="_blank" href={x.href}>{x.title}</a></li>)
            }
          </ul>
        </div>
        <div className="grid place-content-center">
          <p className="text-white">
            &copy; Developed By Huann Vicente
          </p>
        </div>
      </footer>
    </section >
  )
}

