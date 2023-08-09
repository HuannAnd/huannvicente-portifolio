"use client"

import { useEffect, useRef } from "react";

import { motion, useAnimate, useInView, stagger } from "framer-motion";

interface SkillsProps {

}

function Skills() {
  console.log("Skills was render")

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      animate("li", { opacity: 1, y: 0 }, { delay: stagger(0.3), duration: 1 })
    }
  },
    [isInView]
  )

  const technologies = ["HTML5", "Javascript & TypeScript", "CSS3 & SCSS", "MongoDB", "Firebase", "Docker", "Node.js"]
  const frameworks = ["React", "Next.js", "Styled-Components", "TailwindCSS"]
  const designSkills = ["UI & UX", "Interactive UI", "Full-stack Designer", "Figma"]


  return (
    <section
      data-scroll
      data-scroll-section
      id="skills"
      ref={scope}
      className="w-full overflow-x-hidden h-auto min-h-screen text-white bg-black z-50 pb-[9vw]"
    >
      <div className="pt-[calc(3vw_*_.75)]">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeIn" } }}
          viewport={{ once: true }}
          className="absolute top-0 font-semibold left-0 bg-white z-10 -translate-y-full h-[4px] w-full"
        />
        <h1
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
          className="text-[clamp(120px,_8vw,_200px)] ease-fast w-auto pl-[3vw] font-bold uppercase">
          SKILLS
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-[3vw] gap-x-[3vw] w-full h-auto px-[3vw]">
          <article className="flex flex-col">
            <div className="w-full h-auto">
              <small className="mb-[1.75vw] text-white/50 block uppercase" >Technologies</small>
              <hr />
            </div>
            <ul className="w-full h-auto">
              {technologies
                .map((title, key) => (
                  <motion.li
                    key={key}
                    className="py-[1.75vw] w-full ease-smooth duration-300 text-white text-[16px] font-normal"
                    initial={{ opacity: 0, y: 32 }}
                  >{title}</motion.li>)
                )
              }
            </ul>
          </article>
          <article className="flex flex-col">
            <div className="w-full h-auto">
              <small className="mb-[1.75vw] text-white/50 block uppercase">Frameworks</small>
              <hr />
            </div>
            <ul className="w-full h-auto">
              {frameworks
                .map((title, key) => (
                  <motion.li
                    key={key}
                    className="py-[1.75vw] w-full text-white text-[16px] font-normal"
                    initial={{ opacity: 0, y: 32 }}
                  >{title}</motion.li>)
                )
              }
            </ul>
          </article>
          <article className="flex flex-col">
            <div className="w-full h-auto">
              <small className="mb-[1.75vw] text-white/50 block uppercase">Design Skills</small>
              <hr />
            </div>
            <ul className="w-full h-auto">
              {designSkills
                .map((title, key) => (
                  <motion.li
                    key={key}
                    className="py-[1.75vw] w-full text-white text-[16px] font-normal"
                    initial={{ opacity: 0, y: 32 }}
                  >{title}</motion.li>)
                )
              }
            </ul>
          </article>
        </div>
      </div>
    </section >
  );
}

export default Skills
