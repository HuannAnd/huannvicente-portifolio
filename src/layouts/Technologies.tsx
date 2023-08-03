'use client';
interface TechnologiesProps {
  languages: { language: string, percentage: number }[],
  frameworks: string[]
}

export default function Technologies({ languages, frameworks }: TechnologiesProps) {
  return (
    <section data-scroll-section data-scroll className="w-full max-w-[1440px] border-t-4 border-t-white h-[auto] py-[9vw]">
      <small className="font-light text-white block text-[16px] py-[3vw]">Languages</small>
      {languages.map((x, i) => <p key={i} className="text-white text-[30px] font-normal border-t-2 border-t-[#222] mx-[3vw] text-center py-[1.75vw]">{x.language} <small className="block font-light text-white/50">{x.percentage}%</small></p>)}
      <small className="font-light text-white block text-[16px] py-[3vw]">Frameworks</small>
      {frameworks.map((x, i) => <p key={i} className="text-white text-[30px] font-normal border-t-2 border-t-[#222] mx-[3vw] text-center py-[1.75vw]">{x}</p>)}
    </section>
  )
}