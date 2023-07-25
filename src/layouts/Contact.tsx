"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll } from "framer-motion";

import { useFollowerContext } from "@/hooks/useFollowerContext";
import Link from "next/link";

interface ContactProps {

}

const springConfig = {
  stiffness: 100,
  damping: 100,
}

const Contact: React.FunctionComponent<ContactProps> = ({ }) => {
  const ref = useRef<HTMLDivElement>(null!)
  const title = useRef<HTMLDivElement>(null!)

  const { updateEvent } = useFollowerContext()

  return (
    <section
      data-scroll
      data-scroll-section
      className="w-full h-auto [--container-padding:3vw] relative ease-fast text-white
      before:absolute before:w-full before:z-10 before:content-[''] before:h-[5vw] before:-top-1 before:left-0 before:rotate-180 before:bg-gradient-to-t before:from-black before:via-black before:to-transparent
      "
      ref={ref}
    >
      <motion.article
        data-scroll
        data-scroll-speed="-2"
        data-scroll-offset="-50%, 0%"
        className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 bg-black z-50 pt-[5vh]"
        ref={title}

      >
        <div className="col-span-8 z-40 lg:order-1 md:order-1 sm:order-2">
          <div className="col-span-5">
            <div className="w-full">
              <h1 className="text-[clamp(100px,_10vw,_200px)] sm:text-center md:text-left lg:text-left font-semibold uppercase text-white">Contact</h1>
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
        className="pt-[3vw]"
      >
        <div className="block pt-[9vw] pb-[3vw] -z-10">
          {[{ title: "Linkedin", href: "https://www.linkedin.com/in/huann-vicente-5092a9261/" }, { title: "Dribbble", href: "#" }]
            .map(
              (midia, key) => (
                <Link
                  href={midia.href}
                  key={key}
                  onMouseEnter={() => updateEvent({ type: "hovered" })}
                  onMouseDown={() => updateEvent({ type: "pressed" })}
                  onMouseUp={() => updateEvent({ type: "hovered" })}
                  onMouseLeave={() => updateEvent({ type: "normal" })}
                  className="text-center block saturate-0 mx-[3vw] w-full cursor-pointer text-white py-[3vw] border-t-[#222] border-t-2 hover:text-white/50 ease-smooth duration-300 font-regular"
                >{midia.title}</Link>
              )
            )}
        </div>
      </motion.article>
      <footer className="flex flex-row justify-between clip-around shadow-[0_0_0_100vmax_#060606] bottom-0 w-full pt-[3vw] px-[3vw] bg-[#060606]">
        <div>
          <small className="font-normal text-white/50">SOCIALS</small>
          <ul>
            {["Instagram", "Discord", "Facebook"]
              .map((x, i) => <li key={i} className="mb-4 text-white mix-blend-difference">{x}</li>)
            }
          </ul>
        </div>
        <div className="grid place-content-center">
          <p className="text-white">
            &copy; Developed By Huann Vicente
          </p>
        </div>
      </footer>
    </section>

  );
}

export default Contact;