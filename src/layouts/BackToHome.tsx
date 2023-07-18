'use client';

import Link from "next/link";

import { useFollowerContext } from "@/hooks/useFollowerContext";

interface BackToHomeProps {

}

export default function BackToHome({ }: BackToHomeProps) {
  const { setTitle, updateEvent } = useFollowerContext()

  function handleMouseEnter() {
    setTitle("Letmeask")
    updateEvent({ type: "hovered" })
  }

  function handleMouseLeave() {
    setTitle(null)
    updateEvent({ type: "normal" })
  }

  return (
    <section data-scroll-section data-scroll className="w-full px-[3vw] h-[100vh] relative flex justify-center gap-[3vw] items-center py-[9vw]">
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full py-[3vw] hover:text-white/50 duration-300 ease-smooth cursor-pointer text-[20px] font-regular text-white text-center border-t-2 border-t-[#111]"
      >
        <Link href="/" onClick={() => updateEvent({ type: "normal" })} >Next</Link>
      </p>
      <p
        onMouseEnter={() => {
          updateEvent({ type: "hovered" })
        }}
        onMouseLeave={handleMouseLeave}
        className="w-full py-[3vw] hover:text-white/50 duration-300 ease-smooth cursor-pointer text-[20px] font-regular text-white text-center border-t-2 border-t-[#111]"
      >
        <Link href="/" onClick={() => updateEvent({ type: "normal" })} >Home</Link>
      </p>
      <footer className="absolute flex flex-row justify-between clip-around shadow-[0_0_0_100vmax_#060606] bottom-0 w-full pt-[3vw] px-[9vw] bg-[#060606]">
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
  )
} 