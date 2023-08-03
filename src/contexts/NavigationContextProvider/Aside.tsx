'use client';

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

interface AsideProps {
  hamburguerIsOpen: boolean
}

export default function Aside({ hamburguerIsOpen }: AsideProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!hamburguerIsOpen) {
      setIsOpen(false)
    }
  }, [hamburguerIsOpen])

  return (
    <motion.aside
      className="h-screen bg-[#080808] pointer-events-auto flex flex-col justify-between items-center gap-[3vw] px-[9vw] fixed z-[100] right-0 top-0 "
      animate={isOpen ? { x: "0%", transition: { duration: 1 } } : { x: "100%", transition: { duration: .5 } }}
      initial={{ x: "100%" }}
      transition={{ ease: "easeIn" }}
    >
      <div className="w-full pt-[3vw]">
        <small className="text-[calc(100vw*0.00625)] font-normal text-white/50 pb-[1.75vw] block">NAVIGATION</small>
        <hr />
      </div>
      <div className="w-full">
        {["About", "Projects", "Skills", "Contact"]
          .map((title) => <motion.h5 className="text-[clamp(32px,_5vw,_160px)] duration-300 ease-fast hover:text-white/50 hover:translate-x-4 hover:left-[1vw] border-t-2 border-y-[#222] text-left w-full font-medium uppercase cursor-pointer text-white">{title}</motion.h5>)
        }
      </div>
      <footer className="flex bottom-0 lg:flex-row md:flex-row sm:flex-col justify-between w-full pt-[3vw]">
        <div className="sm:pb-[3vw] w-full">
          <small className="text-[calc(100vw*0.00625)] font-normal block text-white/50">SOCIALS</small>
          <ul className="lg:flex justify-between md:inline sm:flex sm:gap-x-[3vw]">
            {["Instagram", "Discord", "Facebook"]
              .map((x, i) => <li key={i} className="mb-4 text-white text-[calc(100vw*0.00625)] inline first:mx-0 last:mx-0 mx-[.3em] mix-blend-difference">{x}</li>)
            }
          </ul>
        </div>
      </footer>
    </motion.aside>
  )
}