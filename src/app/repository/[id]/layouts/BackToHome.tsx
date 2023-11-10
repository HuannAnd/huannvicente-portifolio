'use client';

import Link from "next/link";

import useSetCursor from "@/hooks/useSetCursor";
import useProjectId from "./useProjectId";
import useNextProjectWithId from "./useNextProjectWithId";

interface BackToHomeProps { }

const SOCIAL_MIDIA = [
  { title: "Instagram", href: "https://www.instagram.com/huann_vt/" },
  { title: "Discord", href: "#" }
]

export default function BackToHome({ }: BackToHomeProps) {
  const projectId = useProjectId()

  const setCursor = useSetCursor()
  const nextProject = useNextProjectWithId(projectId)

  return (
    <section data-scroll-section data-scroll className="max-w-@content mx-auto px-[3vw] h-[100vh] relative flex justify-center gap-[3vw] items-center py-[9vw]">
      <Link
        onMouseEnter={() => setCursor({ title: nextProject.name, state: "hovered" })}
        onMouseLeave={() => setCursor({ title: null, icon: null, state: "normal" })}
        href={`/repository/${nextProject.id}`}
        onClick={() => setCursor({ state: "normal" })}
        className="w-full py-[3vw] hover:text-white/50 duration-300 ease-smooth cursor-pointer text-[20px] font-regular text-white text-center border-t-[#aaaaaa66] border-t-[1px]"
      >
        Next
      </Link>
      <Link
        onClick={() => setCursor({ state: "normal" })}
        onMouseLeave={() => setCursor({ title: null, icon: null, state: "normal" })}
        onMouseEnter={() => setCursor({ state: "hovered", icon: "home" })}
        href="/home"
        className="w-full py-[3vw] hover:text-white/50 duration-300 ease-smooth cursor-pointer text-[20px] font-regular text-white text-center border-t-[#aaaaaa66] border-t-[1px]"
      >
        Home
      </Link>
      <footer className="absolute flex flex-row justify-between clip-around shadow-[0_0_0_100vmax_#060606] bottom-0 w-full pt-[3vw] px-[3vw] bg-[#060606]">
        <div>
          <small className="font-normal text-white/50">SOCIALS</small>
          <ul>
            {SOCIAL_MIDIA
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

