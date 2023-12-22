'use client';

import { ElementType, useLayoutEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import removeSpecialCharacters from "@/utils/remove-special-characters"
import Link from "@/components/Link";
import useSetCursor from "@/hooks/useSetCursor";

interface Props {
  title: string,
  siteURL: string | null,
  repositoryURL: string | null,
  creationDate: string,
  posterSrc: string
}

export default function Hero({
  title,
  siteURL,
  repositoryURL,
  posterSrc,
  creationDate
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const titleWithoutSpecialCharacters = removeSpecialCharacters(title)

  const setCursor = useSetCursor()

  const setCursorToNormal = () => setCursor({ mode: "normal", title: null })
  const setCursorToHoveredMode = () => setCursor({ mode: "hovered", title: null })

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia(ref)

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions!

        const timeline = gsap.timeline()

        if (isDesktop) {
          timeline.set(
            "li",
            {
              opacity: 0
            }
          )
          timeline.set(
            "#image",
            {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
            }
          )

          timeline.to(
            "li",
            {
              opacity: 1,
              stagger: 0.03,
              duration: .8,
              delay: 1.2,
            }
          )
          timeline.to(
            "#image",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              duration: .8,
              ease: "expo.out"
            }
          )
        } else if (isMobile) {
          timeline.set(
            "li",
            {
              opacity: 0
            }
          )
          timeline.set(
            "#image",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
            }
          )


          timeline.to(
            "#image",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.2,
              delay: 1,
              ease: "power4.out"
            })
            .to(
              "li",
              {
                opacity: 1,
                duration: 0.8,
                stagger: 0.05
              }
            )
        }

      })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="projectHero"
      className="w-screen h-[calc(100dvh_+_9vw)] pb-[9vw] grid @desktop:grid-cols-6 @mobileAndTablet:col-span-4 relative mx-auto clip-around"
    >
      <div className="@desktop:col-span-2 @desktop:pl-@section @mobileAndTablet:px-@section flex flex-col justify-between relative @mobileAndTablet:order-2 @mobileAndTablet:col-span-full bg-[#050505] @mobileAndTablet:pt-@container @desktop:pt-[3vw] text-white">
        <ul className="px-@gap">
          <li>
            <h5 className="font-bold font-syne uppercase">Title</h5>
            <p className="capitalize small">{titleWithoutSpecialCharacters}</p>
          </li>
          <li className="pt-@gap">
            <h5 className="font-bold font-syne uppercase">Design/Development</h5>
            <p className="small">HuannAND</p>
          </li>
          <li className="pt-@gap ">
            <h5 className="font-bold font-syne uppercase">Created</h5>
            <p className="small">{creationDate}</p>
          </li>
        </ul>
        <div className="@desktop:pb-@container">
          {repositoryURL ? (
            <Link
              href={repositoryURL}
              target="_blank"
              onMouseEnter={setCursorToHoveredMode}
              onMouseLeave={setCursorToNormal}
              withArrow
              className="w-full"
            >View Repository</Link>
          ) : null}
          {siteURL ? (
            <Link
              href={siteURL}
              target="_blank"
              onMouseEnter={setCursorToHoveredMode}
              onMouseLeave={setCursorToNormal}
              withArrow
              className="w-full"
            >Discover</Link>
          ) : null}
        </div>
      </div>
      <div
        onMouseEnter={setCursorToHoveredMode}
        onMouseLeave={setCursorToNormal}
        id="image"
        className="w-full cursor-pointer hover:cursor-pointer hover:brightness-50 [transition:filter_800ms_cubic-bezier(0.45,0,0.55,1)] brightness-100 ease-smooth @desktop:col-span-4 overflow-hidden"
      >
        <img
          data-scroll
          data-scroll-speed="-0.3"
          className="col-span-5 z-10 @mobileAndTablet:order-1 w-full @mobileAndTablet:col-span-full h-[calc(100%_+_100px)] @desktop:min-h-screen object-cover"
          src={posterSrc}
          alt="Project Poster Image"
        />
      </div>
    </section >
  )
}