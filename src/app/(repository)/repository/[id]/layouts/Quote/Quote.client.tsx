'use client';

import splitPointText from "@/utils/split-point-text";

import Polygon from "@/components/Polygon";


interface Props {
  phrase: string,
  author: string
}

export default function ClientQuote({ phrase, author }: Props) {
  return (
    <section
      id="quote"
      className="w-screen h-screen py-[9vw] px-@section grid place-content-center"
    >
      <div data-scroll data-scroll-speed="0.2" className="flex @mobileAndTablet:flex-col">
        <q className="font-normal @desktop:leading-[200%] text-[1.25rem] @mobileAndTablet:leading-[150%] @mobileAndTablet:text-center @mobileAndTablet:text-[1.25rem] tracking-[-.07em] self-center col-span-2">
          {phrase}
        </q>
        <small className="text-[#111] grow shrink-0 self-end text-[1.25rem] font-medium float-right text-right" title="author">- {author}</small>
      </div>
    </section>
  )
}