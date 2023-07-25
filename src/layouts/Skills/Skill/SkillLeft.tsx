'use client';

interface SkillLeftProps {
  children: React.ReactNode
}

export default function SkillLeft({ children }: SkillLeftProps) {
  return (
    <div
      data-scroll
      className="col-span-7 border-t-2 border-t-white/50 relative flex flex-col"
    >{children}</div>
  )
}