'use client';

interface SkillContentProps {
  children: React.ReactNode
}

export default function SkillContent({ children }: SkillContentProps) {
  return (
    <div className="ml-[3vw] py-[3vw]">
      {children}
    </div>
  )
}