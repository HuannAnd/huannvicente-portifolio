"use client";

export default function Footer() {
  return (
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
  )
}