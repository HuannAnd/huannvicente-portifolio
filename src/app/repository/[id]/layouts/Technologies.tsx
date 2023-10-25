'use client';

import useProjectFrameworks from "./useProjectFrameworks";
import useProjectId from "./useProjectId";
import useProjectLanguages from "./useProjectLanguages";

interface TechnologiesProps { }

export default function Technologies({ }: TechnologiesProps) {
  const projectId = useProjectId()

  const languages = useProjectLanguages(projectId)
  const frameworks = useProjectFrameworks(projectId)

  if (!languages || !frameworks) return

  return (
    <section data-scroll-section data-scroll className="w-full max-w-[1440px] px-[3vw] h-[auto] py-[9vw]">
      <small className="text-white/50 uppercase block py-[3vw]">Languages</small>
      {languages.map((x, i) => <p key={i} className="text-white text-[30px] font-normal border-t-2 border-t-[#222] text-center py-[1.75vw]">{x.language} <small className="block font-light text-white/50">{x.percentage}%</small></p>)}
      <small className="font-light text-white/50 uppercase block py-[3vw]">Frameworks</small>
      {frameworks.map((x, i) => <p key={i} className="text-white text-[30px] font-normal border-t-2 border-t-[#222] text-center py-[1.75vw]">{x}</p>)}
    </section>
  )
}