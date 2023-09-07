
'use client';

import useFollowerSetState from "@/hooks/useFollowerSetState";

interface SocialMidiaLinkProps {
  children: React.ReactNode,
  href: string
}

export default function SocialMidiaLink({ children, href }: SocialMidiaLinkProps) {
  const setCursorState = useFollowerSetState()
  
  return (
    <li
      onMouseEnter={() => setCursorState("hovered")}
      onMouseLeave={() => setCursorState("normal")}
      className="mb-4 hover:text-white/50 duration-300 ease-smooth cursor-pointer text-white mix-blend-difference"
    >
      <a target="_blank" href={href}>{children}</a>
    </li>
  )
}