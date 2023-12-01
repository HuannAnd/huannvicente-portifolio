'use client';

import Polygon from "@/components/Polygon";

import Line from "./Line";

interface Props {
  frameworks: string[]
  languages: { language: string, percentage: number }[]
}

export default function ClientTechnologies({ frameworks, languages }: Props) {
  return (
    <section
      id="technologies"
      className="w-screen min-h-screen px-@section py-[9vw]"
      data-name="Technologies"
    >
      <h1 className="mb-32">
        Who Used To
        <br />
        Build That Repository
      </h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <ul className="[list-style:_inside] relative text-black ">
          <Line />
          {frameworks.map(x => <li className="mb-32">{x}</li>)}
        </ul>
        <ul className="[list-style:_inside] relative">
          <Line />
          {languages.map(x => <li>{x.language} <span className="float-right text-[12px]">{x.percentage}%</span></li>)}
          {/* <li>Javascript <span className="float-right text-[12px]">10%</span></li>
          <li>CSS <span className="float-right text-[12px]">10%</span></li> */}
        </ul>
        <Polygon data-scroll data-scroll-speed="-0.6" trigger="#technologies" vertexes={6} radius={300} />
      </div>
    </section>
  )
}