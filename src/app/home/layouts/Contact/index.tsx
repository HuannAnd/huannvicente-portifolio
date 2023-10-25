"use client";

import Image from "next/image";
import Link from "next/link";

import useSetCursor from "@/hooks/useSetCursor";

import Midialink from "./MidiaLink";
import WordsFadeIn from "@/components/Words/WordsFadeIn";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface ContactProps { }

const SOCIAL_MIDIA = [
  { title: "Instagram", href: "https://www.instagram.com/huann_vt/" },
  { title: "Discord", href: "#" }
]

const PROFESSIONAL_MIDIA = [
  { title: "Linkedin", href: "https://www.linkedin.com/in/huann-vicente-5092a9261/" },
  { title: "Dribbble", href: "#" }
]

export function Contact({ }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: false })

  const setCursor = useSetCursor()

  return (
    <section
      data-scroll
      data-scroll-section
      ref={ref}
      id="contact"
      className="w-full h-auto min-h-screen sm:h-[100dvh] sm:px-[3vw] sm:grid sm:grid-rows-5 [--container-padding:3vw] relative ease-fast text-white"
    >
      <article
        data-scroll
        data-scroll-speed="-2"
        data-scroll-offset="-50%, 0%"
        className="grid lg:grid-cols-12 px-[3vw] md:grid-cols-12 sm:grid-cols-1 sm:row-span-2 bg-black z-50 sm:pt-0 pt-[5vh]"
      >
        <h2 className="my-auto align-middle sm:text-center col-span-11  md:text-left lg:text-left uppercase text-white">Contact</h2>
        <Image
          className="lg:ml-auto md:ml-auto md:mx-0 sm:mx-auto mt-auto rounded-full"
          src="/profile/image.jpeg"
          alt="Huann Profile image" width={100} height={100}
          quality={100}
        />
      </article>
      <article
        data-scrol
        data-scroll-speed="-5"
        data-scroll-offset="-100%,0%"
        className="pt-[3vw] sm:row-span-2 sm:flex sm:justify-center"
      >
        <div className="sm:w-full flex flex-col justify-center items-center px-[3vw] lg:pt-[9vw] md:pt-[3vw] sm:pt-[9vw] pb-[3vw]">
          {PROFESSIONAL_MIDIA
            .map(
              ({ title, ...rest }, i) => <Midialink key={`midia_link_${i}`} {...rest}>
                <WordsFadeIn delayInSeconds={.5 * (i + 1)} isInView={isInView} splitType="letters">
                  {title}
                </WordsFadeIn>
              </Midialink>
            )}
        </div>
      </article>
      <footer className="flex absolute lg:flex-row md:flex-row sm:flex-col sm:row-span-1 pb-[1.75vw] justify-between clip-around shadow-[0_0_0_100vmax_#060606] bottom-0 w-full pt-[3vw] px-[3vw] bg-[#060606]">
        <div className="sm:pb-[3vw]">
          <small className="font-normal text-white/50">SOCIALS</small>
          <ul className="lg:inline md:inline sm:flex sm:gap-x-[3vw]">
            {SOCIAL_MIDIA
              .map((x, i) => <li key={i} onMouseEnter={() => setCursor({ state: "hovered" })} onMouseLeave={() => setCursor({ state: "normal" })} className="mb-4 hover:text-white/50 duration-300 ease-smooth cursor-pointer text-white mix-blend-difference"><a target="_blank" href={x.href}>{x.title}</a></li>)
            }
          </ul>
        </div>
        <hr className="" />
        <div className="grid place-content-center sm:py-[3vw]">
          <p className="text-white">
            &copy; Developed By Huann Vicente
          </p>
        </div>
      </footer>
    </section>

  );
}

export default Contact;