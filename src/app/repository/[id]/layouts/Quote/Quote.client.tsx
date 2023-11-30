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
      id="philosophy"
      data-name="Quote"
      className="w-screen h-screen py-[9vw] px-1 grid grid-cols-6 gap-x-4 "
    >
      <div data-scroll data-scroll-speed="0.2" className="col-span-4 col-start-2 self-center grid grid-cols-4">
        <q className="font-normal leading-[200%] tracking-[-.07em] self-center col-span-2">
          {splitPointText(phrase)
            .map(
              (text, key) => <span className="text-[1.5rem] text-[#111] even:text-[#222]" key={`line_${key}`}>{text}{". "}</span>
            )}
        </q>
        <small className="text-[#111] col-span-2 self-end  text-[1.25rem] font-medium float-right text-right" title="author">- {author}</small>
      </div>
    </section>
  )
}