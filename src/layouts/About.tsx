"use client";

import Image from "next/image";

import { useRef } from "react";

import { Square, ColorazedButton } from '@/components';

import { motion } from 'framer-motion';

import { useIsVisible } from "@/hooks";


export default function About() {
  const ref = useRef<HTMLDivElement>(null!);
  const isVisible = useIsVisible(ref);

  console.log(`About section is visible? = ${isVisible}`);


  return (
    <section className=" w-full text-darkPrimary relative mb-[200px]" ref={ref}>
      <motion.div
        className="w-[541px] grid z-10 absolute bg-[#DCDCDC] top-0 h-[calc(100%+_124px)] shadow-md"
        initial={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
        }}
        animate={{
          clipPath: isVisible ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)",
          visibility: "visible",
        }}
        transition={{ duration: 1.4 }}
      >
        <Image
          className="w-full absolute bottom-0 mix-blend-darken saturate-0"
          src={"/profile/image.jpeg"}
          alt={"Profile image"} width={531} height={480}
        />
      </motion.div>
      <div className="clip-around py-24 w-full h-auto bg-primaryColor bg-darkPrimary grid grid-cols-12 gap-x-2 shadow-[0_0_0_100vmax_#222]">
        <article className="col-span-7 col-start-6">
          <h1 className="mb-2">Huann Vicente V.</h1>
          <ul className="mb-4">
            {["Frontend Developer", "Web Designer", "3D animator"].map((el, i) => <li key={i} className="text-body uppercase font-bold text-white/60 list-none">{el}</li>)}
          </ul>
          <p className="mb-16 text-darkSecondary/60">
            I am passionate about computer graphics and the Blender software. With expertise in React and Next, I enjoy combining my love for web development with my interest in creating visually stunning experiences.
            <br />
            <br />
            I strive to push the boundaries of design and technology, bringing engaging and immersive content to life. Let's collaborate and bring your ideas to the forefront of the digital world!
          </p>
          <ColorazedButton className="w-full">Takes a conversation!</ColorazedButton>
        </article>
      </div>
      <Square start={isVisible} delay={1} color="#716BCD" className="z-20 top-[56px] right-[104px] opacity-0" scale={1} />
      <Square start={isVisible} delay={2} color="#A379D5" width={40} className="z-20 -top-[24px] -right-[24px]" scale={1} />
      <Square start={isVisible} delay={3} color="#C6A068" className="-top-[24px] -left-[50px]" scale={1} />
      <Square start={isVisible} delay={4} color="#7BC58B" className="z-20 -top-[50px] left-[427px]" scale={1} />
      <Square start={isVisible} delay={5} color="#AFD992" className="z-20 -bottom-[161px] left-[318px]" scale={1} />
      <Square start={isVisible} delay={6} color="#7DC5C0" className=" bottom-[127px] left-[478px]" scale={1} />
      <Square start={isVisible} delay={7} color="#CC6462" className=" -bottom-[196px] left-[115px]" scale={1} />
      <Square start={isVisible} delay={8} color="#6677C6" className="z-20 -bottom-[46px] right-[155px]" scale={1} />
      <Square start={isVisible} delay={9} color="#82AED3" className="z-20 bottom-[5px] right-[267px] scale-[0.4]" scale={1} />
    </section>
  )
}