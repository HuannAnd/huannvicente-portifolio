"use client";

import Link from "next/link";

import { Variants, motion } from 'framer-motion'
import { title } from "process";

export default function Header() {

  const item: Variants = {
    scaled: { scale: 1.1 },
    smooth: { scale: 0.8 }
  }

  return (
    <header className="w-full h-[60px] p-5 relative bg-darkPrimary clip-around shadow-[0_0_0_100vmax_#000] text-darkPrimary">
      <div className="absolute left-0 h-full w-auto">
        <div
          className="h-auto w-auto"
          style={{ backgroundImage: "./public/profile-image-small.jpeg" }}
        >
        </div>
      </div>
      <nav className="flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center gap-10 font-bold text-white">
        <motion.li className="text-white cursor-pointer" whileHover="scaled" whileTap="smooth" variants={item}  >{title}</motion.li>
        <motion.li className="text-white cursor-pointer" whileHover="scaled" whileTap="smooth" variants={item}  >{title}</motion.li>
        <motion.li className="text-white cursor-pointer" whileHover="scaled" whileTap="smooth" variants={item}  >{title}</motion.li>
        </ul>
      </nav>
    </header>

  )
}