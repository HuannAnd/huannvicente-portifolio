'use client';

import useFrameworks from "../hooks/useFrameworks";
import useId from "../hooks/useProjectId";
import useLanguages from "../hooks/useLanguages";

interface TechnologiesProps { }

export default function Technologies({ }: TechnologiesProps) {
  const projectId = useId()

  const languages = useLanguages(projectId)
  const frameworks = useFrameworks(projectId)

  if (!languages || !frameworks) return

  return (
    <section className="w-screen mx-auto px-4 h-auto py-[9vw]">
      <p className="text-white uppercase font-semibold">Languages</p>
      {languages.map((x, i) => <p key={i} className="text-white text-[30px] font-normal border-t-2 border-t-[#222] text-center py-[1.75vw]">{x.language} <small className="block font-light text-white/50">{x.percentage}%</small></p>)}
      <p className="text-white uppercase font-semibold">Frameworks</p>
      {frameworks.map((x, i) => <p key={i} className="text-white text-[30px] font-normal border-t-2 border-t-[#222] text-center py-[1.75vw]">{x}</p>)}
    </section>
  )
}