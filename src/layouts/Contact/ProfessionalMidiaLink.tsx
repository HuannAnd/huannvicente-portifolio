'use client';

import Link from "next/link";

import useFollowerSetCursorIcon from "@/hooks/useFollowerSetCursorIcon";
import useFollowerSetState from "@/hooks/useFollowerSetState";
interface ProfessionalMidiaLinkProps {
  href: string,
  children: React.ReactNode
}

export default function ProfessionalMidiaLink({ href, children, ...rest }: ProfessionalMidiaLinkProps) {
  const setCursorState = useFollowerSetState()
  const setCursorIcon = useFollowerSetCursorIcon()

  return (
    <Link
      {...rest}
      href={href}
      target="_blank"
      onMouseEnter={() => { setCursorState("hovered"); setCursorIcon("externalLink") }}
      onMouseDown={() => setCursorState("pressed")}
      onMouseUp={() => setCursorState("hovered")}
      onMouseLeave={() => { setCursorState("normal"); setCursorIcon(null) }}
      className="text-center inline-block saturate-0 w-full duration-300 cursor-pointer text-white py-[3vw] border-t-[#222] border-t-2 hover:text-white/50 font-regular"
    >{children}</Link>
  )
}