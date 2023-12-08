'use client';

import SlideInOnTriggerHover from "@/components/LettersSlideInOnTriggerHover";
import useSetCursor from "@/hooks/useSetCursor";

interface Props {
  imageContent: React.ReactElement,
  name: string,
  index: number,
  artAuthor: string,
  href: string
}

export default function ClientSocialMedia({
  imageContent,
  name,
  href,
  index,
  artAuthor
}: Props) {
  const scrollSpeed = index % 2 === 0 ? 0.2 : 0.4

  const setCursor = useSetCursor()
  const setCursorToHoverMode = () => setCursor({ mode: "hovered" })
  const setCursorToNormal = () => setCursor({ mode: "normal" })

  return (
    <SlideInOnTriggerHover.Root>
      <a
        onMouseEnter={setCursorToHoverMode}
        onMouseLeave={setCursorToNormal}
        target="_blank"
        href={href}
        data-scroll
        data-scroll-speed={scrollSpeed}
        className="w-[55vmin] h-[55vmin] group/snapshot cursor-pointer @desktop:even:right-32 @mobileAndTablet:even:right-16 relative overflow-hidden rounded-2xl bg-white"
      >
        {imageContent}
        <div className="absolute w-full pb-4 px-4 bottom-0 text-white">
          <SlideInOnTriggerHover.Trigger>
            <small className="font-semibold text-[clamp(.6875rem,1.3vw,1rem)] inline-block overflow-hidden">&copy; {name}</small>
          </SlideInOnTriggerHover.Trigger>
          <SlideInOnTriggerHover.Trigger>
            <small className="float-right text-[clamp(.6875rem,1.3vw,1rem)] inline-block overflow-hidden">Art made by <span className="font-semibold">{artAuthor}</span></small>
          </SlideInOnTriggerHover.Trigger>
        </div>
      </a>
    </SlideInOnTriggerHover.Root>
  )
}