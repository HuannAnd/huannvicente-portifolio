"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import useFollowerSetState from "@/hooks/useFollowerSetState";
import useFollowerSetCursorIcon from "@/hooks/useFollowerSetCursorIcon";

interface ContactProps {

}

const midia = [
  { title: "Instagram", href: "https://www.instagram.com/huann_vt/" },
  { title: "Discord", href: "#" }
]

const Contact: React.FunctionComponent<ContactProps> = ({ }) => {
  console.log("Contact was render")
  const ref = useRef<HTMLDivElement>(null!)
  const title = useRef<HTMLDivElement>(null!)

  const setCursorState = useFollowerSetState()
  const setCursorIcon = useFollowerSetCursorIcon()

  return (
    <section
      data-scroll
      data-scroll-section
      id="contact"
      className="w-full h-auto min-h-screen sm:h-[100dvh] sm:px-[3vw] sm:grid sm:grid-rows-5 [--container-padding:3vw] relative ease-fast text-white"
      ref={ref}
    >
      <motion.article
        data-scroll
        data-scroll-speed="-2"
        data-scroll-offset="-50%, 0%"
        className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 sm:row-span-2 bg-black z-50 sm:pt-0 pt-[5vh]"
        ref={title}

      >
        <div className="col-span-8 lg:order-1 md:order-1 sm:order-2">
          <div className="col-span-5">
            <div className="w-full">
              <h1 className="text-[clamp(5em,_10vw,_200px)] my-auto align-middle sm:text-center md:text-left lg:text-left font-semibold uppercase text-white">Contact</h1>
            </div>
          </div>
        </div>
        <div className="col-span-4 p-10 lg:order-2 md:order-2 sm:order-1">
          <Image
            className="lg:ml-auto md:ml-auto md:mx-0 sm:mx-auto mt-auto rounded-full"
            src="/profile/image.jpeg"
            alt="Huann Profile image" width={100} height={100}
            quality={100}
          />
        </div>
      </motion.article>
      <motion.article
        data-scrol
        data-scroll-speed="-5"
        data-scroll-offset="-100%,0%"
        className="pt-[3vw] sm:row-span-2 sm:flex sm:justify-center"
      >
        <div className="sm:w-full flex flex-col justify-center items-center px-[3vw] lg:pt-[3vw] md:pt-[3vw] sm:pt-[9vw] pb-[3vw]">
          {[{ title: "Linkedin", href: "https://www.linkedin.com/in/huann-vicente-5092a9261/" }, { title: "Dribbble", href: "#" }]
            .map(
              (midia, key) => (
                <Link
                  href={midia.href}
                  target="_blank"
                  key={key}
                  onMouseEnter={() => { setCursorState("hovered"); setCursorIcon("externalLink") }}
                  onMouseDown={() => setCursorState("pressed")}
                  onMouseUp={() => setCursorState("hovered")}
                  onMouseLeave={() => { setCursorState("normal"); setCursorIcon(null) }}
                  className="text-center inline-block saturate-0 w-full duration-300 cursor-pointer text-white py-[3vw] border-t-[#222] border-t-2 hover:text-white/50 font-regular"
                >{midia.title}</Link>
              )
            )}
        </div>
      </motion.article>
      <footer className="flex lg:flex-row md:flex-row sm:flex-col sm:row-span-1 pb-[1.75vw] justify-between clip-around shadow-[0_0_0_100vmax_#060606] bottom-0 w-full pt-[3vw] px-[3vw] bg-[#060606]">
        <div className="sm:pb-[3vw]">
          <small className="font-normal text-white/50">SOCIALS</small>
          <ul className="lg:inline md:inline sm:flex sm:gap-x-[3vw]">
            {midia
              .map((x, i) => <li key={i} onMouseEnter={() => setCursorState("hovered")} onMouseLeave={() => setCursorState("normal")} className="mb-4 hover:text-white/50 duration-300 ease-smooth cursor-pointer text-white mix-blend-difference"><a target="_blank" href={x.href}>{x.title}</a></li>)
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