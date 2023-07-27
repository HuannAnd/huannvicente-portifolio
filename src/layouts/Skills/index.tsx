"use client"

import { useRef } from "react";

import { motion } from "framer-motion";

import Skill from "./Skill";

interface SkillsProps {

}


function Skills() {
  const ref = useRef<HTMLDivElement>(null!)

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
        <h1
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
          className="text-[clamp(120px,_8vw,_200px)] ease-fast w-auto pl-[3vw] font-bold uppercase">
          SKILLS
        </h1>
        <Skill.Root>
          <Skill.LeftField>
            <Skill.Title title="Frontend" nTh={1} />
            <Skill.Content >
              <article className="grid grid-cols-1 grid-rows-2 gap-[3vw]">
                <div className="pr-[3vw]">
                  <h5>Technologies</h5>
                  <ul className="pt-[3vw] pl-auto">
                    <li className="text-[16px] text-white/50">React <small className="float-right text-white">05/20/2023</small></li>
                    <li className="text-[16px] text-white/50">Next.js <small className="float-right text-white">03/20/2023</small></li>
                    <li className="text-[16px] text-white/50">HTML5 <small className="float-right text-white">03/20/2023</small></li>
                    <li className="text-[16px] text-white/50">CSS3 & SCSS <small className="float-right text-white">06/20/2023</small></li>
                    <li className="text-[16px] text-white/50">TailwindCSS <small className="float-right text-white">06/20/2023</small></li>
                    <li className="text-[16px] text-white/50">Styled-Components <small className="float-right text-white">06/20/2023</small></li>
                    <li className="text-[16px] text-white/50">Javascript & Typescript <small className="float-right text-white">06/20/2023</small></li>
                  </ul>
                </div>
                <div className="pr-[3vw]">
                  <h5>Practices</h5>
                  <ul className="pt-[3vw] pl-auto">
                    <li className="text-white/50 text-[16px] ">SOLID <small className="float-right text-white">Channel</small></li>
                    <li className="text-white/50 text-[16px] ">BEM <small className="float-right text-white">Channel</small></li>
                    <li className="text-white/50 text-[16px] ">Clean Code <small className="float-right text-white">Profile</small></li>
                  </ul>
                </div>
                <div className="pr-[3vw]">
                  <h5>Databases</h5>
                  <ul className="pt-[3vw] pl-auto">
                    <li className="text-white/50 text-[16px] ">MongoDb</li>
                    <li className="text-white/50 text-[16px] ">MySQL</li>
                    <li className="text-white/50 text-[16px] ">Diego Fernandes (channel)</li>
                  </ul>
                </div>
              </article>
            </Skill.Content>
          </Skill.LeftField>
          <Skill.Aside >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam fugiat impedit iusto molestiae architecto beatae, quas aperiam laudantium voluptas totam ratione nesciunt? Ratione earum voluptatum consequatur! Quaerat, libero esse.
            Expedita quia qui tempore culpa quibusdam rem voluptates sapiente, dolor enim. Architecto natus hic veritatis dolore incidunt ad nesciunt fugit, dicta animi quo vel fuga voluptates amet possimus asperiores deserunt!
          </Skill.Aside>
        </Skill.Root>
        <Skill.Root>
          <Skill.LeftField>
            <Skill.Title title="Next.js" nTh={2} />
            <Skill.Content >
              <article className="grid grid-cols-2 grid-rows-2 gap-[3vw]">
                <div className="pr-[3vw]">
                  <h5>Projects</h5>
                  <ul className="pt-[3vw] pl-auto">
                    <li className="text-white/50 text-[16px] ">Mercantte</li>
                    <li className="text-white/50 text-[16px] ">Portifolio</li>
                  </ul>
                </div>
                <div className="pr-[3vw]">
                  <h5>Courses</h5>
                  <ul className="pt-[3vw] pl-auto">
                    <li className="text-white/50 text-[16px] ">Diego Fernandes (videos)</li>
                    <li className="text-white/50 text-[16px] ">Fireship (channel)</li>
                    <li className="text-white/50 text-[16px] ">Josh tried coding (Developed & Designed)</li>
                    <li className="text-white/50 text-[16px] ">Steve (Builder.io)</li>
                  </ul>
                </div>
              </article>
            </Skill.Content>
          </Skill.LeftField>
          <Skill.Aside >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam fugiat impedit iusto molestiae architecto beatae, quas aperiam laudantium voluptas totam ratione nesciunt? Ratione earum voluptatum consequatur! Quaerat, libero esse.
            Expedita quia qui tempore culpa quibusdam rem voluptates sapiente, dolor enim. Architecto natus hic veritatis dolore incidunt ad nesciunt fugit, dicta animi quo vel fuga voluptates amet possimus asperiores deserunt!
          </Skill.Aside>
        </Skill.Root>
      </div>
    </section >
  );
}

export default Skills
