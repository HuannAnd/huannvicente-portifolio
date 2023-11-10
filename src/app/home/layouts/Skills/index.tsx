"use client"

import { useEffect } from "react";

import { motion, useAnimate, useInView, stagger } from "framer-motion";

import Field from "./Field";

interface SkillsProps { }

const TECHNOLOGIES = ["HTML5", "Javascript & TypeScript", "CSS3 & SCSS", "MongoDB", "Firebase", "Docker", "Node.js"]
const FRAMEWORKS = ["React", "Next.js", "Styled-Components", "TailwindCSS"]
const DESIGN_SKILLS = ["UI & UX", "Interactive UI", "Full-stack Designer", "Figma"]

export default function Skills({ }: SkillsProps) {
  const scope = useAnimationRef();

  return (
    <section
      data-scroll
      data-scroll-section
      id="skills"
      ref={scope}
      className="max-w-@content mx-auto overflow-x-hidden h-auto z-50 text-white bg-transparent sm:pb-[20vh] lg:pb-[9vw]"
    >
      <div className="pt-[3vw]">
        <h2 className="ease-fast w-auto pl-[3vw] uppercase">SKILLS</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-[3vw] gap-x-[3vw] w-full h-auto px-[3vw]">
          <Field.Root>
            <Field.Title>Technologies</Field.Title>
            <Field.Listener>
              {TECHNOLOGIES.map(x => <Field.Skill>{x}</Field.Skill>)}
            </Field.Listener>
          </Field.Root>
          <Field.Root>
            <Field.Title>Frameworks</Field.Title>
            <Field.Listener>
              {FRAMEWORKS.map(x => <Field.Skill>{x}</Field.Skill>)}
            </Field.Listener>
          </Field.Root>
          <Field.Root>
            <Field.Title>Design Skills</Field.Title>
            <Field.Listener>
              {DESIGN_SKILLS.map(x => <Field.Skill>{x}</Field.Skill>)}
            </Field.Listener>
          </Field.Root>
        </div>
      </div>
    </section >
  );
}

function useAnimationRef() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      animate("li", { opacity: 1, y: 0 }, { delay: stagger(0.1), duration: 2 })
    }
  },
    [isInView]
  )

  return scope
}