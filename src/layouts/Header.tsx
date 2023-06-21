"use client";

import Link from "next/link";


export default function Header() {
  return (
    <header className="w-full h-[60px] p-5 relative bg-darkPrimary clip-around shadow-[0_0_0_100vmax_#222] text-darkPrimary">
      <div className="absolute left-0 h-full w-auto">
        <div
          className="h-auto w-auto"
          style={{ backgroundImage: "./public/profile-image-small.jpeg" }}
        >
        </div>
      </div>
      <nav className="flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center gap-10 font-bold text-white">
          <li className="text-white"><Link className="text-white" href="/">Overview</Link></li>
          <li><Link href="#">About me</Link></li>
          <li><Link href="#">Projects</Link></li>
        </ul>
      </nav>
    </header>

  )
}