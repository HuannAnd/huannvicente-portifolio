"use client"

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import evalWithPercentage from "@/utils/evalWithPercentage";

import Skill from "./Skill";

interface SkillsProps {

}


function Skills() {
  const ref = useRef<HTMLDivElement>(null!)


  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum ullam adipisci quisquam dolores pariatur deserunt officiis incidunt recusandae, eum rerum corporis voluptate omnis laborum similique possimus quam debitis magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum ullam adipisci quisquam dolores pariatur deserunt officiis incidunt recusandae, eum rerum corporis voluptate omnis laborum similique possimus quam debitis magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum ullam adipisci quisquam dolores pariatur deserunt officiis incidunt recusandae, eum rerum corporis voluptate omnis laborum similique possimus quam debitis magni!"

  return (
    <section
      data-scroll
      data-scroll-section
      ref={ref}
      className="w-full overflow-x-hidden h-auto text-white bg-black z-50"
    >
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
          className="text-[clamp(120px,_8vw,_200px)] ease-fast w-auto pl-[3vw] font-bold uppercase">
          SKILLS
        </motion.h1>

        <Skill.Root>
          <Skill.LeftField>
            <Skill.Title title="Typescript" nTh={1} />
            <Skill.Content >
              <small>Overview</small>
              <ul className="pt-[3vw] pl-auto">
                <li className="text-white/50 text-[16px] ">Mercantte (Developed)</li>
                <li className="text-white/50 text-[16px] ">Letmeask (Training)</li>
                <li className="text-white/50 text-[16px] ">Portifolio (Developed & Designed)</li>
              </ul>
            </Skill.Content>
          </Skill.LeftField>
          <Skill.Aside >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam fugiat impedit iusto molestiae architecto beatae, quas aperiam laudantium voluptas totam ratione nesciunt? Ratione earum voluptatum consequatur! Quaerat, libero esse.
            Expedita quia qui tempore culpa quibusdam rem voluptates sapiente, dolor enim. Architecto natus hic veritatis dolore incidunt ad nesciunt fugit, dicta animi quo vel fuga voluptates amet possimus asperiores deserunt!
          </Skill.Aside>
        </Skill.Root>
        {/* {["Typescript", "C#", "Next.js", "React"]
          .map((title, i) => <Skill title={title} key={i} nTh={i + 1} text={text} />)
        } */}
      </div>
    </section >
  );
}

export default Skills
