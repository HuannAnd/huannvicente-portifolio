'use client';

import { useLayoutEffect, useRef } from "react";

import Polygon from "@/components/Polygon";
import LettersSlideInOnView from "@/components/LettersSlideInOnView";

import Line from "./Line";
import { initialLineState, lineWithFullHeight } from "./Line.animation";
import { fadeInListItem, fadeOutListItem } from "./List.animation";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomButton from "@/components/CustomButton";

import format from "date-fns/format";
import installMediaQueryWatcher from "@/utils/media-query-watcher";


interface Props {
  frameworks: string[]
  languages: { language: string, percentage: number }[]
}

const getArithmeticSumOfPercentages = (arrayOfNumber: number[]) => {
  let newArray = []

  for (let i = 0; i < arrayOfNumber.length; i++) {
    const element = arrayOfNumber[i];
    if (i === 0) {
      newArray.push(element)
    }
    else if (i === arrayOfNumber.length - 1) {
      newArray.push(100)
    }
    else {
      let result = element
      for (let j = i - 1; j >= 0; j--) {
        const previousElement = arrayOfNumber[j]
        result += previousElement
      }
      newArray.push(result)
    }

  }
  return newArray
}

export default function ClientTechnologies({ frameworks, languages }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const dateFormatted = format(new Date().getTime(), "yyyy, dd MMMM")
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    installMediaQueryWatcher("(max-width: 768px)", (matches) => {
      if (matches) {
        const context = gsap.context(() => {
          gsap.set("circle", {
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              markers: false,
              end: `${2 * window.innerHeight - 100} bottom`,
              scrub: false,
              onLeave: () => { gsap.to("button", { scale: 0 }) },
              onLeaveBack: () => { gsap.to("button", { scale: 1 }) }
            }
          })
        }, ref)
      } else {
        return
      }
    })

    return () => { }
  }, [ref])

  return (
    <section
      id="technologies"
      ref={ref}
      className="w-screen min-h-screen relative px-@section py-[9vw] flex flex-col gap-32 justify-between"
      data-name="Technologies"
    >
      <div className="sticky top-4 z-10 mix-blend-difference">
        <LettersSlideInOnView trigger="#technologies" >
          <h1 className="mb-16 @mobileAndTablet:text-center mix-blend-difference overflow-hidden text-[#ddd]">
            Who Used To
            <br />
            Build That Repository
          </h1>
        </LettersSlideInOnView>
        {/* <div className="w-full grid grid-cols-4 text-white gap-4">
          <p className="col-span-full flex justify-between items-center">
            <strong className="font-semibold overflow-hidden uppercase tracking-[-.8px]">Hours Of Work</strong>
            <span className="@mobileAndTablet:text-[.875rem] text-[#aaa]">203h</span>
          </p>
          <p className="col-span-full flex justify-between items-center">
            <strong className="font-semibold overflow-hidden uppercase tracking-[-.8px]">Date Of Creation</strong>
            <span className="@mobileAndTablet:text-[.875rem] text-[#aaa]">{dateFormatted}</span>
          </p>
          <p className="col-span-full flex justify-between items-center">
            <strong className="font-semibold overflow-hidden uppercase tracking-[-.8px]">Collaborators</strong>
            <span className="@mobileAndTablet:text-[.875rem] text-[#aaa]">HuannAnd</span>
          </p>
        </div > */}
      </div>
      <div className="grow flex w-full @mobileAndTablet:justify-center items-end">
        <CustomButton className="sticky bottom-[1rem]">Warren</CustomButton>
      </div>
    </section >
  )
}