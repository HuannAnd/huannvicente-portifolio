"use client"

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import evalWithPercentage from "@/utils/evalWithPercentage";

import Skill from "@/layouts/Skills/Skill";

interface SkillsProps {

}


function Skills() {
  const ref = useRef<HTMLDivElement>(null!)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "1 1"] })

  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    ['-50%', '0%']
  )

  const pX = useTransform(
    titleX,
    (last) => {
      const percentageResult = (evalWithPercentage(last) * 0.75) * 100;
      const newValue = `${percentageResult}%`;
      return newValue;
    }
  );

  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum ullam adipisci quisquam dolores pariatur deserunt officiis incidunt recusandae, eum rerum corporis voluptate omnis laborum similique possimus quam debitis magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum ullam adipisci quisquam dolores pariatur deserunt officiis incidunt recusandae, eum rerum corporis voluptate omnis laborum similique possimus quam debitis magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum ullam adipisci quisquam dolores pariatur deserunt officiis incidunt recusandae, eum rerum corporis voluptate omnis laborum similique possimus quam debitis magni!"

  return (
    <section
      data-scroll
      data-scroll-section
      ref={ref}
      className="w-full overflow-x-hidden h-auto text-white">
      <div className="pt-[calc(3vw_*_.75)]">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeIn" } }}
          className="absolute top-0 font-semibold left-0 bg-white z-10 -translate-y-full h-[4px] w-full"
        />
        <motion.h1
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
          className="text-[clamp(120px,_8vw,_200px)] ease-fast w-auto pl-[3vw] font-normal uppercase">
          SKILLS{""}
          <span className="relative translate-y-1/2 font-normal text-[30px]">(6)</span>
        </motion.h1>
        {/* <Skill title="Typescript" text={text} /> */}
        {["Typescript", "C#", "Next.js", "React"]
          .map((title, i) => <Skill title={title} key={i} nTh={i + 1} text={text} />)
        }
      </div>
    </section >
  );
}

export default Skills
