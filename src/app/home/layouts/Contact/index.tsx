"use client";

import Polygon from "@/components/Polygon";
import LettersSlideInOnHover from "@/components/LettersSlideInOnHover";
import LettersSlideInOnView from "@/components/LettersSlideInOnView";


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
  const socialsMidiasLength = SOCIAL_MIDIA.length + PROFESSIONAL_MIDIA.length

  return (
    <section
      id="contact"
      className="w-screen mx-auto h-[200vh] py-[9vw] min-h-screen sm:h-[100dvh] sm:px-[3vw] px-4 relative ease-fast text-white"
    >
      <LettersSlideInOnView trigger="#contact">
        <h1 className="my-auto sm:text-center block text-[7rem] overflow-hidden col-span-11 mb-32 md:text-left lg:text-left uppercase text-white">
          Connect And
          <br />
          Keep Together
        </h1>
      </LettersSlideInOnView>
      <p className="sticky top-[8rem] uppercase inline font-semibold">Socials<span className="text-[11px] absolute translate-x-full text-white/50">{socialsMidiasLength}</span></p>
      <Polygon trigger="#contact" className="absolute right-0 -z-[1]" radius={500} isRegular vertexs={5} />
      <article className="pt-[3vw] h-1/2 w-auto block float-right ml-auto sm:row-span-2 sm:flex sm:justify-center">
        <div data-scroll data-scroll-speed="0.2" className="w-[55dvh] relative group/snapshot overflow-hidden aspect-square rounded-2xl bg-white">
          <img className="absolute h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]" src="/warren-poster4.png" alt="" />
          <div className="absolute w-full pb-4 px-4 bottom-0 text-black">
            <LettersSlideInOnHover>
              <small className="font-semibold overflow-hidden inline-block">&copy; Warren</small>
            </LettersSlideInOnHover>
            <LettersSlideInOnHover>
              <small className="float-right overflow-hidden inline-block">Art made by <span className="font-semibold">HuannAnd</span></small>
            </LettersSlideInOnHover>
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.4" className="w-[55dvh] group/snapshot right-32 relative overflow-hidden aspect-square rounded-2xl bg-white">
          <img className="absolute h-full object-cover ease-smooth duration-300 group-hover/snapshot:scale-[1.05]" src="/linkedin-poster.png" alt="" />
          <div className="absolute w-full pb-4 px-4 bottom-0 text-white">
            <LettersSlideInOnHover>
              <small className="font-semibold inline-block overflow-hidden">&copy; Linkedin</small>
            </LettersSlideInOnHover>
            <LettersSlideInOnHover>
              <small className="float-right inline-block overflow-hidden">Art made by <span className="font-semibold">HuannAnd</span></small>
            </LettersSlideInOnHover>
          </div>
        </div>

      </article>
    </section>

  );
}

export default Contact;