"use client";

import Image from "next/image";
import Link from "next/link";

import useSetCursor from "@/hooks/useSetCursor";

import Midialink from "./MidiaLink";
import { useRef } from "react";
import { useInView } from "framer-motion";


import CustomButton from "@/components/CustomButton";
import Polygon from "@/components/Polygon";
import WordsFadeIn from "@/components/Words/WordsFadeIn";

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

  const socialsMidiasLength = SOCIAL_MIDIA.length + PROFESSIONAL_MIDIA.length

  const setCursor = useSetCursor()

  return (
    <section
      ref={ref}
      id="contact"
      className="w-screen mx-auto h-[200vh] min-h-screen sm:h-[100dvh] sm:px-[3vw] px-4 relative ease-fast text-white"
    >
      <h1 className="my-auto sm:text-center block text-[7rem] col-span-11 mb-32 md:text-left lg:text-left uppercase text-white">
        connect and
        <br />
        {" "}keep together
      </h1>
      <p className="sticky top-[8rem] uppercase inline font-semibold">Socials<span className="text-[11px] absolute translate-x-full text-white/50">{socialsMidiasLength}</span></p>
      <Polygon trigger="#contact" className="absolute right-0 -z-[1]" radius={500} isRegular vertexs={5} />
      <article className="pt-[3vw] h-1/2 w-auto block float-right ml-auto sm:row-span-2 sm:flex sm:justify-center">

        <div data-scroll data-scroll-speed="0.2" className="w-[55dvh] relative overflow-hidden aspect-square rounded-2xl bg-white">
          <img className="absolute h-full object-cover" src="/warren-poster4.png" alt="" />
          <div className="absolute w-full pb-4 px-4 bottom-0 text-black">
            <small className="font-semibold">&copy; Linkedin</small>
            <small className="float-right inline">Art made by <span className="font-semibold">HuannAnd</span></small>
          </div>
        </div>

        <div data-scroll data-scroll-speed="0.4" className="w-[55dvh] right-32 relative overflow-hidden aspect-square rounded-2xl bg-white">
          <img className="absolute h-full object-cover" src="/linkedin-poster.png" alt="" />
          <div className="absolute w-full pb-4 px-4 bottom-0 text-white">
            <small className="font-semibold">&copy; Linkedin</small>
            <small className="float-right inline">Art made by <span className="font-semibold">HuannAnd</span></small>
          </div>
        </div>

      </article>
    </section>

  );
}

export default Contact;