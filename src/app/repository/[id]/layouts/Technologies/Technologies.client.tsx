'use client';

import Polygon from "@/components/Polygon";

import Line from "./Line";

interface Props { }

export default function ClientTechnologies({ }: Props) {
  return (
    <section id="technologies" className="w-screen min-h-screen px-@section py-[9vw]">
      <h1 className="mb-32">
        Who Used To
        <br />
        Build That Repository
      </h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <ul className="[list-style:_inside] relative text-black ">
          <Line />
          <li className="mb-32">Typescript</li>
          <li>Firebase</li>
          <li>Styled-Components</li>
        </ul>
        <ul className="[list-style:_inside] relative">
          <Line />
          <li>HTML <span className="float-right text-[12px]">10%</span></li>
          <li>Javascript <span className="float-right text-[12px]">10%</span></li>
          <li>CSS <span className="float-right text-[12px]">10%</span></li>
        </ul>
        <Polygon data-scroll data-scroll-speed="-0.4" trigger="#technologies" vertexes={4} radius={300} />
      </div>
    </section>
  )
}