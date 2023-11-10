'use client';

import WordsSlideInProgressProvider from "./WordsSlideInProgressProvider";

interface WordsSlideinProps
  extends React.HTMLAttributes<Element> { eventProgress: string }


export default function WordsSlideinRoot({ children, className, eventProgress, ...rest }: WordsSlideinProps) {
  return (
    <div {...rest} data-scroll-event-progress={eventProgress} className={className}>
      <WordsSlideInProgressProvider eventProgress={eventProgress}>
        {children}
      </WordsSlideInProgressProvider>
    </div>
  )
}