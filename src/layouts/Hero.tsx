"use client";

import ColorazedButton from "@/components/ColorazedButton"

export default function Hero() {
  return (
    <div className="h-full grid grid-cols-12 z-10 justify-between gap-x-2 clip-around shadow-[0_0_0_100vmax_rgba(0,0,0,.5)] bg-black/50 bg-blend-hard-light items-center top-0 absolute text-black">
      <div className="h-full col-span-4 col-start-5 flex text-white items-center">
        <div className="w-full h-auto my-auto text-center">
          <h1 className="font-bold text-white w-auto mb-2">
            Hi
            <br />
            Welcome to
            <br />
            My Portifolio
          </h1>
          <p className="text-white/60 text-[20px] font-normal mb-8">Como desenvolvedor Frontend focado em React/Next, estou em busca de oportunidades para aplicar meus conhecimentos e expandir minha experiência nessa área emocionante e em constante evolução.</p>
          <small></small>
          <ColorazedButton className="h-[30px] px-3 py-2 w-auto text-center text-white">See my projects</ColorazedButton>
        </div>
      </div>
      <div
        className="r"
        style={{ backgroundImage: "" }}
      >
        <img src="" alt="" />
      </div>
    </div>
  )
}