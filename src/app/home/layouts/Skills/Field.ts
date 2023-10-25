'use client';

import { motion } from "framer-motion";
import FieldRoot from "./FieldRoot";
import FieldListener from "./FieldListener";
import FieldSkill from "./FieldSkill";
import FieldTitle from "./FieldTitle";

interface SkillProps {
  title: string
  skills: string[]
}

const Field = {
  Root: FieldRoot,
  Listener: FieldListener,
  Skill: FieldSkill,
  Title: FieldTitle
}

export default Field

// export default function Field({ title, skills, }: SkillProps) {
//   return (
//     <article className= "flex flex-col" >

//     <ul className="w-full h-auto z-50" >
//     {
//       skills
//           .map((title, key) => (
//         <div className= "overflow-hidden" key = { key } >
//         <motion.li
//                 key={ key }
//                 className = "py-2 w-full text-white text-[16px] font-normal"
//                 initial = {{ opacity: 0, y: 48 }}
//   transition = {{ duration: .1 }
// }
//               > { title } < /motion.li>
//   < /div>)
//           )
//         }
// </ul>
//   < /article>
//   )
// }