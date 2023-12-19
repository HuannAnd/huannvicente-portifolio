'use client';

import useSetCursor from "@/hooks/useSetCursor"
import useRedirectWithPageTransition from "@/hooks/useRedirectWithPageTransition"

import LettersSlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover"
import LettersSlideInOnView from "@/components/LettersSlideInOnView"

import { IProjectData } from "@/services/projects/type"
import useWindowViewport from "@/hooks/useWindowViewport";
import Polygon from "@/components/Polygon";

interface Props
  extends React.PropsWithChildren { }

export default function ClientSuggestion({ children }: Props) {
  return (
    <section
      id="suggestion"
      className="w-screen min-h-screen mb-[25vh] relative mx-auto px-@section py-[9vw]"
      data-name="Suggestions"
    >
      <LettersSlideInOnView trigger="#suggestion" >
        <h1 className="@desktop:mb-32 @mobileAndTablet:mb-4 sticky pt-@container top-0 z-10 text-[#fff] [contain:_paint] @mobileAndTablet:text-center overflow-hidden">
          Discover My <br className="@desktop:[display:_none]" /> Journey
          <br />
          And Surprise
        </h1>
      </LettersSlideInOnView>
      <Polygon trigger="#suggestion" className="absolute right-0 -z-[1]" radius={500} isRegular vertexes={5} />
      <article className="pt-[3vw] h-auto w-auto justify-center gap-4 items-end @mobileAndTablet:mx-auto @desktop:ml-auto @mobileAndTablet:items-center @mobile:row-span-2 flex flex-col @mobile:justify-center">
        {children}
      </article>
    </section>
  )
}

