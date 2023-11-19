'use client';

import useSetCursor from "@/hooks/useSetCursor";
import Link, { LinkProps } from "next/link";

interface MidialinkProps
  extends LinkProps,
  React.PropsWithChildren { }

export default function Midialink({ href, children, ...rest }: MidialinkProps) {
  const setCursor = useSetCursor()

  return (
    <Link
      {...rest}
      href={href}
      target="_blank"
      onMouseEnter={() => { setCursor({ icon: "externalLink", mode: "hovered" }) }}
      onMouseDown={() => setCursor({ mode: "pressed" })}
      onMouseUp={() => setCursor({ mode: "hovered" })}
      onMouseLeave={() => { setCursor({ icon: null, mode: "normal" }) }}
      className="text-center text-[1rem] inline-block saturate-0 w-full duration-300 cursor-pointer text-white py-[3vw] border-t-[#ffffff66] border-t-[1px] hover:text-white/50 font-regular"
    >{children}</Link>
  )
}