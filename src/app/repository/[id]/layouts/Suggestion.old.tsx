'use client';

import useSetCursor from "@/hooks/useSetCursor";
import useProjectId from "../hooks/useProjectId";
import useNextProjectWithId from "../hooks/useNextProjectWithId";

import LettersSlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover"
import LettersSlideInOnView from "@/components/LettersSlideInOnView";
import useGoTo from "@/hooks/useGoTo";

interface BackToHomeProps { }

export default function Suggestion({ }: BackToHomeProps) {
  const projectId = useProjectId()
  const goTo = useGoTo()

  const setCursor = useSetCursor()
  const nextProject = useNextProjectWithId(projectId)

  const onHomeContainerClick = () => goTo("/home")
  const onNextProjectClick = () => goTo(`/repository/${nextProject.id}`)


  return (
    <section id="suggestion" className="w-screen h-auto  min-h-screen px-@section py-[9vw] bg-white">
      <LettersSlideInOnView trigger="#suggestion" >
        <h1 className="text-[#111] overflow-hidden">
          Discover My Journey
          <br />
          And Surprise
        </h1>
      </LettersSlideInOnView>
      <div className="h-screen flex justify-center items-center gap-8 ">
        <LettersSlideInOnTriggerHover.Root>
          <div onClick={onHomeContainerClick} className="w-[55dvh] shadow-[inset_0_0_10px_0_rgba(0,_0,_0,_0.25)] cursor-pointer z-10 relative group/snapshot overflow-hidden aspect-square rounded-2xl bg-white">
            <img onMouseEnter={() => setCursor({ mode: "hovered" })} onMouseLeave={() => setCursor({ mode: "normal" })} className="absolute scale-[.8] h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[.9]" src="/portifolio-brand.png" alt="" />
            <div className="absolute w-full pb-4 px-4 bottom-0 text-black">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block">&copy; Portfolio</small>
              </LettersSlideInOnTriggerHover.Trigger>
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="float-right overflow-hidden inline-block">Art made by <strong>HuannAnd</strong></small>
              </LettersSlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </LettersSlideInOnTriggerHover.Root>
        <LettersSlideInOnTriggerHover.Root>
          <div onClick={onNextProjectClick} className="w-[55dvh] relative cursor-pointer group/snapshot overflow-hidden aspect-square rounded-2xl bg-white">
            <img onMouseEnter={() => setCursor({ mode: "hovered" })} onMouseLeave={() => setCursor({ mode: "normal" })} className="absolute h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]" src="/warren-poster4.png" alt="" />
            <div className="absolute w-full pb-4 px-4 bottom-0 text-black">
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="font-semibold overflow-hidden inline-block text-white">&copy; Warren</small>
              </LettersSlideInOnTriggerHover.Trigger>
              <LettersSlideInOnTriggerHover.Trigger>
                <small className="float-right overflow-hidden text-white inline-block">Art made by <strong>HuannAnd</strong></small>
              </LettersSlideInOnTriggerHover.Trigger>
            </div>
          </div>
        </LettersSlideInOnTriggerHover.Root>
      </div>
    </section>
  )
}

