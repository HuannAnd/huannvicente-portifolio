'use client';

import splittedText from "@/utils/splittedText";

import Polygon from "@/components/Polygon";


interface Props {
  phrase: string,
  author: string
}

export default function Philosophy({ phrase, author }: Props) {
  return (
    <section
      id="philosophy"
      className="w-screen h-screen py-[9vw] px-1 bg-white grid grid-cols-6 gap-x-4 ">
      <div data-scroll data-scroll-speed="0.2" className="col-span-4 col-start-2 self-center grid grid-cols-4">
        <q className="font-normal leading-[200%] tracking-[-.07em] self-center col-span-2">
          {splittedText(phrase)
            .map(
              (text, key) => <span className="text-[1.5rem] text-[#111] even:text-[#222]" key={`line_${key}`}>{text}{". "}</span>
            )
          }
        </q>
        <small className="text-[#111] col-span-2 self-end  text-[1.25rem] font-medium float-right text-right" title="author">- {author}</small>
      </div>
      <Polygon className="absolute left-1/2 -translate-x-1/2" trigger="#philosophy" radius={300} vertexes={4} />
    </section>
  )
}