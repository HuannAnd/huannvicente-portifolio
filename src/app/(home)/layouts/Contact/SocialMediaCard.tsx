'use client';

import SlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover";
import useSetCursor from "@/hooks/useSetCursor";

interface Props {
  imageContent: React.ReactElement,
  name: string,
  index: number,
  artAuthor: string
}

export default function ClientSocialMedia({
  imageContent,
  name,
  index,
  artAuthor
}: Props) {
  const scrollSpeed = index % 2 === 0 ? 0.2 : 0.4

  const setCursor = useSetCursor()
  const setCursorToHoverMode = () => setCursor({ mode: "hovered" })
  const setCursorToNormal = () => setCursor({ mode: "normal" })

  return (
    <SlideInOnTriggerHover.Root>
      <div
        onMouseEnter={setCursorToHoverMode}
        onMouseLeave={setCursorToNormal}
        data-scroll
        data-scroll-speed={scrollSpeed}
        className="w-[55vmin] h-[55vmin] group/snapshot even:right-32 relative overflow-hidden rounded-2xl bg-white"
      >
        {imageContent}
        <div className="absolute w-full pb-4 px-4 bottom-0 text-white">
          <SlideInOnTriggerHover.Trigger>
            <small className="font-semibold inline-block overflow-hidden">&copy; {name}</small>
          </SlideInOnTriggerHover.Trigger>
          <SlideInOnTriggerHover.Trigger>
            <small className="float-right inline-block overflow-hidden">Art made by <span className="font-semibold">{artAuthor}</span></small>
          </SlideInOnTriggerHover.Trigger>
        </div>
      </div>
    </SlideInOnTriggerHover.Root>
  )
}